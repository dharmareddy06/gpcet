import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { collegeInfo } from "@/data/collegeData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, BookOpen, Atom, Download, ExternalLink } from "lucide-react";

const DepartmentCAI = () => {
    const [activeTab, setActiveTab] = useState("overview");

    // Scraped Data
    const about = {
        vision: "To deliver the qualitative, innovative and ethical computer science technocrats who strive for the benefit of society.",
        mission: "Nurturing the future leaders in academia, information technology, industry and entrepreneurial pursuit, through a contemporary curriculum of theory and application that develops the ability to solve problems individually and in teams.",
        description: "The Department of Artificial Intelligence (AI) at GPCET symbolizes the GPCET tradition of excellence as a leader in Artificial Intelligence education and research. CAI is in a period of exciting growth and opportunity. The department is dedicated to education, research and overall excellence. AI Graduates capture leading appointments in IT service industries, as well as fuel the Internet, wireless communications, and cross-disciplinary IT Industries. The AI program at GPCET was started in 2020. Recognized by AICTE and affiliated to JNTUA, Anantapur the current intake is 180 students."
    };

    const peos = [
        "PEO 1: Apply principles of Computer science and engineering with analytical thinking and problem solving skills for developing software systems.",
        "PEO 2: Adapt to rapidly changing industry needs by acquiring required technical skills.",
        "PEO 3: Assess real time problems and develop suitable technological solutions to full fill the needs of society."
    ];

    const pos = [
        "PO 1: Engineering knowledge",
        "PO 2: Problem analysis",
        "PO 3: Design/development of solutions",
        "PO 4: Conduct investigations of complex problems",
        "PO 5: Modern tool usage",
        "PO 6: The engineer and society",
        "PO 7: Environment and sustainability",
        "PO 8: Ethics",
        "PO 9: Individual and team work",
        "PO 10: Communication",
        "PO 11: Project management and finance",
        "PO 12: Life-long learning"
    ];

    const psos = [
        "PSO 1: Design, Develop, Test and maintain software systems for business applications.",
        "PSO 2: Evaluate and tune software systems for better performance."
    ];

    const bosMembers = [
        { name: "Dr. P. Chenna Reddy", designation: "Professor, CSE, JNTUA", role: "External Member" },
        { name: "Dr. P Suman Prakash", designation: "Professor & Dean, CAI, GPCET", role: "Chairman BOS" },
        { name: "Dr. Korra Sathya Babu", designation: "Associate Professor", role: "External Member" },
        // Add more if scraped
    ];

    const facultyList = [
        { "sNo": "1", "name": "Dr. PERUMALLA SUMAN PRAKASH", "designation": "PROFESSOR & HEAD" },
        { "sNo": "2", "name": "Dr. MUCHALAPURI JANARDHAN", "designation": "PROFESSOR" },
        { "sNo": "3", "name": "Dr. CHITKUR NAGA GANESH", "designation": "ASSOCIATE PROFESSOR" },
        { "sNo": "4", "name": "Mr. JAYABABU M", "designation": "ASST PROFESSOR" },
        { "sNo": "5", "name": "Mr. VALLAMKONDA RAJA SEKHAR", "designation": "ASST PROFESSOR" },
        { "sNo": "6", "name": "Mrs. MADARAPU BHAGYA LAKSHMI", "designation": "ASST PROFESSOR" },
        { "sNo": "7", "name": "Mr. P VISHNU KUMAR", "designation": "ASST PROFESSOR" },
        { "sNo": "8", "name": "Mr. MOHAMMED ASIM", "designation": "ASST PROFESSOR" },
        { "sNo": "9", "name": "Ms. KURUVA SANDHYA RANI", "designation": "ASST PROFESSOR" },
        { "sNo": "10", "name": "Mr. K VINOD KUMAR REDDY", "designation": "ASST PROFESSOR" },
        { "sNo": "11", "name": "Mrs. RAZIYA DUDEKULA", "designation": "ASST PROFESSOR" },
        { "sNo": "12", "name": "Mr. KAMSALA SRINIVASULU ACHARI", "designation": "ASST PROFESSOR" },
        { "sNo": "13", "name": "Mrs. MANDLA JAYA SUNITHA", "designation": "ASST PROFESSOR" },
        { "sNo": "14", "name": "Mr. SHAIK SADDAM HUSSAIN", "designation": "ASST PROFESSOR" },
        { "sNo": "15", "name": "Mr. COPPISETTY PRAVEEN KUMAR", "designation": "ASST PROFESSOR" },
        { "sNo": "16", "name": "Mr. S NOOR MOHAMMED", "designation": "ASST PROFESSOR" },
        { "sNo": "17", "name": "Ms. THEJESWARI K", "designation": "ASST PROFESSOR" },
        { "sNo": "18", "name": "Mr. P SANDEEP KUMAR REDDY", "designation": "ASST PROFESSOR" },
        { "sNo": "19", "name": "Ms. KAVITHA BADHAM", "designation": "ASST PROFESSOR" },
        { "sNo": "20", "name": "Mr. PRATHIMA ALLURI", "designation": "ASST PROFESSOR" },
        { "sNo": "21", "name": "Mr. PONAKALADINNE MALLIKARJUNA REDDY", "designation": "ASST PROFESSOR" },
        { "sNo": "22", "name": "Mr. ACHUKATLA SADAK HUSSAIN", "designation": "ASST PROFESSOR" },
        { "sNo": "23", "name": "Mr. RAMU MOGILISHETTY", "designation": "ASST PROFESSOR" },
        { "sNo": "24", "name": "Mr. KHAYUM BELLARY", "designation": "ASST PROFESSOR" },
        { "sNo": "25", "name": "Ms. SWARNALATHA VULAVALA", "designation": "ASST PROFESSOR" },
        { "sNo": "26", "name": "Mr. ADAM ALI PINJARI", "designation": "ASST PROFESSOR" },
        { "sNo": "27", "name": "Mr. NAVEEN BABU MALLEPOGU", "designation": "ASST PROFESSOR" }
    ];

    const events = [
        { title: "ACTIVITIES", url: "https://www.gpcet.ac.in/ai-events/" },
        { title: "WORKSHOPS", url: "https://www.gpcet.ac.in/ai-events/" },
        { title: "GUEST LECTURES", url: "https://www.gpcet.ac.in/ai-events/" }
    ];

    const labs = ["AI Lab 1", "AI Lab 2", "Machine Learning Lab"];

    return (
        <Layout>
            <Helmet>
                <title>CSE (Artificial Intelligence) | {collegeInfo.shortName}</title>
                <meta name="description" content="Department of Computer Science and Engineering (Artificial Intelligence) at GPCET." />
            </Helmet>

            {/* Banner */}
            <section
                className="relative h-64 md:h-72 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550439062-609e1531270e?w=1920&q=80')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />
                <div className="college-container relative z-10 h-full flex items-center">
                    <div>
                        <div className="flex gap-2 mb-2">
                            <Badge variant="outline" className="text-primary-foreground border-primary-foreground">NAAC A</Badge>
                            <Badge variant="outline" className="text-primary-foreground border-primary-foreground">Autonomous</Badge>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">CSE (Artificial Intelligence)</h1>
                        <p className="text-primary-foreground/80 text-lg">Innovating Tomorrow with Intelligence</p>
                    </div>
                </div>
            </section>

            <section className="college-section bg-background">
                <div className="college-container">

                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto p-1 mb-8">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="peos">PEOs & POs</TabsTrigger>
                            <TabsTrigger value="faculty">Faculty</TabsTrigger>
                            <TabsTrigger value="bos">Board of Studies</TabsTrigger>
                            <TabsTrigger value="events">Events</TabsTrigger>
                            <TabsTrigger value="labs">Laboratories</TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="space-y-6">
                            <div className="grid lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2 space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-2xl font-serif text-primary">About Department</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {about.description}
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Card className="bg-primary/5 border-primary/20">
                                            <CardHeader>
                                                <CardTitle className="text-xl font-serif text-primary">Vision</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground italic">"{about.vision}"</p>
                                            </CardContent>
                                        </Card>
                                        <Card className="bg-secondary/5 border-secondary/20">
                                            <CardHeader>
                                                <CardTitle className="text-xl font-serif text-secondary">Mission</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground italic">"{about.mission}"</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                <div>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Department Stats</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex justify-between items-center border-b pb-2">
                                                <span className="text-muted-foreground">Established</span>
                                                <span className="font-semibold">2020</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b pb-2">
                                                <span className="text-muted-foreground">Intake</span>
                                                <span className="font-semibold">180</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-muted-foreground">Head of Dept</span>
                                                <span className="font-semibold text-right">Dr. P. Suman Prakash</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="peos" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-serif text-primary">Program Educational Objectives (PEOs)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        {peos.map((peo, index) => (
                                            <li key={index} className="flex gap-3">
                                                <span className="font-bold text-accent min-w-[60px]">PEO {index + 1}</span>
                                                <span className="text-muted-foreground">{peo.split(':')[1]}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl font-serif text-primary">Program Outcomes (POs)</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                                            {pos.map((po, index) => (
                                                <li key={index}>{po}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl font-serif text-primary">Program Specific Outcomes (PSOs)</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                                            {psos.map((pso, index) => (
                                                <li key={index}>{pso}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="faculty">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-serif text-primary">Faculty Members</CardTitle>
                                    <CardDescription>Dedicated experts in Artificial Intelligence and Machine Learning</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm text-left">
                                            <thead className="bg-muted text-muted-foreground font-medium">
                                                <tr>
                                                    <th className="px-4 py-3">S.No</th>
                                                    <th className="px-4 py-3">Name of the Faculty</th>
                                                    <th className="px-4 py-3">Designation</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border">
                                                {facultyList.map((faculty) => (
                                                    <tr key={faculty.sNo} className="hover:bg-muted/50">
                                                        <td className="px-4 py-3">{faculty.sNo}</td>
                                                        <td className="px-4 py-3 font-medium text-primary">{faculty.name}</td>
                                                        <td className="px-4 py-3">{faculty.designation}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="bos">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-serif text-primary">Board of Studies</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm text-left">
                                            <thead className="bg-muted text-muted-foreground font-medium">
                                                <tr>
                                                    <th className="px-4 py-3">Name</th>
                                                    <th className="px-4 py-3">Designation</th>
                                                    <th className="px-4 py-3">Role</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border">
                                                {bosMembers.map((member, idx) => (
                                                    <tr key={idx} className="hover:bg-muted/50">
                                                        <td className="px-4 py-3 font-medium text-primary">{member.name}</td>
                                                        <td className="px-4 py-3">{member.designation}</td>
                                                        <td className="px-4 py-3">{member.role}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="events" className="space-y-6">
                            <div className="grid md:grid-cols-3 gap-6">
                                {events.map((event) => (
                                    <a key={event.title} href={event.url} target="_blank" rel="noopener noreferrer" className="block group">
                                        <Card className="h-full hover:border-primary transition-colors">
                                            <CardHeader className="text-center">
                                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                    <Calendar className="w-8 h-8" />
                                                </div>
                                                <CardTitle>{event.title}</CardTitle>
                                                <CardDescription>Click to view details</CardDescription>
                                            </CardHeader>
                                        </Card>
                                    </a>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="labs" className="space-y-6">
                            <div className="grid md:grid-cols-3 gap-6">
                                {labs.map((lab) => (
                                    <Card key={lab} className="overflow-hidden">
                                        <div className="aspect-video bg-muted flex items-center justify-center">
                                            <Atom className="w-12 h-12 text-muted-foreground/50" />
                                        </div>
                                        <CardHeader>
                                            <CardTitle>{lab}</CardTitle>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                            <div className="text-center mt-8">
                                <p className="text-muted-foreground">High-performance computing labs with GPU support for AI/ML tasks.</p>
                            </div>
                        </TabsContent>

                    </Tabs>
                </div>
            </section>
        </Layout>
    );
};

export default DepartmentCAI;
