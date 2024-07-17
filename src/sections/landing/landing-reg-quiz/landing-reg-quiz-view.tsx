'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Box, Button, Checkbox, TextField, Typography, FormControlLabel } from '@mui/material';

const SubscriptionFormSection = () => (
  <Box sx={{ position: 'relative' }}>
    <Box>
      <form style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Yangi olimpiadalar haqida
            <br /> birinchilardan bo’lib biling
          </Typography>
          <Typography variant="subtitle2" sx={{ mb: 4, color: 'text.secondary' }}>
            5-11 sinf oʻquvchilari uchun fan olimpiadalari uchun Oʻzbekistondagi eng birinchi
            platforma
          </Typography>
          <TextField
            fullWidth
            label="Ismingiz"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#fff' }}
          />
          <TextField
            fullWidth
            label="Telefon raqamingiz"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#fff' }}
          />
          <FormControlLabel
            control={<Checkbox name="consent" />}
            label={
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                }}
              >
                <Link href="/fqa">Foydalanuvchi shartlariga</Link>
                <Typography>rozilik bildiraman</Typography>
              </div>
            }
          />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            right: 0,
            top: 0,
          }}
        >
          <Image
            src="/assets/images/books.png"
            alt="Books and Graduation Hat"
            objectFit="contain"
            width={500}
            height={500}
          />
        </Box>
      </form>

      <Button variant="contained" color="primary">
        A’zo bo’lish
      </Button>
    </Box>
  </Box>
);

export default SubscriptionFormSection;
