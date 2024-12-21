"use client";

import { Button, Label, TextInput } from "flowbite-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import BreadcrumbComponent from "@/components/breadcrumb";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const { assignUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const currEmail = localStorage.getItem("currEmail") || "";
    setFormData((prev) => ({
      ...prev,
      email: currEmail,
    }));
  }, []);

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
      const response = await fetch("/api/auth/validate-otp", {
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

      assignUser(data?.token);
      toast.success("Verifikasi OTP Berhasil!");
      router.push("/");
    } catch (error: any) {
      toast.error(error.message || "Terjadi kesalahan saat verifikasi");
    } finally {
      setIsLoading(false);
      localStorage.removeItem("currEmail");
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
              <h1>
                Silahkan masukan kode OTP yang dikirim ke {formData.email}
              </h1>
            </div>
            <div>
              <div className="mb-2 block">
                <Label className="text-white" htmlFor="otp" value="Kode OTP" />
              </div>
              <TextInput
                id="otp"
                name="otp"
                type="number"
                placeholder="123456"
                required
                onChange={handleChange}
                value={formData.otp}
              />
            </div>

            <Button type="submit">
              {isLoading ? "Memverifikasi..." : "Verifikasi"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
