export const makeMessage = (formValues) => {
  const date = new Date();
  return `
    Заявка: ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}
    время: ${date.toTimeString()}
    имя: ${formValues.name.value}
    номер телефона: ${formValues.phoneNumber.value}
    почта: ${formValues.email.value || "-"}
    `;
};
