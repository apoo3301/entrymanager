import Link from "next/link"
import { JSX, SVGProps } from "react"

export const FooterComp = () => {
    return (
        <footer className="bg-muted py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="w-6 h-6" />
            <span className="text-lg font-semibold">Welkom Home.</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            Beautifully designed components that you can copy and paste into your apps.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter" prefetch={false}>
              <TwitterIcon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="GitHub" prefetch={false}>
              <GitlabIcon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn" prefetch={false}>
              <LinkedinIcon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-semibold">Product</h4>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Integrations
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            API
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-semibold">Company</h4>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Careers
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Contact
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-semibold">Legal</h4>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Cookie Policy
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Acceptable Use Policy
          </Link>
        </div>
      </div>
    </footer>
    )
}

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


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
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
