
'use client';

import Link from 'next/link';
import { useAuth } from '@/context/auth-context';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Building2, LayoutGrid, LogOut, Heart, User } from 'lucide-react';
import SearchBarWithSuggestions from '@/components/shared/search-bar-with-suggestions';
import MobileNav from './mobile-nav';
import { cn } from '@/lib/utils';

export default function Header() {
  const { userName } = useAuth();
  
  const getInitials = (name: string) => {
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length > 1 && names[0] && names[1]) {
      return `${names[0][0]}${names[1][0]}`;
    }
    return name[0] || 'U';
  }
  
  const getFirstName = (name: string) => {
     if (!name) return 'User';
     return name.split(' ')[0];
  }

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-primary text-primary-foreground px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base text-primary-foreground">
          <Building2 className="h-6 w-6" />
          <span className="font-headline text-xl">EngiHub 2.0</span>
        </Link>
        <Link href="/" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
          For Sale
        </Link>
        <Link href="/wtb" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
          WTB Board
        </Link>
        <Link href="/dashboard" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
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
            <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-primary/80">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`https://picsum.photos/seed/${userName}/100/100`} alt={userName} />
                <AvatarFallback>{getInitials(userName)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{userName}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  student@university.edu
                </p>
              </div>
            </DropdownMenuLabel>
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
