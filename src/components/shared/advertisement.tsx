import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { ArrowRight } from "lucide-react";

export default function Advertisement() {
  return (
    <Card className="bg-accent/30 border-dashed border-accent-foreground/30">
      <CardContent className="p-4 flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-32 h-32 flex-shrink-0">
             <Image 
                src="https://picsum.photos/seed/shop/300/300" 
                alt="Stationery Shop" 
                width={128}
                height={128}
                className="rounded-lg object-cover"
                data-ai-hint="stationery shop"
             />
        </div>
        <div className="flex-grow text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-accent-foreground/80">Advertisement</p>
          <h3 className="text-xl font-bold font-headline text-foreground mt-1">Visit Goodluck Stationery!</h3>
          <p className="text-muted-foreground mt-1 max-w-md">
            Need supplies? Drop by the <strong>Goodluck Stationery Shop</strong> near the campus canteen for exclusive student discounts on all your essentials.
          </p>
        </div>
        <Button variant="outline" className="mt-2 md:mt-0 flex-shrink-0">
            Find Us
            <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
