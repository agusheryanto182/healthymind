"use client";

import { Button, Label, TextInput } from "flowbite-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BreadcrumbComponent from "@/components/breadcrumb";

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
  });

  const [isLoading, setIsLoading] = useState(false);

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
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Terjadi kesalahan saat verifikasi");
        return;
      }

      toast.success("Berhasil mengirim OTP");
      router.push("/verify-otp");
    } catch (error: any) {
      toast.error(error.message || "Terjadi kesalahan saat verifikasi");
    } finally {
      localStorage.setItem("currEmail", formData.email);
      setIsLoading(false);
    }
  };

  return (
    <>
      <BreadcrumbComponent title="Masuk" />
      <div className="px-4">
        <div className="h-50 mx-auto mt-8 flex w-full max-w-screen-md flex-col rounded-lg bg-[--primary] p-4 md:h-80 md:flex-row md:p-0">
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col  justify-center gap-4 px-4 py-4 md:px-16"
          >
            <div className="text-center text-lg font-bold text-white md:text-2xl">
              <h1>Silahkan masukan email akun anda</h1>
            </div>
            <div>
              <div className="mb-2 block">
                <Label className="text-white" htmlFor="email" value="Email" />
              </div>
              <TextInput
                id="email"
                name="email"
                type="email"
                placeholder="john@students.respati.ac.id"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            <Button type="submit">
              {isLoading ? "Mengirim..." : "Kirim OTP"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
