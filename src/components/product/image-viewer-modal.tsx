
'use client';

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import Image from 'next/image';

interface ImageViewerModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  imageUrl: string;
  altText: string;
}

export default function ImageViewerModal({ isOpen, onOpenChange, imageUrl, altText }: ImageViewerModalProps) {
  if (!imageUrl) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 border-0 max-w-fit w-auto h-auto max-h-[90vh] flex items-center justify-center bg-transparent shadow-none">
        <DialogTitle className="sr-only">{altText}</DialogTitle>
        <div className="relative w-[400px] h-[600px] rounded-lg overflow-hidden">
             <Image src={imageUrl} alt={altText} fill className="object-contain" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
