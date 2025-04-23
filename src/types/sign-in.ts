import { UseFormReturn } from "react-hook-form";

export interface SignInTypes {
  form: UseFormReturn<{ login: string; password: string }>;
  onSubmit: (data: { login: string; password: string }) => void;
  showPassword?: boolean;
  togglePasswordVisibility?: any;
}
