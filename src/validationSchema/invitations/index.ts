import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  workspace_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
