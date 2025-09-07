import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { PlusCircle } from 'lucide-react';

export default function PostRequestModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Post a Request
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Post a "Want to Buy" Request</DialogTitle>
          <DialogDescription>Let the community know what you're looking for. Fill in the details below.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Item Title
            </Label>
            <Input id="title" placeholder="e.g., TI-84 Plus CE Calculator" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea id="description" placeholder="Add more details like condition, color, etc." className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="budget" className="text-right">
              Your Budget
            </Label>
            <Input id="budget" type="number" placeholder="e.g., 90.00" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Post Request</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
