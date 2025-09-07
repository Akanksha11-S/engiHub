import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import type { WTBRequest } from '@/lib/mock-data';
import Image from 'next/image';
import VerifiedStudentBadge from '../product/verified-student-badge';

interface WTBRequestCardProps {
  request: WTBRequest;
}

export default function WTBRequestCard({ request }: WTBRequestCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{request.title}</CardTitle>
        <CardDescription>Budget: <span className="font-semibold text-primary">${request.budget.toFixed(2)}</span></CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{request.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-2">
            <Image src={request.user.avatarUrl} alt={request.user.name} width={32} height={32} className="rounded-full" data-ai-hint="person avatar"/>
            <div>
                <p className="text-sm font-semibold">{request.user.name}</p>
                {request.user.isStudentVerified && <VerifiedStudentBadge />}
            </div>
        </div>
        <Button variant="outline" size="sm">
          <MessageSquare className="mr-2 h-4 w-4" />
          Message
        </Button>
      </CardFooter>
    </Card>
  );
}
