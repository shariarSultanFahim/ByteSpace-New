"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { loginSchema, type LoginFormValues } from "@/schemas";

import { supabase } from "@/lib/supabase";

import { AuthLayout } from "@/components/widgets";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormValues>({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LoginFormValues, string>>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validation = loginSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof LoginFormValues, string>> = {};
      for (const issue of validation.error.issues) {
        const path = issue.path[0] as keyof LoginFormValues;
        if (!fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      });

      if (error) {
        toast.error(error.message || "Invalid email or password.");
        return;
      }

      if (data.user) {
        toast.success("Welcome back! Redirecting...");
        router.push("/");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred.";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialClick = (provider: "google" | "facebook") => {
    toast.info(`${provider === "google" ? "Google" : "Facebook"} sign-in coming soon!`);
  };

  return (
    <AuthLayout
      headingSubtitle="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="flex flex-col gap-[32px] sm:gap-[40px]">
        {/* Header */}
        <div>
          <p className="font-sans text-[18px] leading-[1.6] text-brand-primary">Sign In</p>
          <h2 className="mt-1 font-['Poppins'] text-[36px] leading-[1.2] font-semibold tracking-[-0.44px] text-text-ink sm:text-[44px]">
            Welcome Back
          </h2>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
          {/* Email */}
          <div className="flex flex-col gap-[8px]">
            <label
              htmlFor="email"
              className="font-sans text-[14px] leading-[1.2] font-medium text-text-ink"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="designer@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`h-[52px] w-full rounded-[12px] border bg-white px-[24px] py-[12px] font-sans text-[16px] text-text-ink placeholder-text-muted transition-colors outline-none ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-border-light focus:border-brand-primary"
              }`}
            />
            {errors.email && <p className="font-sans text-[12px] text-red-500">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-[8px]">
            <label
              htmlFor="password"
              className="font-sans text-[14px] leading-[1.2] font-medium text-text-ink"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className={`h-[52px] w-full rounded-[12px] border bg-white px-[24px] py-[12px] font-sans text-[16px] text-text-ink placeholder-text-muted transition-colors outline-none ${
                errors.password
                  ? "border-red-500 focus:border-red-500"
                  : "border-border-light focus:border-brand-primary"
              }`}
            />
            {errors.password && (
              <p className="font-sans text-[12px] text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Submit Button aligned to right */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="flex h-[46px] items-center justify-center rounded-[24px] bg-brand-lime px-[24px] py-[12px] font-sans text-[18px] leading-[1.2] font-medium text-text-ink transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>

        {/* Divider with "or" */}
        <div className="relative my-2 flex items-center justify-center">
          <div className="w-full border-t border-border-soft" />
          <span className="absolute bg-white px-3 font-sans text-[16px] text-text-muted">or</span>
        </div>

        {/* Social Buttons: Facebook & Google (72x72 square rounded frames) */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => handleSocialClick("facebook")}
            className="flex size-[72px] items-center justify-center rounded-[16px] border border-border-light bg-white transition-all hover:bg-[#f9fafb] hover:shadow-md"
          >
            <Image src="/images/facebook.svg" alt="Facebook" width={32} height={32} />
          </button>
          <button
            type="button"
            onClick={() => handleSocialClick("google")}
            className="flex size-[72px] items-center justify-center rounded-[16px] border border-border-light bg-white transition-all hover:bg-[#f9fafb] hover:shadow-md"
          >
            <Image src="/images/google.svg" alt="Google" width={32} height={32} />
          </button>
        </div>

        {/* Link to Register */}
        <div className="mt-4 flex items-center justify-center gap-1 font-sans text-[16px] leading-[1.6]">
          <span className="text-text-subtle">New user?</span>
          <Link href="/register" className="font-medium text-brand-primary hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
