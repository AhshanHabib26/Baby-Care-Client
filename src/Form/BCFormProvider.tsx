"use client"
import { FieldValues, FormProvider, useForm } from "react-hook-form";

const BCFormProvider = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default BCFormProvider;
