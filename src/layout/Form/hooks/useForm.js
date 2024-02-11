import { useState, useEffect } from "react";
import { makeFormState } from "./helper/makeFormState";
export const useForm = (defaultValues, validationSchema) => {
  const [formState, setFormState] = useState(
    makeFormState(defaultValues, validationSchema)
  );
  const [isInValidForm, setIsInValidForm] = useState(true);

  const submitHandler = (submitCallback) => {
    return (event) => {
      event.preventDefault();
      const arrForm = Object.entries(formState)

      setFormState(Object.fromEntries(arrForm.map(([key, element]) => {
        const value = element.value;
        const isInvalidValue = !value.match(validationSchema[key].schema);
        return [key, {
          ...element, isValid: !isInvalidValue, errorMessage: isInvalidValue
            ? validationSchema[key].errorMessage
            : null,
        }]
      })));
      !isInValidForm && submitCallback(formState);
    };
  };

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const isInvalidValue = !value.match(validationSchema[name].schema);
    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        isValid: !isInvalidValue,
        errorMessage: isInvalidValue
          ? validationSchema[name].errorMessage
          : null,
        isDirty: !value.length,
        value: value,
      },
    });
  };
  const register = (name) => ({
    onChange,
    value: formState[name].value,
    name,
    isValid: formState[name].isValid,
    errorText: formState[name].errorMessage
  });
  useEffect(() => {
    console.log(formState);
    const isValidationFailed = Boolean(
      Object.values(formState).find((item) => !item.isValid)
    );
    setIsInValidForm(() => isValidationFailed);
  }, [formState]);

  return { submitHandler, onChange, formState, isInValidForm, register };
};
