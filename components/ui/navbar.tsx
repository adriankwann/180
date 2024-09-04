import Link from 'next/link';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { NavDropDown } from '@/components/ui/nav-dropdown';
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

        {/* Right-side Toggle */}
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </nav>
      <Separator />
    </>
  );
}
