import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Building2, Menu } from 'lucide-react';

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary">
            <Building2 className="h-6 w-6" />
            <span className="font-headline text-xl">EngiHub 2.0</span>
          </Link>
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            For Sale
          </Link>
          <Link href="/wtb" className="text-muted-foreground hover:text-foreground">
            WTB Board
          </Link>
          <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
            Dashboard
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
