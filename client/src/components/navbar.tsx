import { FC } from 'react';
import Link from 'next/link';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { HeaderLinks } from './navbar-links';

export const Header: FC = () => {
    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 justify-between">
            <div className="flex items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <Link href="/" prefetch={false}>
                            <MountainIcon className="h-6 w-6" />
                            <span className="sr-only">Company Logo</span>
                        </Link>
                        <div className="grid gap-2 py-6">
                            {['Home', 'Our Guests', 'Join Us', 'About', 'Contact'].map((item) => (
                                <Link
                                    href={item === 'Home' ? '/' : item === 'About' ? '/agency/about' : '#'}
                                    key={item}
                                    prefetch={false}
                                    className="flex w-full items-center py-2 text-lg font-semibold"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
                <Link href="/" prefetch={false} className="mr-6 hidden lg:flex">
                    <MountainIcon className="h-6 w-6" />
                    <span className="sr-only">Company Logo</span>
                </Link>
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        {['Home', 'Our Guests', 'Join Us', 'About', 'Contact'].map((item) => (
                            <NavigationMenuLink asChild key={item}>
                                <Link
                                    href={item === 'Home' ? '/' : item === 'Our Guests' ? '/agency/our-guests' : item === 'Join Us' ? '/agency/join-us' : item === 'About' ? '/agency/about' : item === 'Contact' ? '/agency/contact' : '#'}
                                    prefetch={false}
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                >
                                    {item}
                                </Link>
                            </NavigationMenuLink>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <HeaderLinks />
        </header>
    );
};

const MenuIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
            <line x1="4" y1="12" x2="20" />
            <line x1="4" y1="6" x2="20" />
            <line x1="4" y1="18" x2="20" />
        </svg>
    );
};

const MountainIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
            <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
};

export default Header;
