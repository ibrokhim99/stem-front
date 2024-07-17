'use client';

import { z } from 'zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Box, Card } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';
import { LogoMin } from 'src/components/logo/logo-min';

import { useAuthContext } from 'src/auth/hooks';
import { signInWithPassword } from 'src/auth/context/jwt';

import { isEmail, isPhoneNumber } from '../utils';

const SignInSchema = z.object({
  contact: z
    .string()
    .min(1, { message: 'Contact is required!' })
    .refine(
      (value) => {
        if (isEmail(value)) {
          return z.string().email().safeParse(value).success;
        }
        return isPhoneNumber(value);
      },
      {
        message: 'Must be a valid email or phone number with at least 9 digits',
      }
    ),
  password: z
    .string()
    .min(1, { message: 'Password is required!' })
    .min(6, { message: 'Password must be at least 6 characters!' }),
});

export function JwtSignInView() {
  const { checkUserSession } = useAuthContext();
  const router = useRouter();
  const password = useBoolean();
  const [errorMsg, setErrorMsg] = useState('');

  const defaultValues = {
    contact: '',
    password: '',
  };

  const methods = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const contactInfo = isEmail(data.contact) ? { email: data.contact } : { phone: data.contact };
      await signInWithPassword({
        ...contactInfo,
        password: data.password,
        auth_method: isEmail(data.contact) ? 'email' : 'phone',
      });
      await checkUserSession?.();
      router.refresh();
    } catch (error) {
      console.error(error);
      setErrorMsg(error instanceof Error ? error.message : String(error.error));
    }
  });

  const renderHead = (
    <Stack spacing={1.5} sx={{ mb: 5, justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 96,
          height: 96,
          borderRadius: '50%',
          background:
            'linear-gradient(135deg, rgba(0, 167, 111, 0) 0%, rgba(0, 167, 111, 0.16) 100%)',
        }}
      >
        <LogoMin disableLink width={56} height={56} />
      </Box>
      <Typography variant="h5">Kirish</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          Sizda akkaunt yo’qmi?
        </Typography>
        <Link component={RouterLink} href={paths.auth.jwt.signRole}>
          Ro’yxatdan o’ting
        </Link>
      </Stack>
    </Stack>
  );

  return (
    <Card sx={{ p: 3, width: 510, mx: 'auto', mt: 5 }}>
      {renderHead}

      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      <Form methods={methods} onSubmit={onSubmit}>
        <Stack spacing={3} alignItems="center">
          <Field.Text
            name="contact"
            label="Email yoki Telefon raqam"
            InputLabelProps={{ shrink: true }}
          />
          <Field.Text
            name="password"
            label="Password"
            placeholder="6+ characters"
            type={password.value ? 'text' : 'password'}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={password.onToggle} edge="end">
                    <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <LoadingButton
            fullWidth
            color="inherit"
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            loadingIndicator="Create account..."
          >
            Kirish
          </LoadingButton>
        </Stack>
      </Form>
    </Card>
  );
}
