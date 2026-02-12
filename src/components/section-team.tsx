"use client";

import { FadeIn } from "./ui/fade-in";
import { ArrowRight } from "lucide-react";

export function SectionTeam() {
    return (
        <section className="py-32 px-4 relative overflow-hidden bg-[#0a0a0a]">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <FadeIn>
                    <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-center">
                        {/* Left: Typography & Content */}
                        <div className="md:w-1/2 relative z-10">
                            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-8 block">The Community</span>
                            <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 leading-[0.85] tracking-tighter">
                                Who We <br />
                                <span className="text-white/30 italic font-serif">Are.</span>
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed font-light mb-12 max-w-lg">
                                We're a group of vacation rental managers that are looking to build and scale our companies to provide long-term wealth. And we couldn't do it without the collective intelligence we have by coming together.
                            </p>


                        </div>

                        {/* Right: Abstract Magazine Graphic */}
                        <div className="md:w-1/2 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent blur-[100px] rounded-full" />

                            <div className="relative grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-12">
                                    <div className="aspect-[4/3] bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative group">
                                        <img src="/dinner-party.jpg" alt="Team Dinner" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                    <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative group">
                                        <img src="/social.jpg" alt="Community Social" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative group">
                                        <img src="/team-meeting.jpg" alt="Strategy Session" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" />
                                    </div>
                                    <div className="aspect-[4/3] bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative group">
                                        <img src="/outdoor-group.jpg" alt="Outdoor Group" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
