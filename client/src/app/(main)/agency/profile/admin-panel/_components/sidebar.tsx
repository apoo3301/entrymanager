import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ShoppingCart, Package, Users, LineChart, Package2, Bell, Settings, MailCheck } from "lucide-react";
import { SiBoat } from "@icons-pack/react-simple-icons";
import { ModeToggle } from "@/components/togglemode";

export const Sidebar = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <SiBoat className="h-6 w-6" />
            <span className="">IGY PASS</span>
          </Link>
          <div className="ml-auto"> {/* This will push ModeToggle to the far right */}
            <ModeToggle />
          </div>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link href="/agency/profile/admin-panel/home" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link href="/agency/profile/admin-panel/customers" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <Users className="h-4 w-4" />
              Customers
            </Link>
            <Link href="/agency/profile/admin-panel/analytics" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>
            <Link href="/agency/profile/admin-panel/smtp" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <Settings className="h-4 w-4" />
              SMTP
            </Link>
            <Link href="/agency/profile/admin-panel/mailing" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <MailCheck className="h-4 w-4" />
              Mailing Config
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card>
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Go back ?</CardTitle>
              <CardDescription>
                If you want to go back to the main website, click here.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Link href="/">
                <Button size="sm" className="w-full">
                  Leave
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
