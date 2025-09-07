import { Building2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-muted py-8 px-4 md:px-6 mt-auto">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-muted-foreground">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <Building2 className="h-6 w-6 text-primary" />
                    <span className="font-headline text-xl font-semibold text-foreground">EngiHub 2.0</span>
                </div>
                <p className="text-sm">
                    © {new Date().getFullYear()} EngiHub 2.0. All rights reserved.
                </p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="#" className="text-sm hover:text-primary">Privacy Policy</Link>
                    <Link href="#" className="text-sm hover:text-primary">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
