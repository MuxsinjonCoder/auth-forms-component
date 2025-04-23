import { UseFormReturn } from "react-hook-form";

export interface SignUpTypes {
  form: UseFormReturn<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>;
  onSubmit: (data: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => void;
  showPassword?: boolean;
  togglePasswordVisibility?: () => void;
}
