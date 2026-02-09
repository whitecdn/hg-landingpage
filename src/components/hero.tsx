"use client";

import { Play, ArrowRight, X } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SubmissionModal } from "@/components/submission-modal";

export function Hero() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scrollToFeatures = () => {
        const element = document.getElementById('execution');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"
                    />
                </div>

                <FadeIn delay={0.2}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm mb-8 text-accent/90 hover:bg-white/10 hover:border-accent/20 transition-all cursor-default shadow-[0_0_15px_-5px_var(--color-accent)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        <span className="font-medium">43 Members and Growing</span>
                    </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-6xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 mb-8 mx-auto leading-[1.05] drop-shadow-2xl">
                        Built by & for VRM who are tired of <span className="text-accent inline-block relative whitespace-nowrap">
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                            doing this alone
                        </span>.
                    </h1>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        A private network, CEO dashboard, and homeowner CRM. <br className="hidden md:block" /> Run your business like a <span className="text-white font-medium">tech startup</span>.
                    </p>
                </FadeIn>

                <FadeIn delay={0.5}>
                    <div className="flex flex-col sm:flex-row gap-5 items-center justify-center relative z-20">
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 flex items-center gap-3 active:scale-95"
                        >
                            I have 2 mins
                            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition duration-300">
                                <Play size={12} fill="currentColor" className="ml-0.5" />
                            </div>
                        </button>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group px-8 py-4 glass rounded-full font-medium text-lg text-white/90 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-3 active:scale-95"
                        >
                            Apply Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
                        </button>
                    </div>
                </FadeIn>
            </section>

            <SubmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition"
                            >
                                <X size={24} />
                            </button>

                            <iframe
                                src="https://www.loom.com/embed/674a96221b294bca84c920f4f8588504"
                                frameBorder="0"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Glow Removed */}
        </>
    );
}
