"use client";

import { useEffect, useState, useRef } from "react";
import { FadeIn } from "./ui/fade-in";
import { TestimonialsCarousel } from "./testimonials-carousel";
import { motion, useInView } from "framer-motion";

// =============================================================================
// DATA (Source of Truth from Brief)
// =============================================================================

const HERO_STATS = [
    { value: 1200, suffix: "+", label: "Properties Managed" },
    { value: 42, prefix: "~", label: "Market Partners" },
    { value: 5, suffix: " Yrs", label: "Avg Experience" },
    { value: 7, suffix: " FTE", label: "Team Strength" },
];

const GROWTH_STAGES = [
    { label: "Boutique", range: "1–20 Units", pct: 32.5, desc: "The agile perfectionists" },
    { label: "Emerging Pro", range: "21–60 Units", pct: 50, desc: "The scaling powerhouses" },
    { label: "Market Leader", range: "61+ Units", pct: 17.5, desc: "The dominant regional players" },
];

const AMBITION_TARGETS = [
    { target: "30", count: 4 },
    { target: "50", count: 12 },
    { target: "80", count: 16 },
    { target: "100+", count: 10 },
];

const MARKET_SEGMENTS = [
    { label: "Urban & Metro", pct: 55, color: "#14b8a6" }, // Teal
    { label: "Coastal & Beach", pct: 30, color: "#60a5fa" }, // Blue
    { label: "Mountain & Resort", pct: 15, color: "#a78bfa" }, // Purple
];



// =============================================================================
// ANIMATED COUNTER HOOK
// =============================================================================

function useCountUp(target: number, duration: number = 2000, startOnView: boolean = true) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!startOnView || !isInView) return;

        let start = 0;
        const end = target;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * (end - start) + start);
            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, target, duration, startOnView]);

    return { count, ref };
}

// =============================================================================
// A. HUD STATS ROW
// =============================================================================

function HUDStatsRow() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-32">
            {HERO_STATS.map((stat, i) => (
                <HUDStat key={i} {...stat} delay={i * 0.1} />
            ))}
        </div>
    );
}

function HUDStat({ value, prefix, suffix, label, delay }: { value: number; prefix?: string; suffix?: string; label: string; delay: number }) {
    const { count, ref } = useCountUp(value, 2000);

    return (
        <FadeIn delay={delay}>
            <div className="text-center group">
                <div className="mb-3">
                    <span ref={ref} className="text-5xl lg:text-7xl font-extralight tracking-tight text-white tabular-nums">
                        {prefix}{count}{suffix}
                    </span>
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-white/40 group-hover:text-teal-400/80 transition-colors duration-500">
                    {label}
                </div>
            </div>
        </FadeIn>
    );
}

// =============================================================================
// B. TRAJECTORY VISUALIZATION
// =============================================================================

function TrajectorySection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
            {/* Current State */}
            <FadeIn delay={0.2}>
                <div className="p-8 lg:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05]">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                        <h3 className="text-sm uppercase tracking-[0.2em] text-teal-400 font-medium">Current Reality</h3>
                    </div>

                    <p className="text-white/50 text-sm mb-8">Current member portfolio sizes</p>

                    <div className="space-y-6">
                        {GROWTH_STAGES.map((stage, i) => (
                            <div key={i} className="group">
                                <div className="flex justify-between items-baseline mb-3">
                                    <div>
                                        <span className="text-white font-medium">{stage.label}</span>
                                        <span className="text-white/30 text-sm ml-2">({stage.range})</span>
                                    </div>
                                    <span className="text-2xl font-light text-teal-400">{stage.pct}%</span>
                                </div>

                                {/* Sound Wave Style Bar */}
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${stage.pct}%` }}
                                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.15 }}
                                        className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                                    />
                                </div>

                                <p className="text-xs text-white/30 mt-2 group-hover:text-white/50 transition-colors">{stage.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/5">
                        <p className="text-sm text-white/40 italic">
                            The "Emerging Pro" phase is where operational complexity spikes and standard systems break.
                        </p>
                    </div>
                </div>
            </FadeIn>

            {/* Future Ambition */}
            <FadeIn delay={0.4}>
                <div className="p-8 lg:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05]">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.5)]" />
                        <h3 className="text-sm uppercase tracking-[0.2em] text-rose-400 font-medium">Future Ambition</h3>
                    </div>

                    <p className="text-white/50 text-sm mb-8">End-goal portfolio targets</p>

                    <div className="space-y-6">
                        {AMBITION_TARGETS.map((item, i) => {
                            const maxCount = 16;
                            const pct = (item.count / maxCount) * 100;
                            return (
                                <div key={i} className="group">
                                    <div className="flex justify-between items-baseline mb-3">
                                        <span className="text-white/70">{item.target} Listings</span>
                                        <span className="text-lg font-light text-rose-400">{item.count} <span className="text-xs text-white/30">partners</span></span>
                                    </div>

                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${pct}%` }}
                                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 + i * 0.1 }}
                                            className="h-full bg-gradient-to-r from-orange-500 to-rose-500 rounded-full shadow-[0_0_15px_rgba(251,113,133,0.3)]"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-10 pt-6 border-t border-white/5">
                        <p className="text-sm text-white/40 italic">
                            The majority of the network is actively scaling toward mid-to-large cap portfolios.
                        </p>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

