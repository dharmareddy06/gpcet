import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { collegeInfo } from "@/data/collegeData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Atom, ExternalLink } from "lucide-react";

const DepartmentEEE = () => {
    const [activeTab, setActiveTab] = useState("overview");

    // Scraped Data
    const about = {
        vision: "To produce professionally competent engineers in the field of Electrical and Electronics Engineering for societal empowerment.",
        mission: "The department trains the students to achieve academic excellence through active learning methods by promoting the research and development activities with professional and ethical standards.",
        description: "The Department of Electrical and Electronics Engineering (EEE) was started in the year 2007 with an intake of 60. The department is constantly catering to the needs of the industry by training students to make valuable contribution and is constantly striving hard to produce qualified technocrats who can face the challenges of the real world. Quality education is being imparted both at UG level and also at PG Level. The infrastructure and lab facilities of the department are being upgraded from time to time thus providing ample opportunity for the students to enrich themselves. As per the curriculum laid down by the affiliating university important areas such as generation, transmission and distribution of electrical power, microprocessor systems etc. are included in the prescribed syllabus."
    };

    const peos = [
        "PEO 1: Apply the principles of basic engineering sciences in performing professional tasks in Electrical and Electronics Engineering and to develop awareness on the issues of societal concerns.",
        "PEO 2: Analyze and design Electrical and Electronics Engineering projects considering environmental and socio-economic impacts.",
        "PEO 3: Develop team spirit and leadership skills for successful completion and management of projects.",
        "PEO 4: To pursue lifelong learning to meet societal and professional challenges."
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
        { name: "Prof. P. Sujatha", designation: "Director, Foreign Affairs & Alumni Matters, JNTUA", role: "External Member" },
        { name: "Dr. G. Panduranga Reddy", designation: "Head, Dept. of EEE, GPCET", role: "Chairman BOS" },
        { name: "Dr. Chintham Venkaiah", designation: "Professor", role: "External Member" },
    ];

    const facultyList = [
        { "sNo": "1", "name": "Dr. COPPISETTY SRINIVASA RAO", "designation": "PROFESSOR & PRINCIPAL" },
        { "sNo": "2", "name": "Dr. G PANDURANGA REDDY", "designation": "PROFESSOR & HEAD" },
        { "sNo": "3", "name": "Dr. MALLU RAMA PRASAD RAMAPRASAD", "designation": "PROFESSOR" },
        { "sNo": "4", "name": "Dr. SURESHKUMAR ASADI", "designation": "ASSOCIATE PROFESSOR" },
        { "sNo": "5", "name": "Dr. KARANAM DEEPAK", "designation": "ASSOCIATE PROFESSOR" },
        { "sNo": "6", "name": "Mr. YERRAGOLLA HAZARATHAIAH", "designation": "ASST PROFESSOR" },
        { "sNo": "7", "name": "Mr. NISHANTH THALLURI", "designation": "ASST PROFESSOR" },
        { "sNo": "8", "name": "Mr. T UMA CHANDRAKANTH", "designation": "ASST PROFESSOR" },
        { "sNo": "9", "name": "Mr. MISALA VENKATESWARLU", "designation": "ASST PROFESSOR" },
        { "sNo": "10", "name": "Mr. S SANKARA PRASAD", "designation": "ASST PROFESSOR" }
    ];

    const labs = [
        "Electrical Machines Lab",
        "Power Systems Lab",
        "Control Systems Lab",
        "Electrical Measurements Lab",
        "Power Electronics Lab",
        "Electrical Circuits Lab",
        "Simulation Lab"
    ];

    return (
        <Layout>
            <Helmet>
                <title>Electrical & Electronics Engineering | {collegeInfo.shortName}</title>
                <meta name="description" content="Department of Electrical & Electronics Engineering at GPCET." />
            </Helmet>

            {/* Banner */}
            <section
                className="relative h-64 md:h-72 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />
                <div className="college-container relative z-10 h-full flex items-center">
                    <div>
                        <div className="flex gap-2 mb-2">
                            <Badge variant="outline" className="text-primary-foreground border-primary-foreground">NAAC A</Badge>
                            <Badge variant="outline" className="text-primary-foreground border-primary-foreground">NBA Accredited</Badge>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Electrical & Electronics Engineering</h1>
                        <p className="text-primary-foreground/80 text-lg">Powering the Future</p>
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
                                                <span className="font-semibold">2007</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b pb-2">
                                                <span className="text-muted-foreground">Intake</span>
                                                <span className="font-semibold">60</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-muted-foreground">Head of Dept</span>
                                                <span className="font-semibold text-right">Dr. G. Panduranga Reddy</span>
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
                                <a href="https://www.gpcet.ac.in/events-4/" target="_blank" rel="noopener noreferrer" className="block group">
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

                    </Tabs>
                </div>
            </section>
        </Layout>
    );
};

export default DepartmentEEE;
