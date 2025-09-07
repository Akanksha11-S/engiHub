'use client';

import { useState, ChangeEvent } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { UploadCloud, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function ImageUpload() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePreview = () => {
    setPreview(null);
  };

  return (
    <div className="w-full">
      {preview ? (
        <div className="relative group w-full aspect-video rounded-md overflow-hidden">
          <Image src={preview} alt="Image preview" layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="icon" variant="destructive" onClick={removePreview}>
              <X className="h-4 w-4" />
              <span className="sr-only">Remove image</span>
            </Button>
          </div>
        </div>
      ) : (
        <Label
          htmlFor="picture"
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <UploadCloud className="w-8 h-8 mb-4 text-muted-foreground" />
            <p className="mb-2 text-sm text-muted-foreground">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-muted-foreground">PNG, JPG, or GIF (MAX. 800x400px)</p>
          </div>
          <Input id="picture" type="file" className="hidden" onChange={handleFileChange} accept="image/png, image/jpeg, image/gif" />
        </Label>
      )}
    </div>
  );
}
