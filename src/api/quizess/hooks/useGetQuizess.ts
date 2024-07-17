import { get } from 'lodash';
import { useQuery } from '@tanstack/react-query';

import { GetQuizess } from '../api';

export const useGetQuizess = () => {
  const { data, ...args } = useQuery({
    queryKey: ['quizess_list'],
    queryFn: () => GetQuizess(),
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
