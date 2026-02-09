import { FadeIn, SlideIn } from "./ui/fade-in";
import { BarChart3, Users, Briefcase, FileText, CheckCircle } from "lucide-react";

export function Features() {
    const sections = [
        {
            id: "goals",
            icon: <BarChart3 className="w-8 h-8 text-accent" />,
            title: "How we help you hit your goals",
            subtitle: "(highly recommended free tool to use)",
            points: [
                { label: "We turn your targets into math", desc: "Revenue, listings, timelines all reverse engineered into clear actions." },
                { label: "We track every lever that matters", desc: "Leads, conversion, onboarding, churn, profit without guesswork." },
                { label: "We spot problems early and course correct", desc: "Small signals show up in the data before growth stalls." },
                { label: "We work from the same numbers", desc: "So our advice is specific, proactive, and tied to outcomes." }
            ]
        },
        {
            id: "problems",
            icon: <Users className="w-8 h-8 text-accent" />,
            title: "How we get problems solved and 10x the peer & team support",
            subtitle: "",
            points: [
                { label: "Private channel with our ops team", desc: "Direct access to our fractional VP of Ops + team for setup decisions & execution." },
                { label: "Partner room chat", desc: "Live chat with other operators sharing what’s working (and what’s not)." },
                { label: "Message any partner anytime", desc: "Find the best person for your exact problem and get fast answers." },
                { label: "Metrics keep the conversation real", desc: "We reference dashboard numbers, then push actions to Slack." },
                { label: "Real-time tool alerts", desc: "Failed payments, PMS events, and accounting routed straight to the right channel." }
            ]
        },
        {
            id: "transition",
            icon: <Briefcase className="w-8 h-8 text-accent" />,
            title: "Transition from 'property manager' to business brand",
            subtitle: "(free tool to use)",
            points: [
                { label: "You stop being the bottleneck", desc: "One repeatable owner journey that runs without you." },
                { label: "Protect six-figure relationships", desc: "Systems replace memory, WhatsApp threads, and heroics." },
                { label: "Stand out in a crowded market", desc: "22,000 managers in the US. Professional experience wins." },
                { label: "Elevate to asset advisor", desc: "Owners see performance, equity growth, and long-term value." }
            ]
        },
        {
            id: "statements",
            icon: <FileText className="w-8 h-8 text-accent" />,
            title: "Stop fighting owner statements",
            subtitle: "(and clean up receipts automatically)",
            points: [
                { label: "Clean owner-ready statements", desc: "Pulls reservations/expenses into a format owners actually understand." },
                { label: "Auto-capture receipts from Slack", desc: "Drop receipts in Slack -> ingested, matched, categorized." },
                { label: "Fix the 'PMS statements' problem", desc: "Better design, control, and outputs than default property management software." },
                { label: "Standardize categories", desc: "Map charge types correctly now to avoid owner disputes later." },
                { label: "Recurring expenses automation", desc: "Utilities, fixed fees, and management fees applied automatically." },
                { label: "Optional, not a rip and replace", desc: "Keep your current accounting if you love it, or map it in." }
            ]
        }
    ];

    return (
        <div className="flex flex-col gap-40 py-20 px-4 md:px-0 max-w-5xl mx-auto">
            {sections.map((section, index) => (
                <section key={section.id} className="relative scroll-mt-20 group/section">
                    <div className="absolute -left-12 -top-12 z-0 hidden lg:block opacity-[0.03] select-none pointer-events-none group-hover/section:opacity-[0.06] transition-opacity duration-700">
                        <span className="text-[12rem] font-bold leading-none tracking-tighter">{index + 1}</span>
                    </div>

                    <FadeIn>
                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10 relative z-10">
                            <div className="p-4 glass rounded-2xl border border-white/10 shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]">
                                {section.icon}
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-2 tracking-tight">
                                    {section.title}
                                </h2>
                                {section.subtitle && (
                                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs tracking-widest uppercase font-bold border border-accent/20">
                                        {section.subtitle}
                                    </span>
                                )}
                            </div>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        {section.points.map((point, idx) => (
                            <SlideIn key={idx} delay={idx * 0.1} direction={idx % 2 === 0 ? "left" : "right"}>
                                <div className="glass-card p-6 h-full rounded-3xl border border-white/5 hover:border-accent/40 hover:bg-white/[0.03] transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 p-1 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                                            <CheckCircle className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-xl text-white mb-2 group-hover:text-accent transition-colors">
                                                {point.label}
                                            </h3>
                                            <p className="text-muted-foreground/80 leading-relaxed group-hover:text-muted-foreground transition-colors">
                                                {point.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SlideIn>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
