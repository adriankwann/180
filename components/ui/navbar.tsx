import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { NavDropDown } from "@/components/ui/nav-dropdown";
import { Images } from 'lucide-react';

export default function NavBar() {
  return (
    <>
      <nav className="w-full flex items-center justify-between p-5">
        {/* Left-side Links */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <NavDropDown />
        </div>

        {/* Center Title with Icon */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
          <h1 className="text-xl font-bold">CS 180</h1>
        </div>

        {/* Right-side Toggle */}
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </nav>
      <Separator />
    </>
  );
}
