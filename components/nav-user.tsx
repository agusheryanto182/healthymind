"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

import {
  CircleUser,
  Radar,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Calendar,
  Headset,
  NotebookText,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import toast from "react-hot-toast";

export function NavUser({
  userData,
}: {
  userData: {
    name: string;
    nim: string;
    avatar?: string;
  };
}) {
  const { isMobile } = useSidebar();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    toast.success("Anda telah keluar");
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              {/* <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage
                  src={userData?.avatar || "/assets/icons/profile.svg"}
                  alt={userData?.name[0]}
                />
                <AvatarFallback className="rounded-lg">
                  {userData?.name[0]}
                </AvatarFallback>
              </Avatar> */}
              <Image
                src={userData?.avatar || "/assets/icons/profile.svg"}
                alt={userData?.name || "anonim"}
                width={40}
                height={40}
                className="h-8 w-8 rounded-full object-cover"
                unoptimized
              />

              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {userData?.name || "anonim"}
                </span>
                <span className="truncate text-xs">{userData?.nim || ""}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            {/* <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={userData?.avatar || "/assets/icons/profile.svg"}
                    alt={userData?.name || "anonim"}
                  />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {userData?.name || "anonim"}
                  </span>
                  <span className="truncate text-xs">
                    {userData?.nim || ""}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel> */}
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/profile">
                  <CircleUser />
                  Data Diri
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/test">
                  <Radar />
                  Skrining Kesehatan Mental
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/report">
                  <NotebookText />
                  Hasil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/consult-report">
                  <Headset />
                  Laporan Konsultasi
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/mood-tracker">
                  <Calendar />
                  Mood Tracker
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            {user && (
              <DropdownMenuItem
                onClick={handleLogout}
                className="text-red-600 hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white"
              >
                <LogOut />
                Log out
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
