import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink, Layers } from "lucide-react";

interface ResearchResourceItem {
    title: string;
    link: string;
}

interface ResearchResourceCategory {
    category: string;
    items: ResearchResourceItem[];
}

interface ResearchResourcesListProps {
    resources: ResearchResourceCategory[];
}

const ResearchResourcesList: React.FC<ResearchResourcesListProps> = ({ resources }) => {
    if (!resources || resources.length === 0) {
        return <div className="text-muted-foreground p-4">No resources available.</div>;
    }

    return (
        <div className="w-full">
            <Accordion type="single" collapsible className="w-full space-y-4">
                {resources.map((res, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border border-border rounded-lg bg-card px-4"
                    >
                        <AccordionTrigger className="hover:no-underline py-4">
                            <div className="flex items-center gap-3 text-left">
                                <Layers className="h-5 w-5 text-primary" />
                                <span className="font-semibold text-lg text-primary">{res.category}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="pt-2 pb-4 grid gap-3 sm:grid-cols-2">
                                {res.items.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-2 p-3 rounded-md hover:bg-muted/50 transition-colors group"
                                    >
                                        <ExternalLink className="h-4 w-4 mt-1 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                                            {item.title}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default ResearchResourcesList;
