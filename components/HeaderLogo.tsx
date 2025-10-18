import Link from 'next/link'
import React from 'react'

function HeaderLogo() {
  return (
    <div>
      <Link
        href="/"
        className="flex-shrink-0 text-2xl font-bold tracking-wide text-green-500"
      >
        RP Fitness
      </Link>
    </div>
  )
}

export default HeaderLogo
