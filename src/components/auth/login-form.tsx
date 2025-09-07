import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginForm() {
  return (
    <Tabs defaultValue="buyer" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="buyer">Buyer</TabsTrigger>
        <TabsTrigger value="seller">Seller</TabsTrigger>
      </TabsList>
      <TabsContent value="buyer">
        <Card>
          <CardHeader>
            <CardTitle>Buyer Login</CardTitle>
            <CardDescription>Access your account to purchase items and manage your wishlist.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="buyer-name">Name</Label>
              <Input id="buyer-name" type="text" placeholder="Aarav Sharma" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="buyer-email">Email</Label>
              <Input id="buyer-email" type="email" placeholder="student@university.edu" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="buyer-password">Password</Label>
              <Input id="buyer-password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild><Link href="/">Log in</Link></Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="seller">
        <Card>
          <CardHeader>
            <CardTitle>Seller Login</CardTitle>
            <CardDescription>Manage your listings, view sales, and interact with buyers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="seller-name">Name</Label>
              <Input id="seller-name" type="text" placeholder="Priya Patel" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="seller-email">Email</Label>
              <Input id="seller-email" type="email" placeholder="seller@university.edu" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="seller-password">Password</Label>
              <Input id="seller-password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild><Link href="/">Log in</Link></Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
