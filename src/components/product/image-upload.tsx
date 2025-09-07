'use client';

import { useState, ChangeEvent } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { UploadCloud, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface ImageUploadProps {
  value: string[];
  onChange: (value: string[]) => void;
  className?: string;
}

export default function ImageUpload({ value: previews, onChange, className }: ImageUploadProps) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newPreviews: string[] = [];
      const fileArray = Array.from(files);
      let filesToProcess = fileArray.length;

      const onload = (result: string) => {
        newPreviews.push(result);
        if (newPreviews.length === filesToProcess) {
          onChange([...previews, ...newPreviews]);
        }
      };

      if (filesToProcess === 0) {
        return;
      }
      
      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          onload(reader.result as string);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removePreview = (index: number) => {
    const newPreviews = [...previews];
    newPreviews.splice(index, 1);
    onChange(newPreviews);
  };

  return (
    <div className={cn('grid gap-2', className)}>
      <div className="grid grid-cols-3 gap-2">
        {previews.map((preview, index) => (
          <div key={index} className="relative group w-full aspect-video rounded-md overflow-hidden">
            <Image src={preview} alt={`Image preview ${index + 1}`} layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="icon" variant="destructive" type="button" onClick={() => removePreview(index)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Remove image</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Label
        htmlFor="picture"
        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <UploadCloud className="w-8 h-8 mb-4 text-muted-foreground" />
          <p className="mb-2 text-sm text-muted-foreground">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-muted-foreground">PNG, JPG, or GIF</p>
        </div>
        <Input
          id="picture"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/gif"
          multiple
        />
      </Label>
    </div>
  );
}
