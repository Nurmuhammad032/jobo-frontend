"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Check } from "lucide-react";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormErrorMessage,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { InputEmail, InputPassword } from "@/components/Input";
import { ButtonBlue } from "@/components/Button";
import {
  emailRequired,
  emailValid,
  passwordMessage,
} from "@/constants/errorMessage";

const data = [
  "Instantly schedule interviews",
  "Track your applications",
  "Download profile as a resume",
];

const formSchema = z.object({
  email: z.string().min(1, { message: emailRequired }).email(emailValid),
  password: z.string().min(8, {
    message: passwordMessage,
  }),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex flex-col items-center justify-between gap-y-8 lg:flex-row lg:items-start lg:gap-y-0">
      <div className="max-400">
        <h1 className="heading-xl">Create your free account</h1>
        <ul className="mt-6 flex flex-col gap-y-2">
          {data.map((item) => (
            <li key={item} className="flex items-center gap-x-2">
              <Check className="shrink-0 text-green-700" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="max-400">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2">Email</FormLabel>
                  <FormControl>
                    <InputEmail placeholder="Email address" {...field} />
                  </FormControl>
                  <FormErrorMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormDescription className="mb-2">
                    {passwordMessage}
                  </FormDescription>
                  <FormControl>
                    <InputPassword placeholder="Password" {...field} />
                  </FormControl>
                  <FormErrorMessage />
                </FormItem>
              )}
            />
            <ButtonBlue type="submit">Continue with email</ButtonBlue>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
