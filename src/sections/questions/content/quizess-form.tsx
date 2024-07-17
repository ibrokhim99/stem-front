import type { GridRowSelectionModel } from '@mui/x-data-grid';

import { z as zod } from 'zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Stack, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import useFileUploader from 'src/utils/file-uploader';

import { useGetSubjects } from 'src/api/subjects/hooks/useGetSubjects';
import { useGetAgeGroup } from 'src/api/age-group/hooks/useGetAgeGroup';
import { useCreateQuizess } from 'src/api/quizess/hooks/useCreateQuizess';

import { Form, Field, RHFSelect } from 'src/components/hook-form';
import { schemaHelper } from 'src/components/hook-form/schema-helper';

// ----------------------------------------------------------------------

export type UserQuickEditSchemaType = zod.infer<typeof UserQuickEditSchema>;

export const UserQuickEditSchema = zod.object({
  title: zod.string().min(1, { message: 'Name is required!' }),
  language: zod.string().min(1, { message: 'req' }),
  image: schemaHelper.file({ message: { required_error: 'Images is required!' } }),
  description: zod.string().min(1, { message: 'State is required!' }),
  start_time: zod.union([zod.string(), zod.number()]),
  duration: zod.number().min(1, { message: 'City is required!' }),
  age_group: zod.string().min(1, { message: 'required!' }),
  subject: zod.string().min(1, { message: 'Zip code is required!' }),
});

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  onClose: () => void;
  selectedQuizess: GridRowSelectionModel;
};

export function QuizessForm({ selectedQuizess, open, onClose }: Props) {
  const { uploadFile } = useFileUploader();
  const methods = useForm<UserQuickEditSchemaType>({
    mode: 'all',
    resolver: zodResolver(UserQuickEditSchema),
  });

  const { reset, handleSubmit } = methods;
  const { quizessCreate, isPending } = useCreateQuizess(onClose);
  const { data: subjectList } = useGetSubjects();
  const { data: ageGroupList } = useGetAgeGroup();
  const [step, setStep] = useState(1);

  const onSubmit = async (formValues: UserQuickEditSchemaType) => {
    reset();
    setStep(1);
    const value = await uploadFile<UserQuickEditSchemaType>(formValues, 'image');

    quizessCreate({
      ...value,
      questions: selectedQuizess,
      type: 'olympiad',
      is_public: true,
      registration: {
        start_time: new Date(),
        end_time: new Date(),
      },
    });
  };

  return (
    <Dialog fullWidth open={open} onClose={onClose} PaperProps={{ sx: { maxWidth: 624 } }}>
      <Form methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Olimpiyada </DialogTitle>

        <DialogContent>
          <Box rowGap={3} columnGap={2} display="grid">
            {step === 1 && (
              <>
                <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Olimpiada sarlavhasi</Typography>
                  <Field.Text size="small" name="title" />
                </Stack>

                <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Fani tanlang</Typography>
                  <RHFSelect hiddenLabel size="small" name="subject" data={subjectList} />
                </Stack>
                <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Olimpiada haqida batafsil</Typography>
                  <Field.Text
                    size="small"
                    fullWidth
                    name="description"
                    label="Olimpiada haqida batafsil yozing"
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                </Stack>
                <Stack spacing={1.5}>
                  <Typography variant="subtitle2">Rasm yuklang</Typography>
                  <Field.Upload
                    thumbnail
                    name="image"
                    maxSize={3145728}
                    onUpload={() => console.info('ON UPLOAD')}
                  />
                </Stack>
              </>
            )}
            {step === 2 && (
              <Box
                rowGap={3}
                columnGap={2}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                }}
              >
                <Stack spacing={1}>
                  <Typography variant="subtitle2">Olimpida davomiyligi minutda</Typography>
                  <Field.Text size="small" type="number" name="duration" />
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="subtitle2">Yoshi</Typography>
                  <RHFSelect
                    hiddenLabel
                    size="small"
                    name="age_group"
                    data={ageGroupList}
                    placeholder="Yoshi"
                  />
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="subtitle2">Tilni tanlang</Typography>
                  <RHFSelect
                    size="small"
                    name="language"
                    hiddenLabel
                    data={[
                      { _id: 'uz', name: "O'zbek tili" },
                      { _id: 'qr', name: 'Qoraqalpoq tili' },
                      { _id: 'ru', name: 'Rus tili' },
                      { _id: 'en', name: 'Ingliz tili' },
                    ]}
                  />
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="subtitle2">Boshlanish sanasi va vaqti</Typography>
                  <Field.MobileDateTimePicker name="start_time" />
                </Stack>
              </Box>
            )}
          </Box>
        </DialogContent>

        <DialogActions>
          {step === 1 && (
            <Button variant="outlined" onClick={onClose}>
              Bekor qilish
            </Button>
          )}
          {step === 2 && (
            <Button variant="outlined" onClick={() => setStep(1)}>
              Ortga
            </Button>
          )}
          {step === 1 && (
            <Button variant="contained" onClick={() => setStep(2)}>
              Kengisi
            </Button>
          )}
          {step === 2 && (
            <LoadingButton type="submit" variant="contained" loading={isPending}>
              Yaratish
            </LoadingButton>
          )}
        </DialogActions>
      </Form>
    </Dialog>
  );
}
