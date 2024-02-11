import { useState } from "react";
import { useForm } from "./hooks/useForm";
import { api } from "../../common/api/Api";
import { makeMessage } from "./helpers/makeMessage";
import { formValues as defaultValues } from "./resources/formValues";
import { FORM_FIELDS_NAMES } from "./enum/formFieldsNames";
import { validationSchema } from "./resources/validationSchema";
import { CustomInput } from "../CustomInput/CustomInput";
import { Button } from "../Button/Button";
import styles from "./styles.module.css";

export const Form = () => {
  const { submitHandler, register } = useForm(defaultValues, validationSchema);
  const [mode, setMode] = useState("form");

  const onSubmit = async (formValues) => {
    try {
      await api.sendMessage(makeMessage(formValues), (error) => {
        console.error(error);
      });
      setMode("success");
    } catch (e) {
      setMode("error");
    }
  };

  return (
    <>
      {
        {
          form: (
            <form className={styles.form} onSubmit={submitHandler(onSubmit)}>
              <CustomInput
                {...register(FORM_FIELDS_NAMES.name)}
                className={styles.input}
                helperText={"Ваше имя*"}
                placeholder="имя*"
                type="text"
              />
              <CustomInput
                {...register(FORM_FIELDS_NAMES.email)}
                className={styles.input}
                helperText={"Ваш email"}
                placeholder="email"
                type="email"
              />
              <CustomInput
                {...register(FORM_FIELDS_NAMES.phoneNumber)}
                helperText={"Ваш телефон *"}
                placeholder="номер телефона*"
                type="text"
              />
              <Button
                className={styles.button}
                variant={"primary"}
                text={"Отправить"}
              />
            </form>
          ),
          success: (
            <div className={styles.form}>
              <h3>Спасибо за обращение, мы обязательно свяжемся с вами</h3>
              <Button
                className={styles.button}
                type="button"
                onClick={() => {
                  setMode("form");
                }}
                variant={"primary"}
                text={"Отправить еще раз"}
              />
            </div>
          ),
          error: (
            <div className={styles.form}>
              <h3 style={{ color: "red" }}>Ошибка!!! Что то пошло не так</h3>
              <Button
                className={styles.button}
                type="button"
                onClick={() => {
                  setMode("form");
                }}
                variant={"primary"}
                text={"Попробовать  еще раз"}
              />
            </div>
          ),
        }[mode]
      }
    </>
  );
};
