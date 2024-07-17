import type { StackProps } from '@mui/material/Stack';

import { Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

import { bgGradient } from 'src/theme/styles';

// ----------------------------------------------------------------------

type Props = StackProps & {
  title?: string;
  description?: string;
  img?: React.ReactNode;
  action?: React.ReactNode;
  grade?: string;
  date?: string;
};

export default function QuestionsCard({
  title,
  description,
  action,
  grade,
  date,
  img,
  ...other
}: Props) {
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
        <Typography variant="h4" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.64, maxWidth: 360, ...(action && { mb: 1 }) }}>
          {description}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
          <Typography
            variant="caption"
            sx={{
              bgcolor: 'rgba(205, 233, 226, 1)',
              color: 'rgba(0, 120, 103, 1)',
              borderRadius: 1,
              px: 1,
              mr: 1,
            }}
          >
            {grade}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              bgcolor: 'rgba(246, 233, 208, 1)',
              color: 'rgba(183, 110, 0, 1)',
              borderRadius: 1,
              px: 1,
            }}
          >
            {date}
          </Typography>
        </Stack>

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
        <img src="/assets/images/maths-rotate.png" width={600} height={210} alt="math" />
      </Box>
    </Box>
  );
}
