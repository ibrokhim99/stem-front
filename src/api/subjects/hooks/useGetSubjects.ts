import { get } from 'lodash';
import { useQuery } from '@tanstack/react-query';

import { GetSubjectsList } from '../api';

export const useGetSubjects = () => {
  const { data, ...args } = useQuery({
    queryKey: ['subject_list'],
    queryFn: () => GetSubjectsList(),
    // eslint-disable-next-line @typescript-eslint/no-shadow
    select: (data) => ({
      data: get(data, 'data.data'),
    }),
  });
  return {
    ...data,
    ...args,
  };
};
