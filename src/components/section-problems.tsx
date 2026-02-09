"use client";

import { FadeIn } from "./ui/fade-in";
import { TrendingDown, Anchor, Shuffle, Target } from "lucide-react";

const problems = [
    {
        icon: <TrendingDown className="w-8 h-8 text-accent" />,
        title: "Slow, inconsistent owner growth",
        description: "Growth based on luck is hard to predict, hard to sell, and impossible to step away from."
    },
    {
        icon: <Anchor className="w-8 h-8 text-accent" />,
        title: "Stuck in the business",
        description: "Transitioning from Property Manager to CEO is painful. You can't ask your parents or friends how to scale a tech-enabled STR company."
    },
    {
        icon: <Shuffle className="w-8 h-8 text-accent" />,
        title: "So many roles, so little time",
        description: "You're wearing too many hats. Operations, Revenue Management, Marketing, HR, Accounting..."
    },
    {
        icon: <Target className="w-8 h-8 text-accent" />,
        title: "Need to be the small fish",
        description: "To grow, you need to hire people smarter than you and be in a room where you're surrounded by larger, successful operators."
    }
];

export function SectionProblems() {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Background with subtle red gradient for "The Struggle" */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-accent/5 to-black/40 pointer-events-none" />

            {/* Top Glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">The struggle is real.</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Most VRMs hit a ceiling because the playbook that got them to 50 units won't get them to 500.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {problems.map((problem, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                                <div className="mb-6 p-4 rounded-2xl bg-black/50 w-fit border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                    {problem.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Bottom Separator & Glow */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />
        </section>
    );
}
