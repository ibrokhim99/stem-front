import { RHFUpload } from './rhf-upload';
import { RHFTextField } from './rhf-text-field';
import { RHFDatePicker, RHFMobileTimePicker, RHFMobileDateTimePicker } from './rhf-date-picker';

// ----------------------------------------------------------------------

export const Field = {
  Text: RHFTextField,
  Upload: RHFUpload,
  DatePicker: RHFDatePicker,
  MobileDateTimePicker: RHFMobileDateTimePicker,
  MobileTimePicker: RHFMobileTimePicker,
};
