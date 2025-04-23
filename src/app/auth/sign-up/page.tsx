"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SquareSplitHorizontal, SquareSquare } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import SignInSimpleForm from "@/components/page-components/sign-up/simple-form";
import SignInImageForm from "@/components/page-components/sign-up/image-form";
import { useRouter, useSearchParams } from "next/navigation";
import SignInImageFormRight from "@/components/page-components/sign-up/image-form-right";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SignUpImageForm from "@/components/page-components/sign-up/image-form";
import SignUpImageFormRight from "@/components/page-components/sign-up/image-form-right";
import SignUpSimpleForm from "@/components/page-components/sign-up/simple-form";

const formSchema = z
  .object({
    username: z
      .string()
      .min(4, { message: "Username must be at least 4 characters" })
      .max(20, { message: "Username must be maximum 20 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .max(30, { message: "Password must be at most 30 characters" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        }
      ),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function SignUpPage() {
  // forms
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // states
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  // halpers
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (newValue: string) => {
    const indexMap: Record<string, number> = {
      simple: 0,
      image: 1,
      "image-right": 2,
    };
    const tabIndex = indexMap[newValue] ?? 0;
    setTabIndex(tabIndex);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabIndex.toString());
    router.push(`?${params.toString()}`);
    form.reset();
  };

  useEffect(() => {
    const tab = searchParams.get("tab");
    const tabIndexFromParam = tab ? Number(tab) : 0;
    setTabIndex(tabIndexFromParam);

    const titles = ["simple form", "form with image", "form with image right"];
    document.title = `Sign-up - ${titles[tabIndexFromParam] || "simple form"}`;
  }, [searchParams]);

  // functions
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Sign up form values: ", values);
    toast.success(`Your sign up form datas:
      Username: ${values.username}
      Email: ${values.email}
      Password: ${values.password}
      Confirm password: ${values.confirmPassword}`);
    form.reset();
  };

  return (
    <>
      <Tabs
        value={["simple", "image", "image-right"][tabIndex]}
        className="w-[400px]"
        onValueChange={handleTabChange}
      >
        <div className="fixed top-5 left-52 transform -translate-x-1/2 z-50">
          <TabsList>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <TabsTrigger className="px-5" value="simple">
                    <SquareSquare />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Simple Sign up form</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <TabsTrigger className="px-5" value="image">
                    <SquareSplitHorizontal />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Sign up form with image</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <TabsTrigger className="px-5" value="image-right">
                    <SquareSplitHorizontal />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Sign up form with image right</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TabsList>
          <div className="flex items-center justify-center gap-2 mt-4">
            <p className="text-xs font-semibold text-gray-600">
              Select sign-up form type
            </p>
            <span className="text-xs text-gray-400">|</span>
            <Link href="/">
              <Button variant="link" className="text-xs text-blue-600">
                Main page
              </Button>
            </Link>
          </div>
        </div>

        <TabsContent value="simple">
          <SignUpSimpleForm
            form={form}
            onSubmit={onSubmit}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />
        </TabsContent>
        <TabsContent value="image">
          <SignUpImageForm
            form={form}
            onSubmit={onSubmit}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />
        </TabsContent>
        <TabsContent value="image-right">
          <SignUpImageFormRight
            form={form}
            onSubmit={onSubmit}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />
        </TabsContent>
      </Tabs>
    </>
  );
}
