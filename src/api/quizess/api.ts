import axiosInstance from 'src/utils/axios';

import type { Quizess } from './type';

export const CreateQuizess = async (values: Quizess) => axiosInstance.post(`/quizzes`, values);

export const GetQuizess = async () => axiosInstance.get(`/quizzes`);

export const DeleteQuizess = async (id?: string) => axiosInstance.delete(`quizzes/${id}`);
