import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const Header: FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full px-6 lg:px-8 h-16 flex items-center justify-between bg-white shadow-md border-b border-gray-200 z-50"> {/* Ajout de `fixed`, `top-0`, `left-0`, `w-full`, et `z-50` */}
            <Link href="#" className="flex items-center space-x-3" prefetch={false}>
                <Image src="/igyicon.svg" alt="IGYICON" width={100} height={100} className="transition-transform transform hover:scale-105" /> {/* Réduit la taille de l'image pour l'ajuster à la hauteur du header */}
                <span className="text-xl font-semibold tracking-wide transition-colors">
                    Customer Pass Manager
                </span>
            </Link>
        </header>
    );
}

export default Header;
