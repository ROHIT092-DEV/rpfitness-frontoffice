'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu'
import { Button } from './ui/button'

function Header() {
  return (
    <div className="bg-black py-6">
      <div className="flex justify-between max-w-7xl mx-auto items-center">
        {/* Logo */}

        <div className="flex items-center gap-10">
          <HeaderLogo />
          <HeaderMenu />
        </div>

        <div>
          <SignedOut>
            <SignInButton>
              <Button className="bg-white text-black">SignIn</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        {/* Profile */}
      </div>
    </div>
  )
}

export default Header
