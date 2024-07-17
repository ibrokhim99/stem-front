'use client';

import type { QuestionCard } from 'src/api/question/type';

import { z as zod } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState, useCallback } from 'react';

import { LoadingButton } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  List,
  Card,
  Stack,
  Radio,
  Button,
  MenuItem,
  ListItem,
  Container,
  TextField,
  IconButton,
  Typography,
  RadioGroup,
  ListItemSecondaryAction,
} from '@mui/material';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import useFileUploader from 'src/utils/file-uploader';

import { useGetSubjects } from 'src/api/subjects/hooks/useGetSubjects';
import { useGetAgeGroup } from 'src/api/age-group/hooks/useGetAgeGroup';
import { useEditQuestion } from 'src/api/question/hooks/useEditQuestion';
import { useGetChapterList } from 'src/api/chapters/hooks/getChapterList';
import { useCreateQuestion } from 'src/api/question/hooks/useCreateQuestion';

import { toast } from 'src/components/snackbar';
import { Form, Field } from 'src/components/hook-form';
import { RHFSelect } from 'src/components/hook-form/rhf-select';
import { schemaHelper } from 'src/components/hook-form/schema-helper';

import QuestionFilter from 'src/sections/filter/question-filter';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const NewQuestionSchema = zod.object({
  content: zod.string().min(1, { message: 'Content is required!' }),
  subject: zod.string().min(1, { message: 'Product code is required!' }),
  type: zod.string().min(1, { message: 'Product sku is required!' }),
  language: zod.string().min(1, { message: 'Language is required' }),
  difficulty: zod.number().min(1, { message: 'difficulty is req' }),
  media: schemaHelper.file().optional(),
  answers: zod
    .array(
      zod.object({
        id: zod.string(),
        value: zod.string().min(1, { message: 'Answer is required!' }),
      })
    )
    .min(1, { message: 'At least one answer is required' }),
  correctAnswerId: zod.string().optional(),
  age_group: zod.string(),
  chapter: zod.any().optional(),
});

export type NewQuestionSchemaType = zod.infer<typeof NewQuestionSchema>;

