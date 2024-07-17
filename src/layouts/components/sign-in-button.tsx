import type { ButtonProps } from '@mui/material/Button';

import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export function SignInButton({ sx, ...other }: ButtonProps) {
  return (
    <Button
      fullWidth
      component={RouterLink}
      href={paths.auth.jwt.signIn}
      variant="contained"
      color="primary"
      sx={sx}
      {...other}
    >
      Kirish
    </Button>
  );
}
