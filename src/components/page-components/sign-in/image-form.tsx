import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignInTypes } from "@/types/sign-in";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function SignInImageForm({
  form,
  onSubmit,
  showPassword,
  togglePasswordVisibility,
}: SignInTypes) {
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          fill
          src="/default-banner.png"
          alt="default banner"
          className="object-cover"
          priority
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="w-full max-w-md mx-4 sm:mx-8 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              width={60}
              height={60}
              src="/default-logo.png"
              alt="logo"
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-800">Default</span>
              <span className="text-lg font-medium text-gray-600">Logo</span>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mb-8">
            Enter your login and password given by admin
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* login */}
              <FormField
                control={form.control}
                name="login"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Login</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your login"
                        className="h-11 rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
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
              <Button variant={"submit"} type="submit">
                Sign In
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