export default function CreateTestView({ currentQuestion }: any) {
  const defaultMedia = currentQuestion ? `https://iqtidorli.glmv.dev${currentQuestion?.media}` : '';
  const defaultValues = useMemo(
    () => ({
      content: currentQuestion?.content,
      subject: currentQuestion?.subject,
      media: defaultMedia,
      type: currentQuestion?.type,
      language: currentQuestion?.language,
      chapter: currentQuestion?.chapter,
      age_group: currentQuestion?.age_group,
      answers: currentQuestion?.answers.map((answer: any) => ({
        id: uuidv4(),
        value: answer.text,
      })) || [
        { id: uuidv4(), value: '' },
        { id: uuidv4(), value: '' },
        { id: uuidv4(), value: '' },
        { id: uuidv4(), value: '' },
      ],
      correctAnswerId: undefined,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentQuestion]
  );

  const methods = useForm<NewQuestionSchemaType>({
    resolver: zodResolver(NewQuestionSchema),
    defaultValues,
  });

  const [subjectCode, setSubjectCode] = useState<string | undefined>(undefined);
  const { uploadFile } = useFileUploader();
  const { data: chapterList } = useGetChapterList(subjectCode!);
  const { data: subjectList } = useGetSubjects();
  const { data: ageGroupList } = useGetAgeGroup();
  const { questionCreate, isPending: isCreatePendig } = useCreateQuestion();
  const { questionEdit, isPending: isEditPending } = useEditQuestion(currentQuestion?._id);

  const { handleSubmit, getValues, setValue, control } = methods;

  const handleFormChange = () => {
    const subject_code = getValues('subject');
    setSubjectCode(subject_code);
  };

  const onSubmit = handleSubmit(async (formValues) => {
    const answers = formValues.answers.map((option) => ({
      text: option.value,
      is_correct: option.id === formValues.correctAnswerId,
    }));
    const correct_answer = {
      text: formValues.answers.find((option) => option.id === formValues.correctAnswerId)?.value,
      is_correct: true,
    };
    delete formValues.correctAnswerId;

    const value = await uploadFile<QuestionCard>(formValues, 'media');

    try {
      if (currentQuestion) {
        questionEdit({
          ...value,

          answers,
          correct_answer,
        });
      } else {
        questionCreate({
          ...value,

          answers,
          correct_answer,
        });
      }
    } catch (error) {
      toast.error(error);
    }
  });
  const handleRemoveFile = useCallback(() => {
    setValue('media', null);
  }, [setValue]);

  const handleAddOption = () => {
    const answers = getValues('answers');
    setValue('answers', [...answers, { id: uuidv4(), value: '' }]);
  };

  const handleDeleteOption = (id: string) => {
    const answers = getValues('answers');
    setValue(
      'answers',
      answers.filter((option) => option.id !== id)
    );
  };

  return (
    <Container maxWidth="xl">
      <Box display="flex" p={2} m={2}>
        <Card sx={{ display: 'flex', p: 2, ml: 3, flexDirection: 'column', flex: 3 }}>
          <Form methods={methods} onSubmit={onSubmit}>
            <Stack direction="row" display="flex" justifyContent="space-between">
              <Typography variant="h6">Savol</Typography>
              <Stack direction="row">
                <Button
                  variant="outlined"
                  sx={{ mr: 2 }}
                  component={RouterLink}
                  href={paths.dashboard.two}
                >
                  Ortga
                </Button>
                <LoadingButton
                  variant="contained"
                  color="primary"
                  type="submit"
                  loading={currentQuestion ? isEditPending : isCreatePendig}
                >
                  {currentQuestion ? `Tahrirlash` : `Saqlash`}
                </LoadingButton>
              </Stack>
            </Stack>

            <QuestionFilter
              subject={subjectList}
              chapter={chapterList}
              onFormChange={handleFormChange}
              sx={{ mt: 3 }}
            />

            <Stack direction="row" spacing={2}>
              <Field.Text
                fullWidth
                label="Savol turi"
                select
                name="type"
                variant="outlined"
                sx={{ mb: 2, mt: 2 }}
              >
                <MenuItem value="multiple_choice">Yagona tanlovi</MenuItem>
              </Field.Text>
              <RHFSelect
                name="age_group"
                data={ageGroupList}
                label="Yosh chegarasi"
                sx={{ mb: 2, mt: 2 }}
              />
              <RHFSelect
                name="language"
                data={[
                  { _id: 'uz', name: 'UZ' },
                  { _id: 'qr', name: 'QR' },
                  { _id: 'ru', name: 'RU' },
                  { _id: 'en', name: 'EN' },
                ]}
                sx={{ mb: 2, mt: 2 }}
                label="Tili "
              />
              <RHFSelect
                name="difficulty"
                data={[
                  { _id: 1, name: '1' },
                  { _id: 2, name: '2' },
                  { _id: 3, name: '3' },
                  { _id: 4, name: '4' },
                  { _id: 5, name: '5' },
                  { _id: 6, name: '6' },
                  { _id: 7, name: '7' },
                  { _id: 8, name: '8' },
                  { _id: 9, name: '9' },
                  { _id: 10, name: '10' },
                ]}
                sx={{ mb: 2, mt: 2 }}
                label="Qiyinlik darajasi"
              />
            </Stack>

            <Field.Text
              fullWidth
              name="content"
              label="Masalani yozing"
              multiline
              rows={4}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Rasm yuklang</Typography>
              <Field.Upload
                thumbnail
                name="media"
                onDelete={handleRemoveFile}
                onUpload={() => console.info('ON UPLOAD')}
              />
            </Stack>

            <List>
              <RadioGroup
                value={methods.watch('correctAnswerId')}
                onChange={(e) => setValue('correctAnswerId', e.target.value)}
              >
                {methods.watch('answers')?.map((option, index) => (
                  <ListItem key={option.id}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                      <Controller
                        name={`answers.${index}.value`}
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            variant="standard"
                            InputProps={{
                              startAdornment: (
                                <Stack direction="row">
                                  <Typography variant="subtitle2" sx={{ mt: 2, mb: 2 }}>
                                    {alphabet[index]}
                                  </Typography>
                                  <Radio value={option.id} />
                                </Stack>
                              ),
                            }}
                            label="Javob uchun na'muna text"
                          />
                        )}
                      />
                    </Box>

                    <ListItemSecondaryAction>
                      <IconButton edge="end" onClick={() => handleDeleteOption(option.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </RadioGroup>
              <Button
                startIcon={<AddIcon />}
                variant="contained"
                color="success"
                sx={{ m: 2 }}
                onClick={handleAddOption}
              >
                Javob qoshish
              </Button>
            </List>
          </Form>
        </Card>
      </Box>
    </Container>
  );
}
