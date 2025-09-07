import { Badge } from '@/components/ui/badge';
import { ShieldCheck } from 'lucide-react';

export default function VerifiedStudentBadge() {
  return (
    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800 border-blue-300 dark:border-blue-700">
      <ShieldCheck className="mr-1 h-3 w-3" />
      Verified Student
    </Badge>
  );
}
