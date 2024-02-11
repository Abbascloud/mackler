import { FORM_FIELDS_NAMES } from "../enum/formFieldsNames";
export const validationSchema = {
  [FORM_FIELDS_NAMES.name]: {
    required: true,
    schema: /^\D{1,20}$/gm,
    errorMessage:
      "обязательно для заполнения",
  },
  [FORM_FIELDS_NAMES.phoneNumber]: {
    required: true,
    schema: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/gm,
    errorMessage:
      "обязательно для заполнения",
  },
  [FORM_FIELDS_NAMES.email]: {
    required: false,
    schema: /^(.+@.+\..+)?$/gm,
    errorMessage: "неверный формат почты.",
  },
};
