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
import { SignUpTypes } from "@/types/sign-up";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function SignUpSimpleForm({
  form,
  onSubmit,
  showPassword,
  togglePasswordVisibility,
}: SignUpTypes) {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-bl from-[#deeaf7] to-[#ffffff]">
      <div className="w-[400px] m-5 border bg-white shadow-2xl rounded-[20px] py-5 px-10">
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
          Create your account by filling in the details below
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your username"
                      className="h-11 rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="h-11 rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm your password"
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
            <Button
              type="submit"
              className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              Sign Up
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
