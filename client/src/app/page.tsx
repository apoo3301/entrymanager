/**
 * 
 * @fileoverview HomePage
 * @module pages/index
 * 
*/

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogFooter, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "@/components/loginForm";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] overflow-hidden">
      <main className="flex-1 flex items-center justify-center px-4 md:px-6">
        <LoginForm />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 IGY. All rights reserved.</p>
      </footer>
    </div>
  );
}
