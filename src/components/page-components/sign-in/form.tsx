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
import Image from "next/image";

export default function SignInForm({ form, onSubmit }: SignInTypes) {
  return (
    <>
      <div className="w-[400px] border bg-white shadow-2xl rounded-[20px] py-5 px-10">
        <div className="flex items-center justify-center">
          <Image width={100} height={100} src={"/image.png"} alt="logo here" />
          <p className="text-xl font-bold flex items-start flex-col">
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
                <FormItem className="flex flex-col gap-3">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="mt-10" variant={"submit"} type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
