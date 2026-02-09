"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { useState } from "react";
import { SubmissionModal } from "@/components/submission-modal";

export function SectionCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="py-32 px-4 text-center relative overflow-hidden">
                {/* Top Glow */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />

                <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10"></div>

                <FadeIn>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">Book a call with us.</h2>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            If you don't think this will change your life, we don't want to talk again.
                        </p>
                        <p className="text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto font-light">
                            HG is not a community to come talk about what you had for dinner last night - step into the room with the colleagues you wish you had, all funded by the big-tech companies because they see how much faster we grow when we team up.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-12 py-5 bg-accent text-black text-xl font-bold rounded-full hover:shadow-[0_0_40px_-5px_var(--color-accent)] hover:scale-105 transition-all duration-300 active:scale-95"
                        >
                            Apply to Join the Network
                        </button>
                    </div>
                </FadeIn>
            </section>

            <SubmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
