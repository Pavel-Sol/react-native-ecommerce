import React from "react";
import { View, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { TextInput } from "./fields/TextInput";
import { ButtonPrimary } from "../button/ButtonPrimary";
import { useAppDispatch } from "@app/hooks";
import { login } from "@app/redux/asyncActions";

type FormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { email: "maria@mail.com", password: "12345" } });

  const onSubmit = (values: FormData) => {
    console.log(values);
    dispatch(login({ email: values.email, password: values.password }));
  };

  return (
    <>
      <TextInput control={control} name="email" />
      <TextInput control={control} name="password" />
      <View>
        <ButtonPrimary onPress={handleSubmit(onSubmit)} style={s.buttonLogin}>
          Войти
        </ButtonPrimary>
      </View>
    </>
  );
};

const s = StyleSheet.create({
  buttonLogin: {
    marginTop: 40,
  },
});
