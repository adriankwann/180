import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  ArrowUpDown,
  LoaderCircle,
  Filter,
  ScanFace,
  GalleryHorizontalEnd,
  ImageDown,
} from 'lucide-react';

export function NavDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">Projects</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* Project 1 with Icon */}
        <DropdownMenuItem asChild>
          <Link href="/project-1" className="flex items-center">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            <span>Project 1: Prokudin-Gorskii</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/project-2" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            <span>Project 2: Filters and Frequencies</span>
          </Link>
        </DropdownMenuItem>

        {/* Disabled Projects */}
        <DropdownMenuItem asChild>
          <Link href="/project-3">
            <ScanFace className="mr-2 h-4 w-4" />
            <span>Project 3: Face Morphing</span>
          </Link>
        </DropdownMenuItem>

        {/* Disabled Projects */}
        <DropdownMenuItem asChild>
          <Link href="/project-4">
            <GalleryHorizontalEnd className="mr-2 h-4 w-4" />
            <span>Project 4: Mosaics</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/project-5">
            <ImageDown className="mr-2 h-4 w-4" />
            <span>Project 5: Diffusion</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/project-6">
            <ImageDown className="mr-2 h-4 w-4" />
            <span>Project 6: NeRF</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
