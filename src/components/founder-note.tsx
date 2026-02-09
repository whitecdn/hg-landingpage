import { FadeIn } from "./ui/fade-in";
import { Quote } from "lucide-react";

export function FounderNote() {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-accent/[0.02] -skew-y-3 z-0 transform origin-left scale-150 pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <FadeIn>
                    <div className="glass p-8 md:p-14 rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
                        {/* Subtle inner glow */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 blur-[80px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="flex flex-col gap-8 relative z-10">
                            <div className="flex items-center gap-4 text-accent mb-2">
                                <div className="p-3 bg-accent/10 rounded-xl">
                                    <Quote className="w-8 h-8 transform scale-x-[-1]" />
                                </div>
                                <span className="text-sm font-mono tracking-widest uppercase text-muted-foreground">From the Desk of Charles</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                This is literally a no brainer. <span className="text-accent underline decoration-wavy decoration-from-font underline-offset-4 decoration-2">Seriously.</span>
                            </h2>

                            <div className="space-y-6 text-lg text-muted-foreground/90 leading-relaxed max-w-2xl">
                                <p>
                                    <strong className="text-white font-semibold">This is basically no net cost</strong> because it replaces the expensive chaos you already pay for. You are already spending money on tools at low listing count cost, mistakes, and lost growth.
                                </p>
                                <p>
                                    <strong className="text-white font-semibold">This will be the single best move of your career</strong> because it changes your environment. You are surrounded by 43 members doing the exact same thing. Stop reinventing the wheel.
                                </p>
                                <p>
                                    <strong className="text-white font-semibold">You get answers on demand, forever</strong>, from people who actually run real businesses. Not gurus. Not theory. Operators.
                                </p>
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/10">
                                <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-6">Track Record</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:bg-white/[0.05] transition-colors">
                                        <div className="font-bold text-white text-lg mb-1">hostgenius.ca</div>
                                        <div className="text-sm text-muted-foreground">Signed 400+ owners over 7 years and scaled to multiple markets.</div>
                                    </div>
                                    <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:bg-white/[0.05] transition-colors">
                                        <div className="font-bold text-white text-lg mb-1">teamtown.co</div>
                                        <div className="text-sm text-muted-foreground">Scaled to $2.5M a year ARR, growing 100% YoY.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 italic text-white/50 text-sm md:text-base border-l-2 border-accent/30 pl-4 py-1">
                                "I earn $6M a year across 3 companies and I’m not even 30 yet. This is not a get rich scheme. But nothing is more important than network."
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
