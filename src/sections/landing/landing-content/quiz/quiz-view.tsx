'use client';

import { Box, Grid, Typography } from '@mui/material';

import { QuizCard } from './quiz-card';

export function QuizListView() {
  return (
    <Box
      sx={{
        mt: 4,
      }}
    >
      <Typography variant="h2" sx={{ mb: 4 }}>
        Olimpiadalar
      </Typography>
      <Typography variant="body1" sx={{ mb: 9, color: 'text.secondary' }}>
        5-11 sinf oʻquvchilari uchun fan olimpiadalari uchun Oʻzbekistondagi <br /> eng birinchi
        platforma
      </Typography>
      <Grid container spacing={5}>
        {[
          {
            imageSrc: '/assets/images/image2.png',
            title: 'Matematika olimpiadasi',
            description: "Mental matematika bo'yicha 9-sinflar uchun olimpiada",
            grade: '9-sinf',
            date: '22.12.2024 gacha',
            buttonText: 'Ishtirok etish',
          },
          {
            imageSrc: '/assets/images/image3.png',
            title: 'Fizika olimpiadasi',
            description: "Fizika bo'yicha 9-sinflar uchun olimpiada",
            grade: '9-sinf',
            date: '22.12.2024 gacha',
            buttonText: 'Ishtirok etish',
          },
          {
            imageSrc: '/assets/images/image4.png',
            title: 'Kimyo olimpiadasi',
            description: "Mental matematika bo'yicha 9-sinflar uchun olimpiada",
            grade: '9-sinf',
            date: '22.12.2024 gacha',
            buttonText: 'Ishtirok etish',
          },
          {
            imageSrc: '/assets/images/image5.png',
            title: 'Geometriya olimpiadasi',
            description: "Mental matematika bo'yicha 9-sinflar uchun olimpiada",
            grade: '9-sinf',
            date: '22.12.2024 gacha',
            buttonText: 'Ishtirok etish',
          },
          {
            imageSrc: '/assets/images/image2.png',
            title: 'Matematika olimpiadasi',
            description: "Mental matematika bo'yicha 9-sinflar uchun olimpiada",
            grade: '9-sinf',
            date: '22.12.2024 gacha',
            buttonText: 'Ishtirok etish',
          },
          {
            imageSrc: '/assets/images/image3.png',
            title: 'Fizika olimpiadasi',
            description: "Fizika bo'yicha 9-sinflar uchun olimpiada",
            grade: '9-sinf',
            date: '22.12.2024 gacha',
            buttonText: 'Ishtirok etish',
          },
          {
            imageSrc: '/assets/images/image4.png',
            title: 'Kimyo olimpiadasi',
            description: "Mental matematika bo'yicha 9-sinflar uchun olimpiada",
            grade: '9-sinf',
            date: '22.12.2024 gacha',
            buttonText: 'Ishtirok etish',
          },
          {
            imageSrc: '/assets/images/image5.png',
            title: 'Geometriya olimpiadasi',
            description: "Mental matematika bo'yicha 9-sinflar uchun olimpiada",
            grade: '9-sinf',
            date: '22.12.2024 gacha',
            buttonText: 'Ishtirok etish',
          },
        ].map((olympiad, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <QuizCard {...olympiad} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
