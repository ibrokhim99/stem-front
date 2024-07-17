'use client';

import { Grid, Button, Container } from '@mui/material';

import { _appFeatured } from 'src/_mock';

import InfoCard from './content/info-card';
import { CarouselCard } from './content/carousel-card';
import { QuizListView } from '../landing/landing-content/quiz/quiz-view';
import SubscriptionFormSection from '../landing/landing-reg-quiz/landing-reg-quiz-view';

// ----------------------------------------------------------------------

export function StundentView() {
  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <Grid container spacing={3}>
        <Grid xs={12} md={8} sx={{ mr: 2 }}>
          <InfoCard
            title={`Matematika fani bo’yicha yangi olimpiadaga \n start berildi `}
            description="Matematika fani bo’yicha o’tkazilayotgan olimpiadada hoziroq qatnashing!"
            action={
              <Button variant="contained" color="primary" sx={{ mb: 3 }}>
                Boshlash
              </Button>
            }
          />
        </Grid>
        <Grid xs={12} md={3}>
          <CarouselCard list={_appFeatured} />
        </Grid>
        <Grid xs={12} md={12}>
          <QuizListView />
        </Grid>
        <Grid xs={12} md={12}>
          <QuizListView />
        </Grid>

        <Grid xs={12} md={12} sx={{ mb: 15, mt: 15 }}>
          <SubscriptionFormSection />
        </Grid>
      </Grid>
    </Container>
  );
}
