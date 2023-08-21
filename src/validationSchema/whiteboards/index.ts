import * as yup from 'yup';

export const whiteboardValidationSchema = yup.object().shape({
  content: yup.string().nullable(),
  name: yup.string().required(),
  workspace_id: yup.string().nullable().required(),
});
