import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { collegeInfo } from "@/data/collegeData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Award, Briefcase, Zap, ExternalLink, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admissions = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        toast({
            title: "Enquiry Submitted",
            description: "Our admissions team will contact you shortly.",
        });
    };

    const highLights = [
        {
            icon: Award,
            title: "Autonomous & Accredited",
            description: "NAAC 'A' Grade (valid till 2029) and NBA Accredited programs."
        },
        {
            icon: Briefcase,
            title: "Excellent Placements",
            description: "600+ placements in last 5 years with top MNCs like Wipro and TCS."
        },
        {
            icon: CheckCircle,
            title: "100% Admissions",
            description: "A top choice for students in Andhra Pradesh with consistent full enrollment."
        },
        {
            icon: Zap,
            title: "Research & Innovation",
            description: "15 Patents, 650+ Publications and Rs. 1.15 Cr in research grants."
        }
    ];

    return (
        <Layout>
            <Helmet>
                <title>Admissions | {collegeInfo.shortName}</title>
                <meta name="description" content={`Admission enquiry for ${collegeInfo.name}. Apply for B.Tech, M.Tech, and MBA programs.`} />
            </Helmet>

            {/* Banner */}
            <section
                className="relative h-64 md:h-80 bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1627556944960-9372bfa05e8e?w=1920&q=80')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/80" />
                <div className="college-container relative z-10 h-full flex items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">Admissions</h1>
                        <p className="text-primary-foreground/80 text-lg">Join one of the premier engineering institutes in the region</p>
                    </div>
                </div>
            </section>

            <section className="college-section bg-background">
                <div className="college-container">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Left Column: Information & Highlights */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Why Choose GPCET?</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                    G. Pullaiah College of Engineering and Technology is synonymous with quality education.
                                    With state-of-the-art infrastructure, experienced faculty, and a focus on holistic development,
                                    we prepare students to become industry-ready professionals.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {highLights.map((item) => (
                                        <div key={item.title} className="bg-muted/30 p-4 rounded-lg border border-border">
                                            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                                                <item.icon className="w-5 h-5 text-accent" />
                                            </div>
                                            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
                                <h3 className="font-semibold text-lg text-primary mb-3">Admission Guidelines</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex gap-2">
                                        <span className="font-bold text-primary">Category A:</span>
                                        70% seats filled via EAPCET/PGECET/ICET counselling.
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-primary">Category B:</span>
                                        30% seats filled by Management/Merit quota.
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-primary">Lateral Entry:</span>
                                        10% seats for diploma holders via ECET.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Admission Form */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-border">
                            <div className="mb-6">
                                <h2 className="text-2xl font-serif font-bold text-primary">Admission Enquiry Form</h2>
                                <p className="text-muted-foreground">Fill in your details and we will get back to you.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-1.5">First Name</label>
                                        <Input placeholder="John" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-1.5">Last Name</label>
                                        <Input placeholder="Doe" required />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                                    <Input type="email" placeholder="john@example.com" required />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                                    <Input type="tel" placeholder="+91 98765 43210" required />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1.5">Course Interested In</label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Course" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="btech-cse">B.Tech - CSE</SelectItem>
                                            <SelectItem value="btech-ece">B.Tech - ECE</SelectItem>
                                            <SelectItem value="btech-eee">B.Tech - EEE</SelectItem>
                                            <SelectItem value="btech-civil">B.Tech - Civil</SelectItem>
                                            <SelectItem value="btech-mech">B.Tech - Mech</SelectItem>
                                            <SelectItem value="btech-ai">B.Tech - CSE (AI & ML)</SelectItem>
                                            <SelectItem value="mtech">M.Tech</SelectItem>
                                            <SelectItem value="mba">MBA</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1.5">Admission Category</label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="cat-a">Category A (Convener Quota)</SelectItem>
                                            <SelectItem value="cat-b">Category B (Management Quota)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1.5">Message / Query</label>
                                    <Textarea placeholder="Any specific questions about fee structure or hostel?" rows={3} />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-11 text-lg font-semibold"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : (
                                        <>
                                            Submit Enquiry <Send className="ml-2 w-4 h-4" />
                                        </>
                                    )}
                                </Button>

                                <p className="text-xs text-center text-muted-foreground mt-4">
                                    For immediate assistance, call <strong>{collegeInfo.phone}</strong>
                                </p>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Admissions;
