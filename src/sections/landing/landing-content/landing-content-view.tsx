'use client';

import { Box } from '@mui/material';

import { QuizListView } from './quiz/quiz-view';
import { BannerView } from './banner/banner-view';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
};

export function LandingContentView({ title = 'Blank' }: Props) {
  return (
    <>
      <BannerView />

      <Box>
        <QuizListView />
      </Box>
    </>
  );
}
