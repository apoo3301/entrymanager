import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function ListingPage() {
  return (
    <div>
      <Link href="/agency/profile/admin-panel/listing/add-new-listing">
      <Button>click me</Button>
      </Link>
    </div>
  )
}

export default ListingPage