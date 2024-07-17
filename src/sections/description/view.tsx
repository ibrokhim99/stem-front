'use client';

import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { SeoIllustration } from 'src/assets/illustrations';

import AboutSection from './component/about';
import QuestionsCard from './component/question-card';
import HowToApplySection from './component/how-to-apply';
import CertificateSection from './component/certificate';
import SubscriptionFormSection from '../landing/landing-reg-quiz/landing-reg-quiz-view';

// ----------------------------------------------------------------------

export default function DescriptionView() {
  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <Grid container spacing={3}>
        <Grid xs={12} sx={{ mb: 3 }}>
          <QuestionsCard
            title="Matematika olimpiadasi"
            description="Mental matematika  bo'yicha 9-sinflar uchun olimpiada"
            img={<SeoIllustration />}
            grade="9-sinf"
            date="22.12.2024 gacha"
            action={
              <Button variant="contained" color="primary">
                Qatnashish
              </Button>
            }
          />
        </Grid>
        <Grid xs={12} sx={{ mb: 10 }}>
          <HowToApplySection />
        </Grid>
        <Grid xs={12} sx={{ mb: 10 }}>
          <AboutSection />
        </Grid>
        <Grid xs={12} sx={{ mb: 10 }}>
          <CertificateSection />
        </Grid>
        <Grid xs={12} sx={{ mb: 10 }}>
          <SubscriptionFormSection />
        </Grid>
      </Grid>
    </Container>
  );
}
