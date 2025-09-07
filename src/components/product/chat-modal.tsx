'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send } from 'lucide-react';
import type { Product } from '@/lib/mock-data';
import Image from 'next/image';
import VerifiedStudentBadge from './verified-student-badge';
import { ScrollArea } from '../ui/scroll-area';

interface ChatModalProps {
  product: Product;
}

export default function ChatModal({ product }: ChatModalProps) {
  const { seller } = product;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="flex-1">
          <MessageSquare className="mr-2 h-4 w-4" />
          Message Seller
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-lg grid-rows-[auto_1fr_auto] p-0 max-h-[90vh]">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="flex items-center gap-4">
            <div className="relative">
              <Image src={seller.avatarUrl} alt={seller.name} width={40} height={40} className="rounded-full" data-ai-hint="person avatar" />
              <span className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-background ${seller.online ? 'bg-green-500' : 'bg-gray-400'}`} />
            </div>
            <div>
              <p>Chat with {seller.name}</p>
              {seller.isStudentVerified && <VerifiedStudentBadge />}
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-96 w-full px-6">
            <div className="space-y-4">
                <div className="flex items-end gap-2">
                    <div className="rounded-lg bg-muted p-3 max-w-[75%]">
                        <p className="text-sm">Hi! Is the "{product.name}" still available?</p>
                    </div>
                </div>
                <div className="flex items-end gap-2 justify-end">
                    <div className="rounded-lg bg-primary text-primary-foreground p-3 max-w-[75%]">
                        <p className="text-sm">Hey! Yes, it is. Are you interested?</p>
                    </div>
                </div>
                 <div className="flex items-end gap-2">
                    <div className="rounded-lg bg-muted p-3 max-w-[75%]">
                        <p className="text-sm">Great! Could we meet on campus tomorrow?</p>
                    </div>
                </div>
            </div>
        </ScrollArea>
        
        <DialogFooter className="p-6 pt-2">
            <div className="flex items-center w-full space-x-2">
                <Input id="message" placeholder="Type a message..." className="flex-1" autoComplete="off" />
                <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                </Button>
            </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
