import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function HeaderMenu() {
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'Trainers', href: '/trainers' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ]

  const pathname = usePathname()

  return (
    <div>
      <nav className="hidden md:flex space-x-6">
        {menuItems.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-white transition-colors ${
              pathname === link.href ? 'text-Green-500 font-semibold' : ''
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default HeaderMenu
