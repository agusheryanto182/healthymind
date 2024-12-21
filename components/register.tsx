"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Lottie from "lottie-react";
import animationData from "@/public/assets/register.json";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function RegisterComponent() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    nim: "",
    prodi: "S-1 Kebidanan",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setIsVisiblePassword((prev) => !prev);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checkbox.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    localStorage.setItem("currEmail", formData.email);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Terjadi kesalahan");
      }

      toast.success("Registrasi berhasil!");
      router.push("/verify-otp");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col rounded-lg bg-[--primary] p-4 md:flex-row md:p-0">
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
        className="flex w-full flex-col justify-center gap-4 px-4 py-8 md:px-16"
      >
        <div className="text-center text-3xl font-bold text-white">
          <h1>Ayo Segera Daftar!</h1>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Nama Lengkap" className="text-white" />
          </div>
          <TextInput
            id="name"
            name="name"
            placeholder="John Doe"
            required
            shadow
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="nim" value="NIM" className="text-white" />
          </div>
          <TextInput
            id="nim"
            name="nim"
            placeholder="223039003"
            required
            shadow
            value={formData.nim}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="prodi"
              value="Program Studi"
              className="text-white"
            />
          </div>
          <select
            id="prodi"
            name="prodi"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
            required
            value={formData.prodi}
            onChange={handleChange}
          >
            <option value="S-1 Informatika">S-1 Informatika</option>
            <option value="S-1 Sistem Informasi">S-1 Sistem Informasi</option>
            <option value="S-1 Teknik Elektro">S-1 Teknik Elektro</option>
            <option value="S-1 Gizi">S-1 Gizi</option>
            <option value="S-1 Keperawatan">S-1 Keperawatan</option>
            <option value="S-1 Kesehatan Masyarakat">
              S-1 Kesehatan Masyarakat
            </option>
            <option value="D-3 Kebidanan">D-3 Kebidanan</option>
            <option value="D-3 Fisioterapi">D-3 Fisioterapi</option>
            <option value="S-1 Kebidanan">S-1 Kebidanan</option>
            <option value="S-1 Akuntansi">S-1 Akuntansi</option>
            <option value="S-1 Hubungan Internasional">
              S-1 Hubungan Internasional
            </option>
            <option value="S-1 Ilmu Komunikasi">S-1 Ilmu Komunikasi</option>
            <option value="S-1 Sastra Inggris">S-1 Sastra Inggris</option>
          </select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" className="text-white" />
          </div>
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="john@students.respati.ac.id"
            required
            shadow
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" className="text-white" />
          </div>
          <TextInput
            id="password"
            name="password"
            type={isVisiblePassword ? "text" : "password"}
            required
            shadow
            value={formData.password}
            onChange={handleChange}
          />
        </div>
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
            Tampilkan Password
          </Label>
        </div>
        {/* <div className="flex items-center gap-2">
          <Checkbox
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
          />
          <Label htmlFor="agreeToTerms" className="flex text-white">
            Saya menyetujui&nbsp;&nbsp;
            <Link
              href="#"
              className="text-cyan-900 hover:underline dark:text-cyan-500"
            >
              Syarat dan Ketentuan
            </Link>
          </Label>
        </div> */}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Mendaftar..." : "Daftar Sekarang"}
        </Button>
      </form>
    </div>
  );
}
