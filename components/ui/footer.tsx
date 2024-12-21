"use client";

import { Footer } from "flowbite-react";

export default function FooterComponent() {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="HealthyMind Respati" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
