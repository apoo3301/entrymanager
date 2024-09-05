import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

function MailingPage() {
  return (
    <div className="flex flex-col h-[80dvh] bg-background">
      <div className="flex-1 grid grid-cols-[1fr_400px] gap-6 p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 border-b pb-4">
            <Input type="text" placeholder="Subject" className="flex-1 text-2xl font-bold" />
            <Button variant="ghost" size="icon">
              <XIcon className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <Textarea placeholder="Write your email in Markdown..." className="flex-1 resize-none" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 border-b pb-4">
            <h3 className="text-lg font-semibold">Preview</h3>
            <Button variant="ghost" size="icon">
              <XIcon className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="prose prose-gray dark:prose-invert">
            <div />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-4 border-t">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <BoldIcon className="h-5 w-5" />
            <span className="sr-only">Bold</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ItalicIcon className="h-5 w-5" />
            <span className="sr-only">Italic</span>
          </Button>
          <Button variant="ghost" size="icon">
            <HeadingIcon className="h-5 w-5" />
            <span className="sr-only">Heading</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ListIcon className="h-5 w-5" />
            <span className="sr-only">List</span>
          </Button>
          <Button variant="ghost" size="icon">
            <LinkIcon className="h-5 w-5" />
            <span className="sr-only">Link</span>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">Cancel</Button>
          <Button>Send</Button>
        </div>
      </div>
    </div>
  )
}

function BoldIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
    </svg>
  )
}


function HeadingIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 12h12" />
      <path d="M6 20V4" />
      <path d="M18 20V4" />
    </svg>
  )
}


function ItalicIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <line x1="19" x2="10" y1="4" y2="4" />
      <line x1="14" x2="5" y1="20" y2="20" />
      <line x1="15" x2="9" y1="4" y2="20" />
    </svg>
  )
}


function LinkIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function ListIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}


function XIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export default MailingPage