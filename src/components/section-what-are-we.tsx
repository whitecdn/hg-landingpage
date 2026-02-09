"use client";

import { FadeIn } from "./ui/fade-in";
import { ArrowRight } from "lucide-react";

export function SectionWhatAreWe() {
    return (
        <section id="execution" className="py-24 px-4 bg-black/20 relative overflow-hidden">
            {/* Top Glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />

            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                        <div className="md:sticky md:top-24">
                            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">The Mission</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Not a mastermind. <br /> Not a course.</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                HostGenius is a private network of professional vacation rental operators. We share data, resources, and buy together to lower costs.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-accent font-medium group cursor-pointer hover:underline">
                                <span>See how it works</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-default">
                                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors">Private Network</h3>
                            </div>

                            <div className="h-px w-full bg-white/10" />

                            <div className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-default">
                                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3"><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors">Proprietary Data</h3>
                            </div>

                            <div className="h-px w-full bg-white/10" />

                            <div className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-default">
                                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /></svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors">Purchase Power</h3>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />
        </section>
    );
}
