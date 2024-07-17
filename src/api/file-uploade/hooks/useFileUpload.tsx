import { useMutation } from '@tanstack/react-query';

import { FileUpload } from '../api';

export const useFileUpload = () => {
  const { mutateAsync, isSuccess, isError, isPending } = useMutation({
    mutationFn: (file: FormData) => FileUpload(file),
    onError: (error: any) => console.log(error),
  });

  return { triggerFileUpload: mutateAsync, isSuccess, isError, isPending };
};
