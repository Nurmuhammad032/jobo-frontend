"use client";
import React from "react";
import { Loader2 } from "lucide-react";
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
import { apiFetch } from "@/lib/axiosConfig";
import { useToast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";
import { ApiError } from "@/types/error";
import { useMutation } from "@tanstack/react-query";
import { IResponse } from "@/types/apiResponse";
import { useRouter } from "next/navigation";

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
type IRegister = z.infer<typeof formSchema>;

const handleRegister = async (data: IRegister) => {
  const res = await apiFetch.post<IResponse<any>>(
    "/auth/register-candidate",
    data,
  );
  return res.data;
};

const Page = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<IRegister>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: createCandidate, isPending } = useMutation({
    mutationFn: (user: IRegister) => handleRegister(user),
    onSuccess: ({ status, token }) => {
      if (status) {
        if (token) {
          localStorage.setItem("token", token);
        }
        router.push("/candidate/profile");
      }
    },
    onError: (error: AxiosError<ApiError>) => {
      if (error.response?.data.message === "Email is already registered.") {
        form.setError("email", { message: "Bu email ro'yhatdan o'tgan" });
      } else {
        toast({
          variant: "destructive",
          title: "Something went wrong!",
          description: (error as Error).message,
        });
      }
    },
  });

  // Define a submit handler.
  async function onSubmit(user: IRegister) {
    createCandidate(user);
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
            <ButtonBlue type="submit" disabled={isPending}>
              <span className="flex justify-center px-2">
                {isPending && <Loader2 className="mr-2 animate-spin" />}
                Continue with email
              </span>
            </ButtonBlue>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
