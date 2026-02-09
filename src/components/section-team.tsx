"use client";

import { FadeIn } from "./ui/fade-in";
import Image from "next/image";

export function SectionTeam() {
    return (
        <section className="py-24 px-4 relative">
            {/* Top Glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />

            <div className="max-w-6xl mx-auto text-center">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Who We Are</h2>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light mb-16">
                        We're a group of vacation rental managers that are looking to build and scale our companies to provide long-term wealth. And we couldn't do it without the collective intelligence we have by coming together.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        {/* Image 1: Outdoor Team */}
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 group rotate-[-3deg] hover:rotate-0 transition-all duration-500 hover:z-10 hover:scale-105">
                            <img
                                src="/team.jpg"
                                alt="The HostGenius Team Outdoors"
                                className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </div>

                        {/* Image 2: Meeting Room */}
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 group rotate-[2deg] hover:rotate-0 transition-all duration-500 hover:z-10 hover:scale-105 translate-y-4 md:translate-y-8">
                            <img
                                src="/team-meeting.jpg"
                                alt="The HostGenius Team Meeting"
                                className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </div>

                        {/* Image 3: Social / Fun */}
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 group rotate-[-2deg] hover:rotate-0 transition-all duration-500 hover:z-10 hover:scale-105">
                            <img
                                src="/social.jpg"
                                alt="The HostGenius Team Social"
                                className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />
        </section>
    );
}
