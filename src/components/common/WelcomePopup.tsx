import { useState, useEffect } from 'react';
import { X, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { collegeInfo } from '@/data/collegeData';

const WelcomePopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after a short delay for better UX
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <div className="relative w-full max-w-lg bg-background rounded-l shadow-2xl border border-border animate-in zoom-in-95 duration-300">

                {/* Close Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-4 top-4 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                    aria-label="Close welcome message"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="p-8 text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                        <Bell className="w-8 h-8" />
                    </div>

                    <h2 className="text-2xl font-serif font-bold text-primary">
                        Welcome to {collegeInfo.shortName}
                    </h2>

                    <div className="space-y-2 text-muted-foreground">
                        <p>
                            We are delighted to have you here. Explore our programs, campus life, and latest news.
                        </p>
                        <div className="bg-accent/10 border border-accent/20 rounded p-4 mt-4 text-sm text-foreground">
                            <span className="font-bold text-accent">Latest Update:</span> GPCET has been re-accredited by NAAC with 'A' grade till 2029!
                        </div>
                    </div>

                    <div className="pt-4 flex justify-center gap-4">
                        <Button onClick={() => setIsVisible(false)} className="w-full sm:w-auto">
                            Continue to Website
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePopup;
