import type { GridRowSelectionModel } from '@mui/x-data-grid';

export interface Quizess {
  title: string;
  description: string;
  image: string | File | null;
  language: string;
  subject: string;
  age_group: string;
  questions: GridRowSelectionModel;
  duration: number;
  start_time: string | number;
  type: string;
  registration: {
    start_time: Date;
    end_time: Date;
  };
  is_public: boolean;
}
