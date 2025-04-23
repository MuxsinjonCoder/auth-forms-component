"use client";

import SignInForm from "@/components/page-components/sign-in/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  login: z
    .string()
    .min(4, { message: "Login must be at least 4 characters" })
    .max(20, { message: "Login must be maximum 20 characters" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" })
    .max(30, { message: "Password must be at least 30 characters" }),
});

export default function SignInPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen w-full bg-gradient-to-bl from-[#deeaf7] to-[#ffffff]">
        <SignInForm form={form} onSubmit={onSubmit} />
      </div>
    </>
  );
}
