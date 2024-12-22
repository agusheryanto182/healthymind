"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export function AuthButtons() {
  const { user, isLoading, logout } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        className="hover:bg-[--primary] hover:text-white"
        variant="outline"
      >
        <Link href="/our-team">Tim Kami</Link>
      </Button>
      <Button
        className="hover:bg-[--primary] hover:text-white"
        variant="outline"
      >
        <Link href="/news">News</Link>
      </Button>
      {!user ? (
        <Button
          className="bg-[--primary] text-white hover:bg-[--hover] hover:text-white"
          variant="outline"
        >
          <Link href="/login">Masuk</Link>
        </Button>
      ) : (
        <Button
          className="hidden bg-red-500 text-white hover:bg-red-600 hover:text-white"
          onClick={logout}
        >
          Keluar
        </Button>
      )}
    </div>
  );
}
