import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { collegeInfo, examinationResults } from "@/data/collegeData";
import { FileText, ExternalLink, AlertCircle } from "lucide-react";

const ExaminationResults = () => {
    return (
        <Layout>
            <Helmet>
                <title>Examination Results | {collegeInfo.shortName}</title>
                <meta
                    name="description"
                    content={`Check the latest examination results and notifications for ${collegeInfo.name}. B.Tech, M.Tech, and MBA results available.`}
                />
            </Helmet>

            {/* Banner */}
            <section className="relative h-48 md:h-64 bg-primary flex items-center justify-center">
                <div className="text-center z-10">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-2">Examination Results</h1>
                    <p className="text-primary-foreground/80">Latest notifications and results</p>
                </div>
                <div className="absolute inset-0 bg-[url('/images/pattern-grid.png')] opacity-10" />
            </section>

            {/* Results List */}
            <section className="college-section bg-background">
                <div className="college-container">
                    <div className="max-w-5xl mx-auto">

                        {/* <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-amber-800">Important Note</h3>
                                <p className="text-sm text-amber-700">
                                    To view details or download results, you will be redirected to the official examination portal. Please disable pop-up blockers if necessary.
                                </p>
                            </div>
                        </div> */}

                        <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-border bg-muted/30">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-primary" />
                                    Latest Notifications
                                </h2>
                            </div>
                            <div className="divide-y divide-border">
                                {examinationResults.map((result, index) => (
                                    <div key={index} className="p-4 hover:bg-muted/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                                        <div className="flex-1">
                                            <div className="flex items-start gap-3">
                                                <span className="mt-1.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                                                <div>
                                                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                                        {result.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground mt-1">
                                                        Date: {result.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                            href="http://digitalcampus.msmfclasses.com:99/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shrink-0 sm:min-w-[140px]"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Go to Portal
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

export default ExaminationResults;
