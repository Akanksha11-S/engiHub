
import { Building2 } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Footer() {
    const faqs = [
        {
            question: "How do I sell an item?",
            answer: "To sell an item, log in as a seller, go to your dashboard, and click 'Add Listing'. Fill in the item details, upload photos, and post your listing. It will then be visible to all users on the platform.",
        },
        {
            question: "How do I contact a seller?",
            answer: "On any product page, you can click the 'Message Seller' button to open a chat window and communicate directly with the seller to ask questions or arrange a meet-up.",
        },
        {
            question: "What is a 'Verified Student'?",
            answer: "A 'Verified Student' badge indicates that the user has verified their student status using their university email address. This adds an extra layer of trust and security to transactions.",
        },
        {
            question: "Can I request an item I want to buy?",
            answer: "Yes! Visit the 'WTB Board' page and post a request for an item you're looking for. Other users who have that item might reach out to you directly.",
        }
    ];

    return (
        <footer className="bg-muted py-8 px-4 md:px-6 mt-auto">
            <div className="container mx-auto grid gap-8 text-muted-foreground">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Building2 className="h-6 w-6 text-primary" />
                        <span className="font-headline text-xl font-semibold text-foreground">EngiHub</span>
                    </div>
                    <p className="text-sm max-w-md">
                        Your one-stop campus marketplace for buying and selling goods. Connecting students, simplifying campus life.
                    </p>
                </div>
                
                <div className="md:col-span-2">
                    <h3 className="font-semibold text-lg text-foreground mb-4">Frequently Asked Questions</h3>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                             <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
                    <p className="mb-4 md:mb-0">
                        © {new Date().getFullYear()} EngiHub. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-primary">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
