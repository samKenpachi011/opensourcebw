import React from 'react'
import Link from 'next/link'

export default function NavLink ({href, ...props}) {
  return (
    <Link href={href} {...props}></Link>
  )
}
