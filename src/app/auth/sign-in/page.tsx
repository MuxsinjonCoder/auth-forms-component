"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SquareSplitHorizontal, SquareSquare } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState, Suspense } from "react";
import SignInSimpleForm from "@/components/page-components/sign-in/simple-form";
import SignInImageForm from "@/components/page-components/sign-in/image-form";
import SignInImageFormRight from "@/components/page-components/sign-in/image-form-right";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

function SignInContent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (newValue: string) => {
    const indexMap: Record<string, number> = {
      simple: 0,
      image: 1,
      "image-right": 2,
    };
    const tabIndex = indexMap[newValue] ?? 0;
    setTabIndex(tabIndex);
    const params = new URLSearchParams(window.location.search);
    params.set("tab", tabIndex.toString());
    router.push(`?${params.toString()}`);
    form.reset();
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    const tabIndexFromParam = tab ? Number(tab) : 0;
    setTabIndex(tabIndexFromParam);

    const titles = ["simple form", "form with image", "form with image right"];
    document.title = `Sign-in - ${titles[tabIndexFromParam] || "simple form"}`;
  }, []);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Sign in form values: ", values);

    toast.success(`Your login: ${values?.login || "Dont have a login"}`);
    toast.success(
      `Your password: ${values?.password || "Dont have a password"}`
    );
    form.reset();
  };

  return (
    <Tabs
      value={["simple", "image", "image-right"][tabIndex]}
      className="w-[400px]"
      onValueChange={handleTabChange}
    >
      <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50">
        <TabsList>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <TabsTrigger className="px-5" value="simple">
                  <SquareSquare />
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Simple login form</p>
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
                <p>Login form with image</p>
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
                <p>Login form with image right</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </TabsList>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-xs font-bold text-center">
            Select login form type
          </p>{" "}
          |
          <div className="w-[100px] p-0 m-0">
            <Link href={"/"}>
              <Button className="text-xs" variant={"link"}>
                Main page
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <TabsContent value="simple">
        <SignInSimpleForm
          form={form}
          onSubmit={onSubmit}
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      </TabsContent>
      <TabsContent value="image">
        <SignInImageForm
          form={form}
          onSubmit={onSubmit}
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      </TabsContent>
      <TabsContent value="image-right">
        <SignInImageFormRight
          form={form}
          onSubmit={onSubmit}
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      </TabsContent>
    </Tabs>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInContent />
    </Suspense>
  );
}
