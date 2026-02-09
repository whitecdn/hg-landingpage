"use client";

import { FadeIn, SlideIn } from "./ui/fade-in";
import { Map, Slack, LayoutDashboard, Trophy, Rocket } from "lucide-react";

const steps = [
    {
        icon: <Map className="w-6 h-6 text-black" />,
        title: "Meet with VP of Ops & RevMan",
        description: "Roadmap a proven process to hit your goals faster. We audit where you are and map out exactly how to get to where you want to go."
    },
    {
        icon: <Slack className="w-6 h-6 text-black" />,
        title: "Get into Slack",
        description: "Join the conversation in channels focused on Homeowner Acquisitions, Portfolio Acquisitions, Cleaning Ops, Accounting, and more."
    },
    {
        icon: <LayoutDashboard className="w-6 h-6 text-black" />,
        title: "Connect CEO Dashboard",
        description: "Hook up your PMS. See all metrics, leading indicators, and KPIs. Visualize the community leaderboards."
    },
    {
        icon: <Rocket className="w-6 h-6 text-black" />,
        title: "Start Executing",
        description: "See who is ranked #1 in specific metrics so you know exactly who to reach out to for advice."
    },
    {
        icon: <Trophy className="w-6 h-6 text-black" />,
        title: "Accountability",
        description: "Our team has full visibility to ensure you are on track. We don't let you fail."
    }
];

export function SectionHowItWorks() {
    return (
        <section className="py-24 px-4 relative">
            {/* Top Glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />

            <div className="max-w-5xl mx-auto">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">How it works.</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Three simple steps to go from overwhelmed operator to scalable CEO.
                        </p>
                    </div>
                </FadeIn>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[27px] top-0 bottom-0 w-1 bg-white/10 md:left-1/2 md:-ml-0.5" />

                    {steps.map((step, idx) => (
                        <div key={idx} className={`relative flex items-center gap-8 mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse text-left md:text-left' : 'md:flex-row text-left md:text-right'}`}>

                            {/* Mobile Icon Blob */}
                            <div className="flex-shrink-0 z-10 md:hidden">
                                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center border-4 border-black">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Spacer for Desktop Centering */}
                            <div className="hidden md:block w-1/2" />

                            {/* Desktop Center Icon */}
                            <div className="absolute left-1/2 -ml-7 hidden md:flex w-14 h-14 rounded-full bg-accent items-center justify-center border-4 border-black z-10">
                                {step.icon}
                            </div>

                            <div className="w-full md:w-1/2">
                                <SlideIn direction={idx % 2 === 0 ? "left" : "right"} delay={idx * 0.1}>
                                    <div className="p-6 glass rounded-2xl border border-white/10 hover:border-accent/40 transition-colors">
                                        <div className="text-accent text-sm font-bold mb-2 uppercase tracking-widest">Step {idx + 1}</div>
                                        <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>
                                </SlideIn>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />
        </section>
    );
}
