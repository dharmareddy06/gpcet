import React from "react";
import { ExternalLink, Book } from "lucide-react";

interface BookChapter {
    title: string;
    authors: string;
    year_published: string;
    publisher: string;
    link: string;
}

interface BookChaptersListProps {
    chapters: BookChapter[];
}

const BookChaptersList: React.FC<BookChaptersListProps> = ({ chapters }) => {
    if (!chapters || chapters.length === 0) {
        return (
            <div className="text-center py-8 text-muted-foreground">
                No book chapters found for this period.
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {chapters.map((chapter, index) => (
                <div
                    key={index}
                    className="group bg-card hover:bg-muted/50 border border-border rounded-lg p-5 transition-all duration-200"
                >
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
                        <div className="flex-1 space-y-2">
                            <div className="flex items-start gap-3">
                                <Book className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-foreground leading-relaxed">
                                        {chapter.title}
                                    </p>
                                    {/* If publisher is separated or we want to show it distinctly */}
                                    {chapter.publisher && (
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {chapter.publisher}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {chapter.link && (
                            <a
                                href={chapter.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-secondary/10 hover:bg-secondary/20 rounded-md transition-colors whitespace-nowrap"
                            >
                                <span className="hidden sm:inline">View Source</span>
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookChaptersList;
