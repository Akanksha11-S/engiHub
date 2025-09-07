
import LoginForm from "@/components/auth/login-form";
import { Building2 } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
        <div className="w-full max-w-md space-y-6">
            <div className="text-center text-primary">
                <Building2 className="mx-auto h-12 w-12"/>
                <h1 className="text-3xl font-bold font-headline mt-2">EngiHub</h1>
                <p className="text-muted-foreground">Your Campus Marketplace</p>
            </div>
            <LoginForm />
        </div>
    </div>
  );
}
