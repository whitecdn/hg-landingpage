"use client";

import { useState } from "react";
import { FadeIn } from "./ui/fade-in";
import { LayoutDashboard, Users, UserCog, TrendingUp, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
    {
        icon: <LayoutDashboard className="w-6 h-6 text-accent" />,
        title: "CEO Dashboard",
        description: "We have all the numbers and data on your business. See exactly where you stand against the community in real-time."
    },
    {
        icon: <Users className="w-6 h-6 text-accent" />,
        title: "Collective Intelligence",
        description: "Get insights you can't get anywhere else. See who is #1 for each metric and reach out to them directly for advice."
    },
    {
        icon: <UserCog className="w-6 h-6 text-accent" />,
        title: "VP of Ops & RevMan",
        description: "On-staff experts whose sole objective is to read your data and help you make decisions to hit your goals."
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-accent" />,
        title: "Economies of Scale",
        description: "Our size allows us to fund the entire group through margins on existing OpEx, making this sustainable for everyone."
    }
];

export function SectionHowWeHelp() {
    const [videoUrl, setVideoUrl] = useState<string | null>(null);

    return (
        <section className="py-32 px-4 relative">
            {/* Visual Separator / Bridge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/50 blur-sm" />

            <div className="absolute inset-0 bg-accent/[0.03] skew-y-3 transform origin-top-left -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="order-1">
                        <FadeIn>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">How we help you hit your goals.</h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                We don't just give you advice; we give you the data, the people, and the leverage to execute.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div
                                    onClick={() => setVideoUrl("https://www.loom.com/embed/87c953b33e08401391ead85add3eb99d")}
                                    className="flex flex-col gap-3 group cursor-pointer"
                                >
                                    <div className="relative aspect-video bg-black/40 rounded-xl border border-white/10 overflow-hidden hover:border-accent/50 transition-all">
                                        <img
                                            src="https://cdn.loom.com/sessions/thumbnails/87c953b33e08401391ead85add3eb99d-484b7ba76a46a228.gif"
                                            alt="The data that helps you scale"
                                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10">
                                            <div className="w-12 h-12 rounded-full bg-accent/90 text-black flex items-center justify-center shadow-lg">
                                                <Play size={20} fill="currentColor" className="ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium text-white/90 text-center group-hover:text-accent transition-colors">The data that helps you scale</p>
                                </div>

                                <div
                                    onClick={() => setVideoUrl("https://www.loom.com/embed/7fc871dafa64482a9084b5bc94f9f587")}
                                    className="flex flex-col gap-3 group cursor-pointer"
                                >
                                    <div className="relative aspect-video bg-black/40 rounded-xl border border-white/10 overflow-hidden hover:border-accent/50 transition-all">
                                        <img
                                            src="https://cdn.loom.com/sessions/thumbnails/7fc871dafa64482a9084b5bc94f9f587-817829d54f986424.gif"
                                            alt="How the community collabs"
                                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10">
                                            <div className="w-12 h-12 rounded-full bg-accent/90 text-black flex items-center justify-center shadow-lg">
                                                <Play size={20} fill="currentColor" className="ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium text-white/90 text-center group-hover:text-accent transition-colors">How the community collabs</p>
                                </div>
                            </div>

                        </FadeIn>
                    </div>

                    <div className="order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {solutions.map((item, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="p-6 glass rounded-2xl border border-white/10 hover:-translate-y-1 transition-transform duration-300 shadow-lg">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-accent/10 rounded-lg">
                                            {item.icon}
                                        </div>
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                </div>
            </div >

            <AnimatePresence>
                {videoUrl && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                        onClick={() => setVideoUrl(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setVideoUrl(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition"
                            >
                                <X size={24} />
                            </button>

                            <iframe
                                src={videoUrl}
                                frameBorder="0"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />
        </section >
    );
}
