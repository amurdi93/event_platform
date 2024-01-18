import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import { Button } from "../ui/button"

const Header = () => {
  return (
    <header className="w-full border-b">Header
    <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
        <Image 
            src="/assets/images/logo.svg" width={128} height={38}
            alt="Evently logo" 
          />
        </Link>
    <div>
    <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
<SignedOut>
    <Button asChild className="bg-blue-500 text-white rounded-full p-4" size="lg">
   <Link href='/sign-in'>
    Login
   </Link>
    </Button>
</SignedOut>

    </div>

        </div>
        </header>
  )
}

export default Header