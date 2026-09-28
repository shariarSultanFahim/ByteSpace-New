"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { registerSchema, type RegisterFormValues } from "@/schemas";

import { supabase } from "@/lib/supabase";

import { AuthLayout } from "@/components/widgets";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterFormValues>({
    fullName: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof RegisterFormValues, string>>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validation = registerSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof RegisterFormValues, string>> = {};
      for (const issue of validation.error.issues) {
        const path = issue.path[0] as keyof RegisterFormValues;
        if (!fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName
          }
        }
      });

      if (error) {
        toast.error(error.message || "Registration failed. Please check your credentials.");
        return;
      }

      if (data.user) {
        toast.success("Account created successfully! Redirecting...");
        router.push("/");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred.";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      headingSubtitle="Sign up and come in"
      headingTitle="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="flex flex-col gap-[32px] sm:gap-[40px]">
        {/* Header */}
        <div>
          <p className="font-sans text-[18px] leading-[1.6] text-[#003be2]">Create an Account</p>
          <h2 className="mt-1 font-['Poppins'] text-[36px] leading-[1.2] font-semibold tracking-[-0.44px] text-[#242528] sm:text-[44px]">
            Welcome to
            <br />
            ByteSpace
          </h2>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
          {/* Full Name */}
          <div className="flex flex-col gap-[8px]">
            <label
              htmlFor="fullName"
              className="font-sans text-[14px] leading-[1.2] font-medium text-[#242528]"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Jamie Davis"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`h-[52px] w-full rounded-[12px] border bg-white px-[24px] py-[12px] font-sans text-[16px] text-[#242528] placeholder-[#82868e] transition-colors outline-none ${
                errors.fullName
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#e5e6e8] focus:border-[#003be2]"
              }`}
            />
            {errors.fullName && (
              <p className="font-sans text-[12px] text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-[8px]">
            <label
              htmlFor="email"
              className="font-sans text-[14px] leading-[1.2] font-medium text-[#242528]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="designer@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`h-[52px] w-full rounded-[12px] border bg-white px-[24px] py-[12px] font-sans text-[16px] text-[#242528] placeholder-[#82868e] transition-colors outline-none ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#e5e6e8] focus:border-[#003be2]"
              }`}
            />
            {errors.email && <p className="font-sans text-[12px] text-red-500">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-[8px]">
            <label
              htmlFor="password"
              className="font-sans text-[14px] leading-[1.2] font-medium text-[#242528]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className={`h-[52px] w-full rounded-[12px] border bg-white px-[24px] py-[12px] font-sans text-[16px] text-[#242528] placeholder-[#82868e] transition-colors outline-none ${
                errors.password
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#e5e6e8] focus:border-[#003be2]"
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
              className="flex h-[46px] items-center justify-center rounded-[24px] bg-[#d4fb20] px-[24px] py-[12px] font-sans text-[18px] leading-[1.2] font-medium text-[#242528] transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              {isLoading ? "Signing Up..." : "Continue"}
            </button>
          </div>
        </form>

        {/* Link to Login */}
        <div className="mt-8 flex items-center justify-center gap-1 font-sans text-[16px] leading-[1.6]">
          <span className="text-[#4b4c53]">Already have an account?</span>
          <Link href="/login" className="font-medium text-[#003be2] hover:underline">
            Login
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
