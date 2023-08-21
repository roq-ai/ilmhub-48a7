import * as yup from 'yup';

export const informationValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().nullable(),
  type: yup.string().required(),
  section_id: yup.string().nullable().required(),
});
