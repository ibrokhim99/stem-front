'use client';

import Box from '@mui/material/Box';
import { Container } from '@mui/material';

import FAQSection from './landing-fqa/landing-fqa';
import HowItWorksSection from './landing-works/landing-works-view';
import { LandingContentView } from './landing-content/landing-content-view';
import SubscriptionFormSection from './landing-reg-quiz/landing-reg-quiz-view';
import ParticipantsSectionView from './landing_about-us/participants-section-view';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
};

export function LandingView({ title = 'Blank' }: Props) {
  return (
    <Container maxWidth="xl">
      <Box>
        <LandingContentView />
      </Box>
      <Box sx={{ mt: 4, mb: 6 }}>
        <ParticipantsSectionView />
      </Box>
      <Box>
        <HowItWorksSection />
      </Box>
      <Box>
        <SubscriptionFormSection />
      </Box>
      <Box>
        <FAQSection />
      </Box>
    </Container>
  );
}
