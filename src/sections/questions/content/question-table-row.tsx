import type { GridCellParams } from '@mui/x-data-grid';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { fTime, fDate } from 'src/utils/format-time';

import { Label } from 'src/components/label';

// ----------------------------------------------------------------------

type ParamsProps = {
  params: GridCellParams;
};

export function RenderCellName({ params }: ParamsProps) {
  return params?.row?.content;
}

export function RenderCellType({ params }: ParamsProps) {
  return (
    <Label variant="soft" color={(params.row.type === 'multiple_choice' && 'primary') || 'default'}>
      {params?.row?.type === 'multiple_choice' && 'Yagona tanlov'}
    </Label>
  );
}

export function RenderCellSubject({ params }: ParamsProps) {
  return (
    <Stack spacing={0.5}>
      <Box component="span">{params?.row?.subject?.name}</Box>
    </Stack>
  );
}
export function RenderCellAgeGroup({ params }: ParamsProps) {
  return (
    <Stack spacing={0.5}>
      <Box component="span">{params?.row?.age_group?.name}</Box>
    </Stack>
  );
}
export function RenderCellChapter({ params }: ParamsProps) {
  return (
    <Stack spacing={0.5}>
      <Box component="span">{params?.row?.chapter?.name}</Box>
    </Stack>
  );
}
export function RenderCellCreatedAt({ params }: ParamsProps) {
  return (
    <Stack spacing={0.5}>
      <Box component="span">{fDate(params?.row?.created_at, 'DD.MM.YYYY')}</Box>
      <Box component="span" sx={{ typography: 'caption', color: 'text.secondary' }}>
        {fTime(params?.row?.createdAt)}
      </Box>
    </Stack>
  );
}

export function RenderCellClasses({ params }: ParamsProps) {
  return (
    <Label variant="soft" color={(params.row.difficulty === 'published' && 'info') || 'default'}>
      {params?.row?.difficulty}
    </Label>
  );
}
