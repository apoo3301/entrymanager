import { LoginForm } from "@/components/extend/singInForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] overflow-hidden">
      <header className="fixed top-0 left-0 w-full px-6 lg:px-8 h-16 flex items-center justify-between bg-white shadow-md border-b border-gray-200 z-50"> {/* Ajout de `fixed`, `top-0`, `left-0`, `w-full`, et `z-50` */}
        <Link href="#" className="flex items-center space-x-3" prefetch={false}>
          <Image src="/igyBlackicon.svg" alt="IGYICON" width={100} height={100} className="transition-transform transform hover:scale-105" /> {/* Réduit la taille de l'image pour l'ajuster à la hauteur du header */}
          <span className="text-xl font-semibold tracking-wide transition-colors">
            Customer Pass Manager
          </span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center px-4 md:px-6">
        <LoginForm />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 IGY. All rights reserved.</p>
      </footer>
    </div>
  );
}
