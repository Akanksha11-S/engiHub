import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Building2, LayoutGrid, LogOut, ShoppingBasket, User, Heart } from 'lucide-react';
import SearchBarWithSuggestions from '@/components/shared/search-bar-with-suggestions';
import MobileNav from './mobile-nav';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-primary/90 px-4 text-primary-foreground backdrop-blur-sm md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <Building2 className="h-6 w-6" />
          <span className="font-headline text-xl">EngiHub 2.0</span>
        </Link>
        <Link href="/" className="transition-colors hover:text-primary-foreground/80">
          For Sale
        </Link>
        <Link href="/wtb" className="transition-colors hover:text-primary-foreground/80">
          WTB Board
        </Link>
        <Link href="/dashboard" className="transition-colors hover:text-primary-foreground/80">
          Dashboard
        </Link>
      </nav>

      <MobileNav />

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <SearchBarWithSuggestions />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-auto flex-col justify-center gap-1 rounded-full p-0 w-12 hover:bg-primary-foreground/10">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://picsum.photos/seed/user/100/100" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium">Aarav S.</span>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard"><User className="mr-2 h-4 w-4" />Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard"><LayoutGrid className="mr-2 h-4 w-4" />Dashboard</Link>
            </DropdownMenuItem>
             <DropdownMenuItem asChild>
              <Link href="/dashboard"><Heart className="mr-2 h-4 w-4" />Wishlist</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/login"><LogOut className="mr-2 h-4 w-4" />Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
