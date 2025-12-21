import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { collegeInfo, academicCalendars } from "@/data/collegeData";
import { FileText, Download, Calendar } from "lucide-react";

const AcademicCalendar = () => {
    return (
        <Layout>
            <Helmet>
                <title>Academic Calendar | {collegeInfo.shortName}</title>
                <meta
                    name="description"
                    content={`Download academic calendars for B.Tech, M.Tech, and MBA programs at ${collegeInfo.name}. Stay updated with semester schedules and key dates.`}
                />
            </Helmet>

            {/* Banner */}
            <section className="relative h-48 md:h-64 bg-primary flex items-center justify-center">
                <div className="text-center z-10">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-2">Academic Calendars</h1>
                    <p className="text-primary-foreground/80">Plan your academic year</p>
                </div>
                <div className="absolute inset-0 bg-[url('/images/pattern-grid.png')] opacity-10" />
            </section>

            {/* Calendars List */}
            <section className="college-section bg-background">
                <div className="college-container">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-border bg-muted/30">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    Academic Year 2025-26
                                </h2>
                            </div>
                            <div className="divide-y divide-border">
                                {academicCalendars.map((calendar, index) => (
                                    <div key={index} className="p-4 hover:bg-muted/50 transition-colors flex items-center justify-between gap-4 group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                <FileText className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                                    {calendar.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">PDF Document</p>
                                            </div>
                                        </div>
                                        <a
                                            href={calendar.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/90 transition-colors shrink-0"
                                        >
                                            <Download className="w-4 h-4" />
                                            Download
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AcademicCalendar;
