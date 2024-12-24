"use client";

import * as React from "react";
import {
  BookOpen,
  ListVideo,
  UserPen,
  Utensils,
  Timer,
  HeadsetIcon,
  Book,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarRail,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { useUser } from "@/hooks/useUser";
import { useAuth } from "@/context/AuthContext";

const data = {
  // userData: {
  //   name: "shadcn",
  //   email: "m@example.com",
  //   avatar: "https://github.com/shadcn.png",
  // },
  navMain: [
    {
      title: "Profil",
      url: "/profile",
      icon: UserPen,
      isActive: true,
    },
    {
      title: "Edukasi",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Kesehatan Mental",
          url: "/edukasi/kesehatan-mental",
        },
        {
          title: "Tanda dan Gejala",
          url: "/edukasi/tanda-dan-gejala",
        },
        {
          title: "Faktor Penyebab",
          url: "/edukasi/faktor-penyebab",
        },
        {
          title: "Tips dan Trick",
          url: "/edukasi/tips-dan-trick",
        },
      ],
    },
    {
      title: "Video Edukasi",
      url: "/video-edukasi",
      icon: ListVideo,
    },
    {
      title: "Meal Plan",
      url: "/rencana-makan ",
      icon: Utensils,
      items: [
        {
          title: "Menu",
          url: "/rencana-makan/menu",
        },
        {
          title: "Ibu Inayah, S.Gz., M.Si., RD.",
          url: "https://wa.me/6282226666571?text=Selamat%20pagi/siang/sore%2C%20Ibu.%20Mohon%20maaf%20menganggu%20waktunya.%20Saya%20ingin%20bertanya%20terkait%20meal%20plan%20sesuai%20dengan%20kondisi%20kesehatan%20mental%20saya.%20Apakah%20saya%20bisa%20berkonsultasi%20lebih%20lanjut%20mengenai%20hal%20ini%3F%20Terima%20kasih%20sebelumnya.%0A%0ANama%20%3A%20%0ANim%20%20%20%20%20%20%20%3A%20%0AProdi%20%20%20%20%20%20%20%3A%20%0ASemester%20%3A%20",
        },
      ],
    },
    {
      title: "Relaxation Time",
      url: "/waktu-bersantai",
      icon: Timer,
    },
    {
      title: "Layanan Konsultasi",
      url: "#",
      icon: HeadsetIcon,
      items: [
        {
          title: "Bapak Fx. Joko Krisdiyanto, S.Psi., M.Psi.",
          url: "https://wa.me/6282220006836?text=Selamat%20pagi/siang/sore,%20Ibu/Bapak.%20Mohon%20maaf%20menganggu%20waktunya.%20Saya%20ingin%20berkonsultasi%20terkait%20hasil%20skrining%20tes%20kesehatan%20mental%20saya.%20Apakah%20saya%20bisa%20berkonsultasi%20lebih%20lanjut%20mengenai%20hal%20ini?%20Terima%20kasih%20sebelumnya%0A%0ANama%20%20%20%20%20%20%20:%20%0ANim%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20:%20%0AProdi%20%20%20%20%20%20%20%20%20%20:%20%0ASemester%20%20%20%20%20%20%20:%20",
        },
        {
          title: "Ibu Rini Indriyani, S.Psi, MARS, M.Psi, Psikolog.",
          url: "https://wa.me/6281326001174?text=Selamat%20pagi/siang/sore,%20Ibu/Bapak.%20Mohon%20maaf%20menganggu%20waktunya.%20Saya%20ingin%20berkonsultasi%20terkait%20hasil%20skrining%20tes%20kesehatan%20mental%20saya.%20Apakah%20saya%20bisa%20berkonsultasi%20lebih%20lanjut%20mengenai%20hal%20ini?%20Terima%20kasih%20sebelumnya%0A%0ANama%20%20%20%20%20%20%20:%20%0ANim%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20:%20%0AProdi%20%20%20%20%20%20%20%20%20%20:%20%0ASemester%20%20%20%20%20%20%20:%20",
        },
      ],
    },
    {
      title: "Referensi",
      url: "/referensi",
      icon: Book,
    },
  ],
};

interface NavUserProps {
  className?: string;
}

export function AppSidebar({
  className,
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { user: authUser } = useAuth();
  const { user } = useUser(authUser?.id || "");

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser userData={user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      {/* <SidebarFooter>
        <Button className="w-full">
          <LogOut className="mr-2 h-4 w-4" />
        </Button>
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
