import type { StackProps } from '@mui/material/Stack';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { bgGradient } from 'src/theme/styles';

// ----------------------------------------------------------------------

type Props = StackProps & {
  title?: string;
  description?: string;
  img?: React.ReactNode;
  action?: React.ReactNode;
};

export default function InfoCard({ title, description, action, img, ...other }: Props) {
  return (
    <Box
      sx={{
        ...bgGradient({
          color: ` to left,rgba(20, 26, 33, 0.8) , rgba(20, 26, 33, 0.7) `,
          imgUrl: '/assets/background/descriptin-card2.svg',
        }),
        pt: 0,
        pb: 0,
        pr: 3,
        gap: 5,
        borderRadius: 2,

        display: 'flex',
        height: { md: 1 },
        position: 'relative',
        pl: { xs: 3, md: 5 },
        alignItems: 'center',
        color: 'common.white',
        textAlign: { xs: 'center', md: 'left' },
        flexDirection: { xs: 'column', md: 'row' },
      }}
      {...other}
    >
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Typography variant="h4" sx={{ whiteSpace: 'pre-line', mb: 3, mt: 2 }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.64, maxWidth: 360, ...(action && { mb: 3 }) }}>
          {description}
        </Typography>

        {action && action}
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          mt: { xs: 3, md: 0 },
          ml: { xs: 0, md: 'auto' },
        }}
      >
        <img src="/assets/images/calc.svg" width={250} height={210} alt="math" />
      </Box>
    </Box>
  );
}
