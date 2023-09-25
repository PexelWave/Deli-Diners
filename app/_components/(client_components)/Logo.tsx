import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href='/'>
      <h3 className="text-2xl font-bold">DELI DINERS</h3>
    </Link>
  )
}

export default Logo