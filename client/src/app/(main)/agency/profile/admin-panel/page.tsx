import { auth } from "@/auth";
import { USER_ROLES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { findAllUsers } from "@/resources/user-queries";
import { ToggleEmailVerifiedInput } from "./_components/toggle-email-verified-input";
import { ChangeUserRoleInput } from "./_components/change-user-role-input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  return (
    <main className="mt-4">
      <div className="container">
        Dashboard
      </div>
    </main>
  );
}
