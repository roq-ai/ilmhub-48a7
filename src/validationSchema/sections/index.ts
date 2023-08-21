import * as yup from 'yup';

export const sectionValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  workspace_id: yup.string().nullable().required(),
});
