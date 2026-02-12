"use client";

import { FadeIn } from "./ui/fade-in";
import { ArrowRight, Users, BarChart3, Scale } from "lucide-react";

export function SectionWhatAreWe() {
    return (
        <section id="mission" className="py-24 md:py-32 px-4 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-16 items-start">
                    <div className="lg:w-1/2 sticky top-32">
                        <FadeIn once={false}>
                            <span className="block text-accent text-sm tracking-[0.2em] uppercase mb-8 font-medium">The Mission</span>
                            <h2 className="text-6xl md:text-8xl font-bold mb-10 text-white leading-[0.85] tracking-tighter">
                                Not a <br /> mastermind. <br />
                                <span className="text-white/40">Not a course.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-lg">
                                HostGenius is a private network of professional vacation rental operators. We share data, resources, and buy together to lower costs.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="lg:w-1/2 flex flex-col lg:mt-32">
                        <FadeIn delay={0.4} once={false}>
                            {/* Block 1: Network (Full Width) */}
                            <div className="group border border-white/20 bg-black hover:bg-white hover:text-black transition-colors duration-300 p-8 md:p-12 mb-8">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-16 h-16 bg-white text-black flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                        <Users size={28} strokeWidth={1} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">Private Network</h3>
                                        <p className="text-lg text-muted-foreground font-light leading-relaxed group-hover:text-black transition-colors max-w-lg">
                                            Connect with vetted operators who are scaling real businesses. No gurus, just operators.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Block 2 & 3: Split Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Proprietary Data */}
                                <div className="group border border-white/20 bg-black hover:bg-white hover:text-black transition-colors duration-300 p-8">
                                    <div className="flex flex-col gap-6 h-full justify-between">
                                        <div className="w-12 h-12 bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                            <BarChart3 size={20} strokeWidth={1} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-4">Proprietary Data</h3>
                                            <p className="text-sm text-muted-foreground font-light leading-relaxed group-hover:text-black transition-colors">
                                                Benchmark your performance against the top 1% of the industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Purchase Power */}
                                <div className="group border border-white/20 bg-black hover:bg-white hover:text-black transition-colors duration-300 p-8">
                                    <div className="flex flex-col gap-6 h-full justify-between">
                                        <div className="w-12 h-12 bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                            <Scale size={20} strokeWidth={1} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-4">Purchase Power</h3>
                                            <p className="text-sm text-muted-foreground font-light leading-relaxed group-hover:text-black transition-colors">
                                                Leverage our collective size to negotiate enterprise-level deals.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
