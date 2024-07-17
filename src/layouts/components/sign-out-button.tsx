import type { ButtonProps } from '@mui/material/Button';
import type { Theme, SxProps } from '@mui/material/styles';

import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

type Props = ButtonProps & {
  sx?: SxProps<Theme>;
  onClose?: () => void;
};

export function SignOutButton({ onClose, ...other }: Props) {
  return (
    <Button
      fullWidth
      variant="outlined"
      color="primary"
      component={RouterLink}
      href={paths.auth.jwt.signRole}
      {...other}
    >
      Ro’yxatdan o’tish
    </Button>
  );
}
