import axiosInstance from 'src/utils/axios';

import type { Subject } from './type';

export const GetSubjectsList = async () =>
  axiosInstance.get<{ data: Subject }>(`/subjects?limit=50`);
