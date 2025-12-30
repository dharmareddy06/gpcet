import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { collegeInfo } from "@/data/collegeData";
import {
    researchPapers2022_23,
    researchPapers2021_22,
    researchPapers2020_21,
    researchPapers2019_20,
    researchPapers2018_19
} from "@/data/researchPapers";
import {
    bookChapters2022_23,
    bookChapters2021_22,
    bookChapters2020_21,
    bookChapters2019_20,
    bookChapters2018_19
} from "@/data/bookChapters";
import { researchResources } from "@/data/researchResources";
import ResearchPapersTable from "@/components/research/ResearchPapersTable";
import BookChaptersList from "@/components/research/BookChaptersList";
import ResearchResourcesList from "@/components/research/ResearchResourcesList";
import {
    BookOpen,
    Target,
    Users,
    Award,
    ChevronRight,
    FlaskConical,
    Microscope,
    FileText,
    Globe,
    Library,
    ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Research = () => {
    const [searchParams] = useSearchParams();
    const initialSection = searchParams.get("section") || "research-home";
    const [activeSection, setActiveSection] = useState(initialSection);

    useEffect(() => {
        const section = searchParams.get("section");
        if (section) {
            setActiveSection(section);
        }
    }, [searchParams]);

    // Calculate Dashboard Stats
    const totalPapers = researchPapers2022_23.length + researchPapers2021_22.length + researchPapers2020_21.length + researchPapers2019_20.length + researchPapers2018_19.length;
    const totalChapters = bookChapters2022_23.length + bookChapters2021_22.length + bookChapters2020_21.length + bookChapters2019_20.length + bookChapters2018_19.length;
    const totalResources = researchResources.reduce((acc, curr) => acc + curr.items.length, 0);
    const totalGrants = 14;


    const sidebarItems = [
        { id: "research-home", label: "Research Home", icon: Microscope },
        { id: "supervisors", label: "Research Supervisors", icon: Users },
        { id: "grants", label: "Government Funded Research Grants", icon: Award },
        { id: "papers", label: "Papers Published", icon: FileText },
        { id: "conferences", label: "International Conferences Co Hosted", icon: Globe },
        { id: "books", label: "Books Chapters", icon: BookOpen },
        { id: "resources", label: "Research Resources", icon: Library },
        { id: "plagiarism", label: "Plagiarism Checking Tool", icon: ShieldCheck },
    ];

    const supervisors = [
        { name: "Dr. C Srinivasa Rao", dept: "EEE", university: "JNTUA", area: "Electrical Power Systems, AI Techniques", guiding: 1, produced: 6 },
        { name: "Dr. G Panduranga Reddy", dept: "EEE", university: "JNTUA", area: "Renewable Energy Sources", guiding: 1, produced: 0 },
        { name: "Dr. M Ramaprasad Reddy", dept: "EEE", university: "JNTUA", area: "Power Electronics and Drives", guiding: 3, produced: 0 },
        { name: "Dr. M Giridhar Kumar", dept: "Management Studies", university: "JNTU", area: "Human Resource Management", guiding: 0, produced: 0 },
        { name: "Dr. S Prem Kumar", dept: "CSE", university: "JNTUA", area: "E Commerence, Data Mining", guiding: 0, produced: 0 },
        { name: "Dr. C Ranjeeth Kumar", dept: "CSE", university: "Anna University", area: "Information and Communication Engineering", guiding: 0, produced: 0 },
        { name: "Dr. T Tirupal", dept: "ECE", university: "JNTUA", area: "Medical Image Processing", guiding: 2, produced: 0 },
        { name: "Dr. K Chinna Tikka Swamy", dept: "ECE", university: "JNTUA", area: "Satellite Communication", guiding: 0, produced: 0 },
        { name: "Dr. T Syeda Jeelani", dept: "H & S", university: "JNTUA", area: "Organic Chemistry", guiding: 0, produced: 0 },
        { name: "Dr. H S Abzal Basha", dept: "MBA", university: "Sri Krishna Devaraya University", area: "Finance", guiding: 0, produced: 0 },
    ];

    const projects = [
        {
            title: "Internet of Things (IoT) Lab",
            agency: "AICTE",
            funds: 6.80,
            date: "20-07-2020",

        },
        {
            title: "Modernization of Electrical Machines Laboratory by using Variable Frequency Drives",
            agency: "AICTE",
            funds: 10.96,
            date: "20-07-2020",
        },
        {
            title: "Machine Learning Lab",
            agency: "AICTE",
            funds: 7.72,
            date: "09-01-2020",
        },
        {
            title: "National Conference on Technology for Impactful and Sustainable Development of the Society",
            agency: "AICTE",
            funds: 1.0,
            date: "06-09-2020",
        },
        {
            title: "Investigation of Multi-Frequency Multi-GNSS Signal Quality and Satellites Selection for Navigation Applications over the India",
            agency: "SERB",
            funds: 47.51,
            date: "17-03-2018",
        },
        {
            title: "Investigation of Indian Ionospheric Irregularities and Correlation with Space Weather Parameters for Navigation Applications",
            agency: "ISRO",
            funds: 9.63,
            date: "23-01-2017",
        },
        {
            title: "Development of a Portable Additive Manufacturing System Based on Inhibition for 3D printing of Metals and Plastics",
            agency: "Institution of Engineers (India)",
            funds: 0.50,
            date: "24-11-2016",
        },
        {
            title: "Design and Development of an indigenous parabolic shaped solar cooker",
            agency: "Institution of Engineers (India)",
            funds: 0.50,
            date: "17-05-2016",
        },
        {
            title: "Development of Vibratory Finishing Machine for Small/Medium Scale Industries",
            agency: "Institution of Engineers (India)",
            funds: 0.40,
            date: "09-12-2014",
        },
        {
            title: "Development of Table Top System for Vapour Smoothing of Printed Parts",
            agency: "Institution of Engineers (India)",
            funds: 0.30,
            date: "09-12-2014",
        },
        {
            title: "Development of Beaglebone Webcam Server for Security and Surveillance Applications",
            agency: "Institution of Engineers (India)",
            funds: 0.70,
            date: "21-02-2014",
        },
        {
            title: "Development of Weather Balloon for Environment Studies",
            agency: "Institution of Engineers (India)",
            funds: 0.50,
            date: "21-02-2014",
        },
        {
            title: "Conference on Technology for Impactful and Sustainable Development of the Society",
            agency: "AICTE",
            funds: 1.65,
            date: "24-06-2020",
        },
        {
            title: "Conference on Recent Innovations in Engineering and Technology",
            agency: "SERB",
            funds: 1.00,
            date: "14-03-2017",
        },
    ];

    return (
        <Layout>
            <Helmet>
                <title>Research & Development | {collegeInfo.shortName}</title>
                <meta name="description" content="GPCET Research and Development Cell - Objectives, Projects, and Publications." />
            </Helmet>

            {/* Banner */}
            <section
                className="relative h-64 md:h-80 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=80')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />
                <div className="college-container relative z-10 h-full flex items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Research & Development</h1>
                        <p className="text-primary-foreground/80 text-lg">Pioneering Education, Engineering the Future</p>
                    </div>
                </div>
            </section>

            <section className="college-section bg-background">
                <div className="college-container">
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Sidebar Navigation */}
                        <div className="lg:w-1/4 shrink-0">
                            <div className="bg-muted/30 rounded-lg border border-border overflow-hidden sticky top-24">
                                <div className="bg-primary text-primary-foreground p-4 font-bold text-lg">
                                    Research Resources
                                </div>
                                <div className="flex flex-col">
                                    {sidebarItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveSection(item.id)}
                                            className={cn(
                                                "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors text-left border-l-4",
                                                activeSection === item.id
                                                    ? "bg-secondary/10 border-primary text-primary"
                                                    : "border-transparent hover:bg-muted text-muted-foreground hover:text-foreground"
                                            )}
                                        >
                                            <item.icon className="w-4 h-4" />
                                            {item.label}
                                            {activeSection === item.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="lg:w-3/4">

                            {/* Research Home Section */}
                            {activeSection === "research-home" && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <h2 className="text-3xl font-serif font-bold text-primary relative inline-block">
                                        Research Home
                                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary"></span>
                                    </h2>

                                    {/* Dashboard Stats */}
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                                        <div className="bg-card border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="p-2 bg-primary/10 rounded-md">
                                                    <FileText className="w-6 h-6 text-primary" />
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-2xl font-bold">{totalPapers}</h3>
                                                <p className="text-sm text-muted-foreground">Papers Published</p>
                                            </div>
                                        </div>

                                        <div className="bg-card border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="p-2 bg-secondary/10 rounded-md">
                                                    <BookOpen className="w-6 h-6 text-secondary" />
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-2xl font-bold">{totalChapters}</h3>
                                                <p className="text-sm text-muted-foreground">Book Chapters</p>
                                            </div>
                                        </div>

                                        <div className="bg-card border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="p-2 bg-accent/10 rounded-md">
                                                    <Award className="w-6 h-6 text-accent" />
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-2xl font-bold">{totalGrants}</h3>
                                                <p className="text-sm text-muted-foreground">Funded Projects</p>
                                            </div>
                                        </div>

                                        <div className="bg-card border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="p-2 bg-purple-100 rounded-md">
                                                    <Library className="w-6 h-6 text-purple-600" />
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-2xl font-bold">{totalResources}</h3>
                                                <p className="text-sm text-muted-foreground">Research Resources</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="prose max-w-none text-muted-foreground leading-relaxed pt-4">
                                        <h3 className="text-xl font-bold text-primary mb-2">Research Vision</h3>
                                        <p className="text-lg text-foreground font-medium">
                                            GPCET recognizes the crucial role of Research and Development (R&D) in driving innovation. It understands that investing in technology and future capabilities is key to developing new products, processes, and services.
                                        </p>
                                        <p>
                                            In recent years, GPCET has made significant strides in its Research and Development initiatives, fostering a culture of out-of-the-box thinking and encouraging faculty and students to generate revolutionary ideas that can bring about positive societal change.
                                        </p>
                                        <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 my-6">
                                            <h3 className="text-xl font-bold text-primary mb-4">Focus Areas</h3>
                                            <p>
                                                At GPCET Research Centre, proactive applied research is at the forefront to address the technical and scientific challenges faced by industries and defense organizations. The focus is on conducting research in areas relevant to education, developing tools, and techniques that cater to the needs of the university, faculty members, and prospective students.
                                            </p>
                                        </div>
                                        <p>
                                            GPCET is dedicated to advancing knowledge through research across various academic disciplines. The research areas encompass:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Nanotechnology</li>
                                                <li>Environment</li>
                                                <li>Aerospace and Dynamics</li>
                                                <li>CAD/CAM & CNC Machining</li>
                                                <li>Embedded Systems</li>
                                            </ul>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Low Power VLSI Digital System Design</li>
                                                <li>Business Analytics & Big Data</li>
                                                <li>Cloud Computing</li>
                                                <li>Wireless Technology</li>
                                                <li>Next Generation Networks</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Research Supervisors Section */}
                            {activeSection === "supervisors" && (
                                <div className="space-y-6 animate-in fade-in duration-300">

                                    <h2 className="text-3xl font-serif font-bold text-primary relative inline-block">
                                        Research Supervisors
                                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary"></span>
                                    </h2>
                                    <div className="rounded-md border border-border overflow-hidden">
                                        <Table>
                                            <TableHeader className="bg-muted/50">
                                                <TableRow>
                                                    <TableHead className="font-bold text-primary">Name of the Supervisor</TableHead>
                                                    <TableHead className="font-bold text-primary">Department</TableHead>
                                                    <TableHead className="font-bold text-primary">University Registered</TableHead>
                                                    <TableHead className="font-bold text-primary">Research Area</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {supervisors.map((supervisor, index) => (
                                                    <TableRow key={index} className="hover:bg-muted/5">
                                                        <TableCell className="font-medium">
                                                            {supervisor.name}
                                                            <div className="text-xs text-muted-foreground mt-1">
                                                                Ph.D. Guiding: {supervisor.guiding} | Produced: {supervisor.produced}
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>{supervisor.dept}</TableCell>
                                                        <TableCell>{supervisor.university}</TableCell>
                                                        <TableCell>{supervisor.area}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            )}

                            {/* Government Funded Research Grants */}
                            {activeSection === "grants" && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <h2 className="text-3xl font-serif font-bold text-primary relative inline-block">
                                        Government Funded Research Grants
                                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary"></span>
                                    </h2>
                                    <p className="text-muted-foreground">
                                        GPCET has secured various funded projects from prestigious government agencies and organizations like AICTE, SERB, ISRO, and IE(I).
                                    </p>

                                    <div className="rounded-md border border-border overflow-hidden">
                                        <Table>
                                            <TableHeader className="bg-muted/50">
                                                <TableRow>
                                                    <TableHead className="font-bold text-primary">Project Title</TableHead>
                                                    <TableHead className="font-bold text-primary">Fuding Agency</TableHead>
                                                    <TableHead className="font-bold text-primary">Funding Amount</TableHead>
                                                    <TableHead className="font-bold text-primary">Sanction Date</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {projects.map((project, index) => (
                                                    <TableRow key={index} className="hover:bg-muted/5">
                                                        <TableCell className="font-medium">{project.title}</TableCell>
                                                        <TableCell>{project.agency}</TableCell>
                                                        <TableCell>{project.funds}</TableCell>
                                                        <TableCell>{project.date}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            )}

                            {/* Papers Published */}
                            {activeSection === "papers" && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <h2 className="text-3xl font-serif font-bold text-primary relative inline-block">
                                        Papers Published
                                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary"></span>
                                    </h2>
                                    <p className="text-muted-foreground mb-4">
                                        Faculty and students are actively involved in publishing their research findings in reputed national and international journals.
                                    </p>

                                    <div className="bg-white rounded-lg border border-border p-4">
                                        <Tabs defaultValue="2022-23" className="w-full">
                                            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 mb-4 h-auto flex-wrap">
                                                <TabsTrigger value="2022-23">2022-23</TabsTrigger>
                                                <TabsTrigger value="2021-22">2021-22</TabsTrigger>
                                                <TabsTrigger value="2020-21">2020-21</TabsTrigger>
                                                <TabsTrigger value="2019-20">2019-20</TabsTrigger>
                                                <TabsTrigger value="2018-19">2018-19</TabsTrigger>
                                            </TabsList>

                                            <TabsContent value="2022-23">
                                                <ResearchPapersTable papers={researchPapers2022_23} />
                                            </TabsContent>

                                            <TabsContent value="2021-22">
                                                <ResearchPapersTable papers={researchPapers2021_22} />
                                            </TabsContent>

                                            <TabsContent value="2020-21">
                                                <ResearchPapersTable papers={researchPapers2020_21} />
                                            </TabsContent>

                                            <TabsContent value="2019-20">
                                                <ResearchPapersTable papers={researchPapers2019_20} />
                                            </TabsContent>

                                            <TabsContent value="2018-19">
                                                <ResearchPapersTable papers={researchPapers2018_19} />
                                            </TabsContent>
                                        </Tabs>
                                    </div>
                                </div>
                            )}

                            {/* International Conferences Co Hosted */}
                            {activeSection === "conferences" && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <h2 className="text-3xl font-serif font-bold text-primary relative inline-block">
                                        International Conferences Co Hosted
                                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary"></span>
                                    </h2>
                                    <div className="grid gap-6">
                                        <a
                                            href="https://www.gpcet.ac.in/wp-content/uploads/2023/05/ICACDS-2022.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="college-card p-6 border-l-4 border-l-primary block hover:shadow-lg transition-all cursor-pointer"
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-xl text-primary">ICACDS-2022</h3>
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Completed</span>
                                            </div>
                                            <p className="font-medium text-foreground mb-2">GPCET has organized an International Conference on ‘Advances in Computing and Data Sciences (ICACDS-2022)’ during April 22-23, 2022. This conference has technically been sponsored by Springer CCIS and financially supported by GPCET, Kurnool in association with Consilio Intelligence Research Lab and Co-Sponsored by SK Info Techies, GISR Foundation, and Print Canvas.
                                                The main objective behind this conference has been to provide a common platform for active researchers and industry experts from around the globe working in computing techniques and data sciences to present their innovative ideas and enlighten the people working in the similar domain regarding the latest technological trends.</p>
                                            <p className="text-sm text-muted-foreground mb-4">Held on April 22-23, 2022.</p>
                                        </a>

                                        <a
                                            href="https://www.gpcet.ac.in/wp-content/uploads/2023/05/TISDS_brochure.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="college-card p-6 border-l-4 border-l-primary block hover:shadow-lg transition-all cursor-pointer"
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-xl text-primary">TISDS-2020</h3>
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Completed</span>
                                            </div>
                                            <p className="font-medium text-foreground mb-2">GPCET has organized AICTE Sponsored National Conference on “Technology for Impactful and Sustainable Development of the Society (TISDS-2020)”. The aim of this conference is to bring researchers, scientists and industry persons from the various fields of Engineering and Technology, to share their thoughts, findings and applications that contribute to the sustainable development of the society. The theme of the conference has attracted academicians, researchers and industry persons from all parts of the country.</p>
                                            <p className="text-sm text-muted-foreground mb-4">Held on December 15-16, 2020.</p>
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* Books Chapters */}
                            {activeSection === "books" && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <h2 className="text-3xl font-serif font-bold text-primary relative inline-block">
                                        Books Chapters
                                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary"></span>
                                    </h2>
                                    <p className="text-muted-foreground">
                                        GPCET faculty members actively contribute to research by publishing book chapters in various edited volumes.
                                    </p>

                                    <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
                                        <Tabs defaultValue="2022-23" className="w-full">
                                            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 mb-8 h-auto flex-wrap">
                                                <TabsTrigger value="2022-23">2022-23</TabsTrigger>
                                                <TabsTrigger value="2021-22">2021-22</TabsTrigger>
                                                <TabsTrigger value="2020-21">2020-21</TabsTrigger>
                                                <TabsTrigger value="2019-20">2019-20</TabsTrigger>
                                                <TabsTrigger value="2018-19">2018-19</TabsTrigger>
                                            </TabsList>

                                            <TabsContent value="2022-23">
                                                <BookChaptersList chapters={bookChapters2022_23} />
                                            </TabsContent>

                                            <TabsContent value="2021-22">
                                                <BookChaptersList chapters={bookChapters2021_22} />
                                            </TabsContent>

                                            <TabsContent value="2020-21">
                                                <BookChaptersList chapters={bookChapters2020_21} />
                                            </TabsContent>

                                            <TabsContent value="2019-20">
                                                <BookChaptersList chapters={bookChapters2019_20} />
                                            </TabsContent>

                                            <TabsContent value="2018-19">
                                                <BookChaptersList chapters={bookChapters2018_19} />
                                            </TabsContent>
                                        </Tabs>
                                    </div>
                                </div>
                            )}

                            {/* Research Resources */}
                            {activeSection === "resources" && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <h2 className="text-3xl font-serif font-bold text-primary relative inline-block">
                                        Research Resources
                                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary"></span>
                                    </h2>
                                    <p className="text-muted-foreground">
                                        GPCET provides access to a wide range of top-tier research journals and databases to support academic excellence.
                                    </p>
                                    <ResearchResourcesList resources={researchResources} />
                                </div>
                            )}

                            {/* Plagiarism Checking Tool */}
                            {activeSection === "plagiarism" && (
                                <div className="space-y-6 animate-in fade-in duration-300">
                                    <h2 className="text-3xl font-serif font-bold text-primary relative inline-block">
                                        Plagiarism Checking Tool
                                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary"></span>
                                    </h2>
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                        <div className="flex items-start gap-4">
                                            <ShieldCheck className="w-10 h-10 text-yellow-600 flex-shrink-0" />
                                            <div>
                                                <h3 className="text-lg font-bold text-yellow-800 mb-2">Drillbit</h3>
                                                <div className="text-yellow-700 leading-relaxed text-sm space-y-2">
                                                    <p>
                                                        Drillbit is an online text-matching service which assists faculty in detecting possible plagiarism. The system enables faculty to compare students’ work with a vast database of electronic sources including:
                                                    </p>
                                                    <ul className="list-disc pl-5 space-y-1">
                                                        <li>Over 12 billion websites (including archived websites)</li>
                                                        <li>Over 10,000 major newspapers, magazines and scholarly journals</li>
                                                        <li>Thousands of books, including literary classics</li>
                                                        <li>Previously submitted student work to other educational institutions</li>
                                                        <li>Essays from cheat sites</li>
                                                        <li>Copyright-free material</li>
                                                    </ul>
                                                </div>
                                                <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors text-sm font-medium">
                                                    Access Tool (Login Required)
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    );
};

export default Research;
