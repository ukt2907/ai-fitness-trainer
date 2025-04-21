"use client"
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs"

const Homepage = () => {
  return (
    <div>
      Homepage
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
        <SignOutButton/>
      </SignedIn>
    </div>
  )
}

export default Homepage