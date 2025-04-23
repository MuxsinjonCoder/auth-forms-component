import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen  mx-auto flex items-center justify-center flex-wrap gap-5 bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec] dark:from-[#1a1b26] dark:to-[#2a2b36] transition-colors duration-500">
      <div className="w-[30%] group">
        <Link href={"/auth/sign-in"}>
          <Button
            variant={"submit"}
            className="relative w-full py-3 px-6 text-lg font-medium bg-[oklch(41.7%_0.12_150.3)] hover:bg-[oklch(45%_0.14_150.3)] text-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:animate-shine" />
            <ArrowLeft className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="relative z-10">Sign in page</span>
          </Button>
        </Link>
      </div>
      <div className="w-[30%] group">
        <Link href={"/auth/sign-up"}>
          <Button
            variant={"submit"}
            className="relative w-full py-3 px-6 text-lg font-medium bg-[oklch(41.7%_0.12_150.3)] hover:bg-[oklch(45%_0.14_150.3)] text-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:animate-shine" />
            <span className="relative z-10">Sign up page</span>
            <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
