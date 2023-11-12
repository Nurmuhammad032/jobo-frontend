"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormErrorMessage,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  emailRequired,
  emailValid,
  passwordMessage,
} from "@/constants/errorMessage";
import { InputEmail, InputPassword } from "@/components/Input";
import { ButtonBlue } from "@/components/Button";
import Link from "next/link";
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
    <section>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="heading-xl">Log in</h1>
          <div className="mt-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
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
          <div className="mt-10 text-center">
            <p>Need to create an account? Sign up as a:</p>
            <div className="mt-2 flex justify-center">
              <Link href={"register-candidate"} className="text-blue">
                Job seeker
              </Link>
              <span className="mx-2 text-[#131215]">|</span>
              <Link href={"register-employer"} className="text-blue">
                Employer{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
