'use client';

import Image from 'next/image';

import { Box, Card, Button, Typography, CardContent } from '@mui/material';

type QuizCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  grade: string;
  date: string;
  buttonText: string;
};

export const QuizCard = ({
  imageSrc,
  title,
  description,
  grade,
  date,
  buttonText,
}: QuizCardProps) => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <CardContent sx={{ textAlign: 'center' }}>
      <Image src={imageSrc} alt={title} width={64} height={64} />
      <Typography variant="h6" sx={{ mt: 2 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
        {description}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Typography variant="caption" sx={{ bgcolor: '#e0f7fa', borderRadius: 1, px: 1, mr: 1 }}>
          {grade}
        </Typography>
        <Typography variant="caption" sx={{ bgcolor: '#fff3e0', borderRadius: 1, px: 1 }}>
          {date}
        </Typography>
      </Box>
    </CardContent>
    <Button variant="contained" color="primary" sx={{ m: 2 }}>
      {buttonText}
    </Button>
  </Card>
);
