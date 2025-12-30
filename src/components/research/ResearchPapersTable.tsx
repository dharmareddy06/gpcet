
import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Paper {
    title: string;
    author: string;
    dept: string;
    journal: string;
}

interface ResearchPapersTableProps {
    papers: Paper[];
}

const ResearchPapersTable: React.FC<ResearchPapersTableProps> = ({ papers }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const totalPages = Math.ceil(papers.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, papers.length);
    const currentPapers = papers.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleRowsPerPageChange = (value: string) => {
        setRowsPerPage(Number(value));
        setCurrentPage(1); // Reset to first page when changing page size
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Show</span>
                    <Select
                        value={String(rowsPerPage)}
                        onValueChange={handleRowsPerPageChange}
                    >
                        <SelectTrigger className="w-[70px]">
                            <SelectValue placeholder={String(rowsPerPage)} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="25">25</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                            <SelectItem value="100">100</SelectItem>
                        </SelectContent>
                    </Select>
                    <span className="text-sm font-medium">entries</span>
                </div>
                <div className="text-sm text-muted-foreground">
                    Showing {Math.min(startIndex + 1, papers.length)} to {endIndex} of {papers.length} entries
                </div>
            </div>

            <div className="rounded-md border border-border overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="font-bold w-[50%]">Title of Paper</TableHead>
                            <TableHead className="font-bold w-[20%]">Authors</TableHead>
                            <TableHead className="font-bold w-[10%]">Department</TableHead>
                            <TableHead className="font-bold w-[20%]">Journal/Conference</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentPapers.length > 0 ? (
                            currentPapers.map((paper, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium align-top">{paper.title}</TableCell>
                                    <TableCell className="align-top">{paper.author}</TableCell>
                                    <TableCell className="align-top">{paper.dept}</TableCell>
                                    <TableCell className="align-top">{paper.journal}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                    Showing {Math.min(startIndex + 1, papers.length)} to {endIndex} of {papers.length} entries
                </div>
                <Pagination className="w-auto mx-0 justify-end">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => handlePageChange(currentPage - 1)}
                                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                            />
                        </PaginationItem>

                        {/* Simplified pagination: Just show current page if many pages, or all if few */}
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            // Logic to show a window of pages centered on current
                            let pageNum = currentPage;
                            if (totalPages <= 5) {
                                pageNum = i + 1;
                            } else if (currentPage <= 3) {
                                pageNum = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                                pageNum = totalPages - 4 + i;
                            } else {
                                pageNum = currentPage - 2 + i;
                            }

                            return (
                                <PaginationItem key={pageNum}>
                                    <PaginationLink
                                        isActive={currentPage === pageNum}
                                        onClick={() => handlePageChange(pageNum)}
                                        className="cursor-pointer"
                                    >
                                        {pageNum}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        })}

                        <PaginationItem>
                            <PaginationNext
                                onClick={() => handlePageChange(currentPage + 1)}
                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default ResearchPapersTable;
