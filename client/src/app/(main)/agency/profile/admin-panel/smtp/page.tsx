import React from 'react'
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SMTPConfigForm from '../_components/smtpForm'

function SmtpPage() {
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <SMTPConfigForm />
    </div>
  )
}

export default SmtpPage
