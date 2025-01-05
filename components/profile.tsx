"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useUser } from "@/hooks/useUser";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export function ProfileComponent() {
  const [imageSrc, setImageSrc] = useState<string>("/assets/icons/profile.svg");
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nim, setNim] = useState<string>("");
  const [prodi, setProdi] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setIsLoading] = useState<boolean>(true);
  const [avatar, setAvatar] = useState<File | null>(null);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setIsVisiblePassword((prev) => !prev);
  };

  const router = useRouter();
  const { user: authUser } = useAuth();
  const { user } = useUser(authUser?.id || "");

  useEffect(() => {
    setIsLoading(true);
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setNim(user.nim);
      setProdi(user.prodi);
      setIsLoading(false);
      setImageSrc(user.avatar || "assets/icons/profile.svg");
    }
  }, [user]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
      setAvatar(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (name) formData.append("name", name);
    if (email) formData.append("email", email);
    if (nim) formData.append("nim", nim);
    if (prodi) formData.append("prodi", prodi);
    if (avatar) formData.append("avatar", avatar);
    if (password) formData.append("password", password);

    // const userData = {
    //   name,
    //   email,
    //   nim,
    //   prodi,
    //   password,
    // };

    try {
      const response = await axios.patch(`/api/users/${user?.id}`, formData, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });

      if (response?.status === 200) {
        toast.success("Profil berhasil diperbarui");
        router.push("/profile");
      } else {
        toast.error(response?.data?.error || "Gagal memperbarui profil");
      }
    } catch (err) {
      if (err?.response?.data) {
        toast.error(err.response.data.error || "Gagal memperbarui profil");
      } else {
        toast.error("Gagal memperbarui profil");
      }
      setImageSrc(user.avatar || "assets/icons/profile.svg");
    } finally {
      setAvatar(null);
    }
  };
  return (
    <div className="mx-auto  flex w-full flex-col rounded-lg bg-[--primary] p-4 md:max-w-4xl md:flex-row md:p-0">
      {loading ? (
        <div className="my-4 px-4 text-center text-white">Loading...</div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col  justify-center gap-4 px-4 py-16 md:px-16"
        >
          <div
            className="relative mx-auto"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <label htmlFor="profile-image" className="cursor-pointer">
              <Image
                className="h-36 w-36 rounded-full object-cover"
                src={imageSrc}
                alt="Profile"
                width={500}
                height={500}
              />
              {isHovering && (
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 text-white">
                  Ubah Foto
                </div>
              )}
            </label>

            <input
              type="file"
              accept="image/*"
              id="profile-image"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="name"
                value="Nama Lengkap"
                className="text-white"
              />
            </div>
            <TextInput
              id="name"
              placeholder="John Doe"
              required
              shadow
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="nim" value="NIM" className="text-white" />
            </div>
            <TextInput
              id="nim"
              placeholder="223039003"
              required
              shadow
              onChange={(e) => setNim(e.target.value)}
              value={nim}
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
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm  focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500"
              required
              onChange={(e) => setProdi(e.target.value)}
              value={prodi}
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
              <Label
                htmlFor="email2"
                value="Alamat Email"
                className="text-white"
              />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="john@students.respati.ac.id"
              required
              shadow
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password2"
                value="Password"
                className="text-white"
              />
            </div>
            <TextInput
              id="password2"
              type={isVisiblePassword ? "text" : "password"}
              shadow
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
              Tampilkan password
            </Label>
          </div>
          <Button type="submit">Perbarui Data Diri</Button>
        </form>
      )}
    </div>
  );
}
