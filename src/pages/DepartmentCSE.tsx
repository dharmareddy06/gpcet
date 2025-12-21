import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { collegeInfo } from "@/data/collegeData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, BookOpen, Atom, Download, ExternalLink } from "lucide-react";

const DepartmentCSE = () => {
    const [activeTab, setActiveTab] = useState("overview");

    // Scraped Data Placeholders
    const about = {
        vision: "To deliver the qualitative, innovative and ethical computer science technocrats who strive for the benefit of society.",
        mission: "Nurturing the future leaders in academia, information technology, industry and entrepreneurial pursuit, through a contemporary curriculum of theory and application that develops the ability to solve problems individually and in teams.",
        description: "The Department of Computer Science and Engineering (CSE) at GPCET symbolizes the GPCET tradition of excellence as a leader in computer science and engineering education and research. The Department is also accredited by National Board of Accreditation. CSE is in a period of exciting growth and opportunity. The department is dedicated to education, research and overall excellence. CSE Graduates capture leading appointments in IT service industries, as well as fuel the Internet, wireless communications, and cross-disciplinary IT Industries. The CSE program at GPCET was started in 2007. Recognized by AICTE and affiliated to JNTUA, Anantapuramu the current intake is 540 students. It also offers Post Graduate programme in Computer Science and Engineering with an intake of 18."
    };

    const peos = [
        "PEO 1: Apply principles of Computer science and engineering with analytical thinking and problem solving skills for developing software systems.",
        "PEO 2: Adapt to rapidly changing industry needs by acquiring required technical skills.",
        "PEO 3: Assess real time problems and develop suitable technological solutions to full fill the needs of society.",
        "PEO 4: Develop leadership skills and engage in life-long learning to meet the changing global needs."
    ];

    const pos = [
        "PO 1. Engineering Knowledge: Apply the knowledge of mathematics, science, engineering Fundamentals and an engineering specialization.",
        "PO 2. Problem analysis: Identify, formulate, review research literature, and analyze complex Engineering problems.",
        "PO 3. Design / development of solutions: Design solutions for complex engineering problems.",
        "PO 4. Conduct investigations of complex problems: Use research-based knowledge and research methods.",
        "PO 5. Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools.",
        "PO 6. The engineer and society: Apply reasoning informed by the contextual knowledge to assess Societal, health, safety, legal and cultural issues.",
        "PO 7. Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts.",
        "PO 8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities.",
        "PO 9. Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams.",
        "PO 10. Communications: Communicate effectively on complex engineering activities.",
        "PO 11. Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles.",
        "PO 12. Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning."
    ];

    const facultyList = [
        { "S.No": "1", "Name": "Dr. SRI LAKSHMI MARRI", "Designation": "PROFESSOR & HEAD" },
        { "S.No": "2", "Name": "Dr. SINGULURI PREMKUMAR", "Designation": "PROFESSOR" },
        { "S.No": "3", "Name": "Dr. C RANJEETH KUMAR", "Designation": "PROFESSOR" },
        { "S.No": "4", "Name": "Dr. C MADDILETY", "Designation": "PROFESSOR" },
        { "S.No": "5", "Name": "Dr. NAGARAJU KOLLA", "Designation": "ASSOCIATE PROFESSOR" },
        { "S.No": "6", "Name": "Dr. GANDLA PRAVEEN KUMAR", "Designation": "PROFESSOR" },
        { "S.No": "7", "Name": "Dr. CHITKUR NAGA KUMAR", "Designation": "ASSOCIATE PROFESSOR" },
        { "S.No": "8", "Name": "Mrs. KUPPALA LAXMI", "Designation": "ASST PROFESSOR" },
        { "S.No": "9", "Name": "Mr. RACHUGALLA VARAPRASAD", "Designation": "ASST PROFESSOR" },
        { "S.No": "10", "Name": "Mr. K MAHESH BABU", "Designation": "ASST PROFESSOR" },
        // Showing top 10 for brevity in initial render, can expand
    ];

    const events = [
        { title: "ACTIVITIES", url: "http://www.gpcet.ac.in/cse_acivities/" },
        { title: "WORKSHOPS", url: "http://www.gpcet.ac.in/cse_workshop/" },
        { title: "GUEST LECTURES", url: "http://www.gpcet.ac.in/cse_guest/" }
    ];

    const labs = ["LAB 1", "LAB 2", "LAB 3"];

    const resources = [
        { title: "Computer Programming", author: "Mr. R. Varaprasad", url: "http://www.gpcet.ac.in/wp-content/uploads/2025/01/COMPUTER%20PROGRAMMING.mp4" },
        { title: "Data Structures-Searching", author: "Mrs. Ameena Yasmeen", url: "http://www.gpcet.ac.in/wp-content/uploads/2025/01/DATA%20STRUCTURES-SEARCHING%20%281%29.mp4" },
        { title: "OOPs Through JAVA", author: "Dr M. SriLakshmi", url: "http://www.gpcet.ac.in/wp-content/uploads/2025/01/OBJECT%20ORIENTED%20PROGRAMMING%20THROUGH%20JAVA.mp4" },
        { title: "DBMS Introduction", author: "Dr .S. Prem Kumar", url: "http://www.gpcet.ac.in/wp-content/uploads/2025/01/1.-DBMS-INTRODUCTION-UNIT-1-Dr-.S.-Prem-Kumar.mp4" },
        { title: "Operating Systems", author: "Mrs. B.Deena Divya Nayomi", url: "http://www.gpcet.ac.in/wp-content/uploads/2025/01/OPERATING%20SYSTEMS.mp4" },
        { title: "Software Engineering", author: "Mr. V. Vijaya Chandra Rao", url: "http://www.gpcet.ac.in/wp-content/uploads/2025/01/Vijay%20Sir%20%281%29.mp4" }
    ];

    return (
        <Layout>
            <Helmet>
                <title>Computer Science & Engineering | {collegeInfo.shortName}</title>
                <meta name="description" content="Department of Computer Science and Engineering at GPCET - Vision, Mission, Faculty, and Resources." />
            </Helmet>

            {/* Banner */}
            <section
                className="relative h-64 md:h-72 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />
                <div className="college-container relative z-10 h-full flex items-center">
                    <div>
                        <div className="flex gap-2 mb-2">
                            <Badge variant="outline" className="text-primary-foreground border-primary-foreground">NAAC A</Badge>
                            <Badge variant="outline" className="text-primary-foreground border-primary-foreground">NBA Accredited</Badge>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Computer Science & Engineering</h1>
                        <p className="text-primary-foreground/80 text-lg">Pioneering Education, Engineering the Future</p>
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
                            <TabsTrigger value="events">Events</TabsTrigger>
                            <TabsTrigger value="labs">Laboratories</TabsTrigger>
                            <TabsTrigger value="resources">Resources</TabsTrigger>
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
                                                <span className="font-semibold">2007</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b pb-2">
                                                <span className="text-muted-foreground">Intake (UG)</span>
                                                <span className="font-semibold">540</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b pb-2">
                                                <span className="text-muted-foreground">Intake (PG)</span>
                                                <span className="font-semibold">18</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-muted-foreground">Head of Dept</span>
                                                <span className="font-semibold text-right">Dr. Sri Lakshmi Marri</span>
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

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-serif text-primary">Program Outcomes (POs)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {pos.map((po, index) => (
                                            <div key={index} className="bg-muted/30 p-4 rounded-lg">
                                                <h4 className="font-semibold text-foreground mb-2">{po.split(':')[0]}</h4>
                                                <p className="text-sm text-muted-foreground">{po.split(':')[1]}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="faculty">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-serif text-primary">Faculty Members</CardTitle>
                                    <CardDescription>Highly qualified and experienced faculty team</CardDescription>
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
                                                    <tr key={faculty["S.No"]} className="hover:bg-muted/50">
                                                        <td className="px-4 py-3">{faculty["S.No"]}</td>
                                                        <td className="px-4 py-3 font-medium text-primary">{faculty.Name}</td>
                                                        <td className="px-4 py-3">{faculty.Designation}</td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <td colSpan={3} className="px-4 py-3 text-center text-muted-foreground text-xs">
                                                        ... and 55 more faculty members
                                                    </td>
                                                </tr>
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
                                <p className="text-muted-foreground">State-of-the-art laboratories equipped with latest hardware and software.</p>
                            </div>
                        </TabsContent>

                        <TabsContent value="resources" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-serif text-primary">Digital Learning Resources</CardTitle>
                                    <CardDescription>Video lectures and course materials by our faculty</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {resources.map((res, idx) => (
                                            <div key={idx} className="flex items-start justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-foreground">{res.title}</h4>
                                                    <p className="text-sm text-muted-foreground">By {res.author}</p>
                                                </div>
                                                <a href={res.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
                                                    <Button size="sm" variant="outline" className="gap-2">
                                                        <Download className="w-4 h-4" />
                                                        View
                                                    </Button>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                    </Tabs>
                </div>
            </section>
        </Layout>
    );
};

export default DepartmentCSE;
