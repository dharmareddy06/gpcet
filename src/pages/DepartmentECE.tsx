import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { collegeInfo } from "@/data/collegeData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, BookOpen, Atom, Download, ExternalLink } from "lucide-react";

const DepartmentECE = () => {
    const [activeTab, setActiveTab] = useState("overview");

    // Scraped Data
    const about = {
        vision: "To produce engineers with sound knowledge in electronics and communication related domains with entrepreneurial skills to serve societal needs.",
        mission: "The department imparts quality technical education with professional competence, leadership abilities and ethical values through effective teaching learning process.",
        description: "The Department of Electronics and Communication Engineering (ECE) is one of the first departments established in 2007 for imparting state-of-the-art knowledge in Electronics and Communication Engineering. The department is supported by highly dedicated qualified faculty which include Ph.D’s and pursuing Ph.D’s in various fields of specialization having vast experience in both Industry and Academia. The department offers a Bachelors programme in Electronics and Communication Engineering with an intake of 180 and Masters Programme in Digital Electronics and Communication Systems (DECS) with an intake of 06."
    };

    const peos = [
        "PEO 1: Apply the principles of basic engineering sciences in performing professional tasks in Electronics and Communication Engineering and to develop awareness on societal concerns.",
        "PEO 2: Demonstrate problem-solving abilities that permit to contribute in a variety of signal processing, design of circuitry and academic careers.",
        "PEO 3: Thrive in diverse, global, and multidisciplinary environments with team spirit for successful completion and management of electronic projects.",
        "PEO 4: Participate in lifelong-learning activities to enhance professional and ethical development."
    ];

    const pos = [
        "PO 1: Engineering Knowledge",
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

    const bosMembers = [
        { name: "Dr. K. Venkata Ramanaiah", designation: "Professor, ECE, YSR Engineering College", role: "External Member" },
        { name: "Dr. T. Tirupal", designation: "Professor & Dean, ECE, GPCET", role: "Chairman BOS" },
        { name: "Dr. K. Krishna Naik", designation: "Associate Professor, ECE, IIITDM, Kurnool", role: "External Member" },
        // Add more if scraped
    ];

    const facultyList = [
        { "sNo": "1", "name": "Dr. TALARI TIRUPAL", "designation": "PROFESSOR & HEAD" },
        { "sNo": "2", "name": "Dr. K C T SWAMY", "designation": "PROFESSOR" },
        { "sNo": "3", "name": "Dr. NERINOORU SREEKANTH", "designation": "PROFESSOR" },
        { "sNo": "4", "name": "Dr. REDDY BARUSU MADHU SUDHAN", "designation": "ASSOCIATE PROFESSOR" },
        { "sNo": "5", "name": "Dr. NALUBOLU GEETHA RANI", "designation": "ASSOCIATE PROFESSOR" },
        { "sNo": "6", "name": "Dr. B RAVI CHANDRA", "designation": "ASSOCIATE PROFESSOR" },
        { "sNo": "7", "name": "Dr. H S ABZAL BASHA", "designation": "ASSOCIATE PROFESSOR" },
        { "sNo": "8", "name": "Mr. GUDE RAMARAO", "designation": "ASST PROFESSOR" },
        { "sNo": "9", "name": "Mrs. SOWDAGAR FOWZIA SULTHANA", "designation": "ASST PROFESSOR" },
        { "sNo": "10", "name": "Mrs. T RANJITHA DEVI", "designation": "ASST PROFESSOR" },
        { "sNo": "11", "name": "Mr. TALARI KISHORE", "designation": "ASST PROFESSOR" },
        { "sNo": "12", "name": "Mr. SHAIK TOWSEEF AHMED", "designation": "ASST PROFESSOR" },
        { "sNo": "13", "name": "Mrs. BODA ERAMMA", "designation": "ASST PROFESSOR" },
        { "sNo": "14", "name": "Mrs. KUMMARI UMA MAHESWARI", "designation": "ASST PROFESSOR" },
        { "sNo": "15", "name": "Mr. CHILAKALA LOKANATH REDDY", "designation": "ASST PROFESSOR" },
        { "sNo": "16", "name": "Mrs. THALARI SWETHA", "designation": "ASST PROFESSOR" },
        { "sNo": "17", "name": "Mrs. BOGGULA SULOCHANA", "designation": "ASST PROFESSOR" },
        { "sNo": "18", "name": "Mr. V KRISHNAKANTH YADAV", "designation": "ASST PROFESSOR" },
        { "sNo": "19", "name": "Mrs. AREKATIKA SWETHA RANI", "designation": "ASST PROFESSOR" },
        { "sNo": "20", "name": "Mrs. ALLURU SREEVANI", "designation": "ASST PROFESSOR" },
        { "sNo": "21", "name": "Mrs. KOTLA MAHESWARI", "designation": "ASST PROFESSOR" },
        { "sNo": "22", "name": "Mrs. VANDAVASI PRIYANKA", "designation": "ASST PROFESSOR" },
        { "sNo": "23", "name": "Ms. AVVARI BHARGAVI", "designation": "ASST PROFESSOR" },
        { "sNo": "24", "name": "Ms. YEDDULAMALA BHANU PRIYA", "designation": "ASST PROFESSOR" },
        { "sNo": "25", "name": "Mr. GUVVA ASHOK KUMAR", "designation": "ASST PROFESSOR" },
        { "sNo": "26", "name": "Mrs. M LALITHA MEGHANA", "designation": "ASST PROFESSOR" },
        { "sNo": "27", "name": "Ms. MEHREEN SHAIK ZEBA", "designation": "ASST PROFESSOR" },
        { "sNo": "28", "name": "Ms. TABASSUM SHAIK KHUDSIA", "designation": "ASST PROFESSOR" }
    ];

    const labs = [
        "Electronic Devices and Circuits",
        "Electronic Circuit Analysis and Design",
        "Integrated Circuit Applications",
        "Microwave and Optical Communications",
        "Analog and Digital Communications",
        "VLSI",
        "Digital Signal Processing",
        "Microprocessors and Microcontrollers",
        "Embedded Systems",
        "IOT & Robotics"
    ];

    return (
        <Layout>
            <Helmet>
                <title>Electronics & Communication Engineering | {collegeInfo.shortName}</title>
                <meta name="description" content="Department of Electronics & Communication Engineering at GPCET." />
            </Helmet>

            {/* Banner */}
            <section
                className="relative h-64 md:h-72 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />
                <div className="college-container relative z-10 h-full flex items-center">
                    <div>
                        <div className="flex gap-2 mb-2">
                            <Badge variant="outline" className="text-primary-foreground border-primary-foreground">NAAC A</Badge>
                            <Badge variant="outline" className="text-primary-foreground border-primary-foreground">NBA Accredited</Badge>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Electronics & Communication Engineering</h1>
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
                            <TabsTrigger value="bos">Board of Studies</TabsTrigger>
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
                                                <span className="text-muted-foreground">Intake</span>
                                                <span className="font-semibold">180</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-muted-foreground">Head of Dept</span>
                                                <span className="font-semibold text-right">Dr. T. Tirupal</span>
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
                                <a href="https://www.gpcet.ac.in/events/" target="_blank" rel="noopener noreferrer" className="block group">
                                    <Card className="h-full hover:border-primary transition-colors">
                                        <CardHeader className="text-center">
                                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                <Calendar className="w-8 h-8" />
                                            </div>
                                            <CardTitle>Department Events</CardTitle>
                                            <CardDescription>Workshops and Guest Lectures</CardDescription>
                                        </CardHeader>
                                    </Card>
                                </a>
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
                                            <CardTitle className="text-base">{lab}</CardTitle>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="resources">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-serif text-primary">Online Resources</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                                        <div className="p-2 bg-primary/10 rounded-full text-primary">
                                            <ExternalLink className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-primary">Digital Signal Processing</h4>
                                            <p className="text-sm text-muted-foreground mb-2">Video Lectures by Dr. B. Ravi Chandra</p>
                                            <a
                                                href="https://www.youtube.com/playlist?list=PLQuMhFDMSuShHuGAIdnAK35BM92R0lHN2"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-secondary hover:underline inline-flex items-center gap-1"
                                            >
                                                Watch Playlist <ExternalLink className="w-3 h-3" />
                                            </a>
                                        </div>
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

export default DepartmentECE;
