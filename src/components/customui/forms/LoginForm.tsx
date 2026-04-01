"use client";

import { Button } from "@/components/shadcnui/button";
import { Field, FieldError, FieldLabel } from "@/components/shadcnui/field";
import { Input } from "@/components/shadcnui/input";
import { loginSchema, LoginType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, SendIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const handleLogin = async (Login: LoginType) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(Login);

    // setRegister(register);

    // toast.success("Registered successfully!");

    // registerForm.reset();

    // push("/");
  };
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="grid gap-4"
      noValidate>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor={field.name}
              className="text-[16px]">
              Email
            </FieldLabel>
            <Input
              {...field}
              type="email"
              id="form-rhf-demo-title"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Your email"
              autoComplete="email"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor={field.name}
              className="text-[16px]">
              Password
            </FieldLabel>
            <Input
              {...field}
              type="password"
              id="form-rhf-demo-title"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Your Password"
              autoComplete="Password"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        type="submit"
        className="flex items-center gap-2 text-lg"
        disabled={isSubmitting}>
        {isSubmitting ?
          <>
            <LoaderIcon className="animate-spin" />
            Submitting.....
          </>
        : <>
            <SendIcon />
            submit
          </>
        }
      </Button>
    </form>
  );
};

export default LoginForm;
