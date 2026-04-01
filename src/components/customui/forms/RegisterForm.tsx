"use client";

import { Button } from "@/components/shadcnui/button";
import { Field, FieldError, FieldLabel } from "@/components/shadcnui/field";
import { Input } from "@/components/shadcnui/input";
import { registeratom } from "@/lib/atoms";
import { registerSchema, RegisterType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSetAtom } from "jotai";
import { LoaderIcon, SendIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const setRegister = useSetAtom(registeratom);

  const { push } = useRouter();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "all",
  });
  const handleRegister = async (register: RegisterType) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(register);

    setRegister(register);

    toast.success("Registered successfully!");

    reset();
    push("/");
  };
  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="grid gap-4"
      noValidate>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor={field.name}
              className="text-[16px]">
              Name
            </FieldLabel>
            <Input
              {...field}
              type="text"
              id="form-rhf-demo-title"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Your name"
              autoComplete="name"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
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

export default RegisterForm;
