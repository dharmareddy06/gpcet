import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { collegeInfo } from "@/data/collegeData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Lock, ArrowRight, ClipboardCheck, Users, Upload, BookOpen, Calendar, PieChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FacultyLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);
        toast({
            title: "Login Functionality",
            description: "This is a demo portal. Login integration would go here.",
        });
    };

    const portalFeatures = [
        {
            icon: ClipboardCheck,
            title: "Attendance Management",
            description: "Mark and update daily student attendance records digitally."
        },
        {
            icon: Upload,
            title: "Marks Entry",
            description: "Upload internal and external exam marks securely."
        },
        {
            icon: BookOpen,
            title: "Course File",
            description: "Manage lesson plans, lecture notes, and assignments."
        },
        {
            icon: Users,
            title: "Student Mentoring",
            description: "Track mentee progress and counseling sessions."
        },
        {
            icon: Calendar,
            title: "Leave Management",
            description: "Apply for leaves and check leave balance online."
        },
        {
            icon: PieChart,
            title: "Reports & Analytics",
            description: "Generate academic performance reports for analysis."
        }
    ];

    return (
        <Layout>
            <Helmet>
                <title>Faculty Portal | {collegeInfo.shortName}</title>
                <meta name="description" content={`Faculty Login Portal for ${collegeInfo.name}. Manage attendance, marks, and academic resources.`} />
            </Helmet>

            {/* Banner */}
            <section
                className="relative h-48 md:h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544531696-6052733d5966?w=1920&q=80')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />
                <div className="college-container relative z-10 h-full flex items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Faculty Portal</h1>
                        <p className="text-primary-foreground/80 text-lg">Academic Administration System</p>
                    </div>
                </div>
            </section>

            <section className="college-section bg-background">
                <div className="college-container">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Login Form Column */}
                        <div className="bg-muted/30 p-8 rounded-xl border border-border">
                            <div className="mb-8">
                                <h2 className="text-2xl font-serif font-bold text-primary mb-2">Faculty Login</h2>
                                <p className="text-muted-foreground">Please sign in with your Faculty ID and Password.</p>
                            </div>

                            <form onSubmit={handleLogin} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Faculty ID</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                        <Input
                                            placeholder="Ex: GPCET-FAC-001"
                                            className="pl-10"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            className="pl-10"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                                        <span>Remember me</span>
                                    </label>
                                    <a href="#" className="text-primary hover:underline">Forgot Password?</a>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 h-11 text-lg"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Signing in..." : (
                                        <>
                                            Sign In <ArrowRight className="ml-2 w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </form>

                            <div className="mt-8 pt-6 border-t border-border text-center">
                                <p className="text-sm text-muted-foreground">
                                    New Faculty Member? <br />
                                    Please contact the <a href="/contact" className="text-primary hover:underline">Management</a> to collect your login credentials.
                                </p>
                            </div>
                        </div>

                        {/* Portal Features Column */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Portal Services</h2>
                                <p className="text-muted-foreground text-lg">
                                    A comprehensive platform to streamline academic and administrative tasks for faculty members.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {portalFeatures.map((feature) => (
                                    <div key={feature.title} className="flex gap-4 items-start p-4 hover:bg-muted/50 rounded-lg transition-colors border border-transparent hover:border-border">
                                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                            <feature.icon className="w-5 h-5 text-secondary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                                <h3 className="font-semibold text-foreground mb-2">Technical Support</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Facing issues with mark entry or attendance uploads? Reach out to our technical support team.
                                </p>
                                <div className="flex gap-4">
                                    <Button variant="outline" className="text-sm h-9">
                                        Raise Ticket
                                    </Button>
                                    <Button variant="ghost" className="text-sm h-9">
                                        View Knowledge Base
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default FacultyLogin;
