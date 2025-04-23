import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignInTypes } from "@/types/sign-in";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function SignInSimpleForm({
  form,
  onSubmit,
  showPassword,
  togglePasswordVisibility,
}: SignInTypes) {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-bl from-[#deeaf7] to-[#ffffff]">
        <div className="w-[400px] m-5 border bg-white shadow-2xl rounded-[20px] py-5 px-10">
          <div className="flex items-center justify-center">
            <Image
              width={60}
              height={60}
              src={"/default-logo.png"}
              alt="logo here"
            />
            <p className="text-lg font-bold flex items-start flex-col">
              Default <span>logo</span>
            </p>
          </div>
          <div>
            <p className="text-sm mb-5 opacity-60">
              Enter your login and password given by admin
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* login */}
              <FormField
                control={form.control}
                name="login"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-3">
                    <FormLabel>Login</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your login" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="h-11 rounded-lg border-gray-200 pr-10 focus:ring-2 focus:ring-blue-500"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                          tabIndex={-1}
                        >
                          {showPassword ? (
                            <EyeOff className="cursor-pointer" size={18} />
                          ) : (
                            <Eye className="cursor-pointer" size={18} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />

              <Button className="mt-10" variant={"submit"} type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
