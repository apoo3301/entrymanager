// components/ClientOnlyLayout.tsx
"use client";  // Directive pour indiquer que ce composant est un Client Component

import { usePathname } from "next/navigation";
import Header from "./navbar";
import { FooterComp } from "./footerComp";

export default function ClientOnlyLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPanel = pathname.startsWith("/agency/profile/admin-panel");

  return (
    <>
      {/* {!isAdminPanel && <Header />} */}
      {children}
      {!isAdminPanel && <FooterComp />}
    </>
  );
}
