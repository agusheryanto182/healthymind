"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Lottie from "lottie-react";
import animationData from "@/public/assets/login.json";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export function LoginComponent() {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setIsVisiblePassword((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(formData.email, formData.password);
      toast.success("Login berhasil!");
      router.push("/");
    } catch (error: any) {
      toast.error(error.message || "Terjadi kesalahan saat login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-8 flex w-full max-w-[1200px] flex-col rounded-lg bg-[--primary] p-4 md:flex-row md:p-0">
      <div className="flex w-full items-center justify-center">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: "90%", height: "90%" }}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col  justify-center gap-4 px-4 py-4 md:px-16"
      >
        <div className="text-center text-xl font-bold text-white md:text-3xl">
          <h1>
            Selamat Datang di <br />
            HealthyMind Respati
          </h1>
        </div>
        <div>
          <div className="mb-2 block">
            <Label className="text-white" htmlFor="email1" value="Email" />
          </div>
          <TextInput
            id="email1"
            name="email"
            type="email"
            placeholder="john@students.respati.ac.id"
            required
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              className="text-white"
              htmlFor="password1"
              value="Password"
            />
          </div>
          <TextInput
            id="password1"
            type={isVisiblePassword ? "text" : "password"}
            name="password"
            required
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Checkbox
              onChange={togglePasswordVisibility}
              id="show-password-checkbox"
              aria-label="Tampilkan password"
            />
            <Label
              htmlFor="show-password-checkbox"
              className="cursor-pointer text-white"
            >
              Tampilkan password
            </Label>
          </div>
          <Link href="/send-otp">
            <p className="text-sm font-semibold text-white hover:text-cyan-900">
              Lupa password?
            </p>
          </Link>
        </div>

        <Button type="submit">{isLoading ? "Memuat..." : "Masuk"}</Button>
        <div>
          <p className="text-sm  font-semibold text-white">
            Belum punya akun?{" "}
            <a href="/register" className="hover:text-cyan-900">
              Daftar disini
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
