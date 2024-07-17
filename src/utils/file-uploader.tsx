import { useFileUpload } from 'src/api/file-uploade/hooks/useFileUpload';

export default function useFileUploader() {
  const { triggerFileUpload, isPending } = useFileUpload();

  async function uploadFile<TData>(
    values: Record<string, any>,
    key: keyof TData & string
  ): Promise<TData> {
    const file = values[key];
    if (!(file instanceof File)) {
      return values as TData;
    }

    const formData = new FormData();

    formData.append('file', file);

    try {
      const { data } = await triggerFileUpload(formData);
      return { ...values, [key]: data.data.url } as TData;
    } catch (error) {
      console.error('File upload failed:', error);
      throw error;
    }
  }

  return { uploadFile, isPending };
}
