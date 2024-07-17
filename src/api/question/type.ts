export interface Answers {
  text: string | undefined;
  media?: string;
  is_correct: boolean;
}

export interface QuestionCard {
  media?: string | File | null;
  content: string;
  subject: string;
  chapter?: string;
  type: string;
  difficulty: number;
  age_group: string;
  answers: Answers[];
  correct_answer: Answers;
}
