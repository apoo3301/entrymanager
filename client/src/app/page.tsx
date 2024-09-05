"use client"

import { LoginForm } from "@/components/singInForm";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const handleProfileRedirect: () => void = () => {
    router.push("/agency/profile");
  };

  return (
    <div className="flex flex-col min-h-[100dvh] overflow-hidden">
      <header className="fixed top-0 left-0 w-full px-6 lg:px-8 h-16 flex items-center justify-between bg-white shadow-md border-b border-gray-200 z-50">
        <Link href="#" className="flex items-center space-x-3" prefetch={false}>
          <Image src="/igyBlackicon.svg" alt="IGYICON" width={100} height={100} className="transition-transform transform hover:scale-105" />
          <span className="text-xl font-semibold tracking-wide transition-colors">
            Customer Pass Manager
          </span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 md:px-6">
        {session ? (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-semibold text-center">Welcome back, {session.user?.name ?? "Guest"}!</h1>
            <p className="text-lg text-center text-muted-foreground">You are now signed in.</p>
            {/* Bouton placé dans le même élément parent */}
            <Button
              variant="default"
              onClick={handleProfileRedirect}
              className="px-4 py-2 text-white rounded-lg hover:bg-gray-600 transition"
            >
              Go to Profile
            </Button>
          </div>
        ) : (
          <LoginForm />
        )}
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 IGY. All rights reserved.</p>
      </footer>
    </div>
  );
}
