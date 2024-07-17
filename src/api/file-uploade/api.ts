import axiosInstance from 'src/utils/axios';

export const FileUpload = async (file: FormData) =>
  axiosInstance.post(`/upload?folder=images`, file);
