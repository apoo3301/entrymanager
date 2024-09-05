import Link from "next/link";
import { auth } from "@/auth";
import { SignoutButton } from "@/components/signout-button";
import { Button } from "@/components/ui/button";
import { type User } from "next-auth";
import { USER_ROLES } from "@/lib/constants";
import { LockIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { JSX, SVGProps } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { UpdateUserInfoForm } from "./_components/update-user-info-form"

export default async function ProfilePage() {
  const session = await auth();
  const isAdmin = session?.user?.role === USER_ROLES.ADMIN;

  return (
    <main className="mt-4">
      <div className="container">
        


        {!!session?.user ? <SignedIn user={session.user} /> : <SignedOut />}
      </div>
    </main>
  );
}

const SignedIn = async ({ user }: { user: User }) => {
  const session = await auth();
  const isAdmin = session?.user?.role === USER_ROLES.ADMIN;
  return (
    // <>
    //   <div className="flex items-center justify-between">
    //     <h2 className="text-2xl font-bold tracking-tight">User Information</h2>
    //     <UpdateUserInfoForm user={user} />
    //   </div>

    //   <table className="mt-4 table-auto divide-y">
    //     <thead>
    //       <tr className="divide-x">
    //         <th className="bg-gray-50 px-6 py-3 text-start">id</th>
    //         <th className="bg-gray-50 px-6 py-3 text-start">name</th>
    //         <th className="bg-gray-50 px-6 py-3 text-start">email</th>
    //         <th className="bg-gray-50 px-6 py-3 text-start">role</th>
    //       </tr>
    //     </thead>

    //     <tbody>
    //       <tr className="divide-x">
    //         <td className="px-6 py-3">{user.id}</td>
    //         <td
    //           className={cn("px-6 py-3", {
    //             "opacity-50": user.name === null,
    //           })}
    //         >
    //           {user.name ?? "NULL"}
    //         </td>
    //         <td className="px-6 py-3">{user.email}</td>
    //         <td className="px-6 py-3 uppercase">{user.role}</td>
    //       </tr>
    //     </tbody>
    //   </table>

    //   <div className="my-2 h-1 bg-muted" />
    //   <SignoutButton />
    // </>
    <div className="w-full max-w-6xl mx-auto py-8 px-4 md:px-6">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          {/* <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-user.jpg" alt="@username" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar> */}
          <div className="grid gap-0.5">
            <div className={cn("text-xl font-semibold", {
              "opacity-50": user.name === null,
            })}>Welcome {user.name ?? "Null"}</div>
          </div>
        </div>
        <UpdateUserInfoForm user={user} />
      </header>
      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>User Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-1">
                <div className="text-sm font-medium">Email</div>
                <div className="text-muted-foreground">{user.email}</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">Role</div>
                <div className="text-muted-foreground">{user.role}</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">Uid</div>
                <div className="text-muted-foreground">
                  {user.id}
                </div>
              </div>
              <div className="grid gap-1">
                <SignoutButton />
              </div>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Connection</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ip</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Localisation</TableHead>
                  </TableRow>
                </TableHeader>
                {/* <TableBody>
                  
                </TableBody> */}
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-1">
                <div className="text-sm font-medium">Double Authentification</div>
                <div className="text-muted-foreground">null</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">Change Password</div>
                <div className="text-muted-foreground">null</div>
              </div>
              <div className="grid gap-1">
              {isAdmin && <AdminPanelButton />}
              </div>
            </CardContent>
          </Card>
          {/* <Card>
            <CardHeader>
              <CardTitle>Social Profiles</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <TwitterIcon className="w-6 h-6 text-[#1DA1F2]" />
                <div className="text-muted-foreground">@jaredpalmer</div>
              </div>
              <div className="flex items-center gap-4">
                <GitlabIcon className="w-6 h-6 text-[#333]" />
                <div className="text-muted-foreground">jaredpalmer</div>
              </div>
              <div className="flex items-center gap-4">
                <LinkedinIcon className="w-6 h-6 text-[#0077B5]" />
                <div className="text-muted-foreground">jaredpalmer</div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  );
};

const SignedOut = () => {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight">User Not Signed In</h2>

      <div className="my-2 h-1 bg-muted" />

      <Button asChild>
        <Link href="/agency/auth/signin">Sign In</Link>
      </Button>
    </>
  );
};

const AdminPanelButton = () => {
  return (
    <Button size="sm" asChild>
      <Link href="/agency/profile/admin-panel/home">
        <LockIcon className="mr-2" />
        Admin Panel
      </Link>
    </Button>
  );
};


function GitlabIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}