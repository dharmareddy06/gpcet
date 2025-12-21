import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { mbaData } from "@/data/mbaData";
import { collegeInfo } from "@/data/collegeData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Target, BookOpen, ExternalLink, Calendar, GraduationCap } from "lucide-react";

const DepartmentMBA = () => {
    return (
        <Layout>
            <Helmet>
                <title>Department of MBA | {collegeInfo.shortName}</title>
                <meta name="description" content="Department of Management Studies (MBA) at GPCET - Developing future corporate leaders." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1554224155-273643efdb86?w=1920&q=80')` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />
                <div className="college-container relative z-10 h-full flex items-center">
                    <div className="text-white">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Department of Management Studies</h1>
                        <p className="text-xl opacity-90">Developing Leaders for the Global Corporate World</p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="college-section bg-background">
                <div className="college-container">
                    <Tabs defaultValue="home" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto mb-8 bg-muted p-1">
                            <TabsTrigger value="home" className="py-2">Home</TabsTrigger>
                            <TabsTrigger value="vision" className="py-2">Vision & Mission</TabsTrigger>
                            <TabsTrigger value="faculty" className="py-2">Faculty</TabsTrigger>
                            <TabsTrigger value="bos" className="py-2">Board of Studies</TabsTrigger>
                            <TabsTrigger value="activities" className="py-2">Activities</TabsTrigger>
                        </TabsList>

                        {/* Home Tab */}
                        <TabsContent value="home" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-2xl font-serif text-primary">
                                        <BookOpen className="w-6 h-6" /> About Department
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        {mbaData.about}
                                    </p>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Vision & Mission Tab */}
                        <TabsContent value="vision" className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <Card className="bg-primary/5 border-primary/20">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-primary">
                                            <Target className="w-6 h-6" /> Vision
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg italic font-medium text-foreground/80">"{mbaData.vision}"</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-secondary/5 border-secondary/20">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-secondary">
                                            <Target className="w-6 h-6" /> Mission
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg italic font-medium text-foreground/80">"{mbaData.mission}"</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Program Educational Objectives (PEOs)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {mbaData.peos.map((peo, index) => (
                                            <li key={index} className="flex gap-3 text-muted-foreground">
                                                <span className="font-bold text-primary shrink-0">PEO {index + 1}:</span>
                                                {peo}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Program Outcomes (POs)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {mbaData.pos.map((po, index) => (
                                            <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                                                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                                                <span className="text-sm font-medium">{po}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Faculty Tab */}
                        <TabsContent value="faculty">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-2xl font-serif text-primary">
                                        <Users className="w-6 h-6" /> Faculty Members
                                    </CardTitle>
                                    <CardDescription>Our experienced faculty team</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                        {mbaData.faculty.map((member, index) => (
                                            <div key={index} className="flex items-start gap-4 p-4 rounded-lg border hover:shadow-md transition-shadow">
                                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                                    <Users className="w-6 h-6 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                                                    <span className="inline-block px-2 py-1 mt-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                                                        {member.designation}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Board of Studies Tab */}
                        <TabsContent value="bos">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-2xl font-serif text-primary">
                                        <GraduationCap className="w-6 h-6" /> Board of Studies
                                    </CardTitle>
                                    <CardDescription>Members of the Board of Studies</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm text-left">
                                            <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                                                <tr>
                                                    <th className="px-6 py-3">Name</th>
                                                    <th className="px-6 py-3">Designation</th>
                                                    <th className="px-6 py-3">Role</th>
                                                    <th className="px-6 py-3">Affiliation</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {mbaData.bos.map((member, index) => (
                                                    <tr key={index} className="bg-background border-b hover:bg-muted/50">
                                                        <td className="px-6 py-4 font-medium text-foreground">{member.name}</td>
                                                        <td className="px-6 py-4">{member.designation}</td>
                                                        <td className="px-6 py-4">
                                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${member.role.includes("Chairman") ? "bg-primary/20 text-primary" :
                                                                    member.role.includes("External") ? "bg-secondary/20 text-secondary" :
                                                                        "bg-muted text-muted-foreground"
                                                                }`}>
                                                                {member.role}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4">{member.affiliation || "-"}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Activities Tab */}
                        <TabsContent value="activities">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-2xl font-serif text-primary">
                                        <Calendar className="w-6 h-6" /> Student Activities & Events
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {mbaData.activities.map((activity, index) => (
                                            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border-l-4 border-accent">
                                                <div className="flex-1">
                                                    <p className="font-medium text-lg">{activity}</p>
                                                </div>
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

export default DepartmentMBA;