// =============================================================================
// C. MARKET FOOTPRINT (Clean & Simple)
// =============================================================================

function MarketRadar() {
    return (
        <FadeIn delay={0.3}>
            <div className="p-6 lg:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] h-full">
                <h3 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-8 text-center">Market Footprint</h3>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                    {/* Clean Donut Chart */}
                    <div className="relative w-56 h-56 flex-shrink-0">
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                            {(() => {
                                let cumulative = 0;
                                return MARKET_SEGMENTS.map((seg, i) => {
                                    const circumference = 2 * Math.PI * 38;
                                    const strokeDash = (seg.pct / 100) * circumference;
                                    const offset = (cumulative / 100) * circumference;
                                    cumulative += seg.pct;

                                    return (
                                        <circle
                                            key={i}
                                            cx="50"
                                            cy="50"
                                            r="38"
                                            fill="none"
                                            stroke={seg.color}
                                            strokeWidth="12"
                                            strokeDasharray={`${strokeDash} ${circumference}`}
                                            strokeDashoffset={-offset}
                                            style={{ filter: `drop-shadow(0 0 6px ${seg.color}40)` }}
                                        />
                                    );
                                });
                            })()}
                            <circle cx="50" cy="50" r="28" fill="#0a0a0a" />
                        </svg>

                        {/* Center Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-light text-white">42</span>
                            <span className="text-[10px] uppercase tracking-widest text-white/40">Partners</span>
                        </div>
                    </div>

                    {/* Clean Legend */}
                    <div className="space-y-6 lg:min-w-[280px]">
                        {MARKET_SEGMENTS.map((seg, i) => (
                            <div key={i} className="flex items-center justify-between gap-8 group">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-3 h-3 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: seg.color, boxShadow: `0 0 8px ${seg.color}60` }}
                                    />
                                    <span className="text-sm md:text-base text-white/70 group-hover:text-white transition-colors whitespace-nowrap">
                                        {seg.label}
                                    </span>
                                </div>
                                <span className="text-xl md:text-2xl font-light text-white tabular-nums">
                                    {seg.pct}%
                                </span>
                            </div>
                        ))}

                        {/* Geography Breakdown */}
                        <div className="pt-6 mt-6 border-t border-white/5 flex flex-col xl:flex-row gap-2 justify-between text-[10px] xl:text-xs text-white/40 uppercase tracking-widest whitespace-nowrap">
                            <span>USA: 40 Firms</span>
                            <span>Canada: 2 Firms</span>
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}

// =============================================================================
// D. INTENT TOGGLE
// =============================================================================

function IntentToggle() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <FadeIn delay={0.4}>
            <div ref={ref} className="p-8 lg:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] h-full flex flex-col justify-center">
                <h3 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-8 text-center">Strategic Intent</h3>

                <div className="space-y-4">
                    {/* Cash Flow */}
                    <div className="relative">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-white/60">Long-Term Cash Flow</span>
                            <span className="text-xl font-light text-teal-400">62%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "62%" } : { width: 0 }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                                className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.4)]"
                            />
                        </div>
                    </div>

                    {/* Exit */}
                    <div className="relative">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-white/60">Sell / Exit</span>
                            <span className="text-xl font-light text-rose-400">38%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "38%" } : { width: 0 }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                                className="h-full bg-gradient-to-r from-rose-500 to-rose-400 rounded-full shadow-[0_0_10px_rgba(251,113,133,0.3)]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}

// =============================================================================
// E. VALUE DRIVERS
// =============================================================================



// =============================================================================
// MAIN SECTION
// =============================================================================

export function SectionMovement() {
    return (
        <section className="py-32 lg:py-40 px-4 bg-[#050505] relative overflow-hidden">
            {/* Top Glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />

            {/* Subtle Void Lighting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-900/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <FadeIn>
                        <h2 className="text-4xl lg:text-6xl font-extralight tracking-tight text-white mb-6">
                            A Network of Elite Operators
                        </h2>
                        <p className="text-lg lg:text-xl text-white/40 font-light max-w-xl mx-auto">
                            Powering the top 1% of the Short-Term Rental Industry.
                        </p>
                    </FadeIn>
                </div>

                <HUDStatsRow />
                <TrajectorySection />

                {/* Side-by-side: Market Footprint + Strategic Intent */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <MarketRadar />
                    <IntentToggle />
                </div>

                <FadeIn delay={0.5}>
                    <div className="border-t border-white/5">
                        <TestimonialsCarousel />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
