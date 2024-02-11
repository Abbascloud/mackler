export const makeFormState = (defaultValues, validationSchema) => {
  const formState = {};

  for (let key in defaultValues) {
    formState[key] = {
      isValid: validationSchema?.[key] ? !validationSchema[key].required : true,
      errorMessage: null,
      isDirty: false,
      value: defaultValues[key],
    };
  }
  return formState;
};
