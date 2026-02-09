"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { saveSubmission } from "@/lib/storage";

interface SubmissionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SubmissionModal({ isOpen, onClose }: SubmissionModalProps) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        url: "",
        phone: "",
        email: "",
        listings: "",
        marketsServed: "",
        techStack: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 800));

        saveSubmission(formData);

        setIsSubmitting(false);
        setIsSuccess(true);

        setTimeout(() => {
            onClose();
            // Reset form deeply after closing
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({
                    firstName: "",
                    lastName: "",
                    companyName: "",
                    url: "",
                    phone: "",
                    email: "",
                    listings: "",
                    marketsServed: "",
                    techStack: ""
                });
            }, 300);
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                    >
                        {/* Header / Glossy effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-50 z-20" />

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors z-20"
                        >
                            <X size={20} />
                        </button>

                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center p-12 text-center h-full">
                                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
                                <p className="text-muted-foreground">Thanks {formData.firstName}. We'll be in touch shortly.</p>
                            </div>
                        ) : (
                            <div className="flex flex-col h-full overflow-y-auto">
                                <div className="p-8 pb-4 shrink-0">
                                    <h2 className="text-2xl font-bold mb-2">Join the Network</h2>
                                    <p className="text-muted-foreground text-sm">
                                        Tell us a bit about your business to get started.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-4 overflow-y-auto">

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label htmlFor="firstName" className="text-xs font-medium text-gray-400 uppercase tracking-wide">First Name <span className="text-accent">*</span></label>
                                            <input
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-light"
                                                placeholder="Alice"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="lastName" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Last Name <span className="text-accent">*</span></label>
                                            <input
                                                name="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-light"
                                                placeholder="Smith"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="companyName" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Company Name <span className="text-accent">*</span></label>
                                        <input
                                            name="companyName"
                                            required
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-light"
                                            placeholder="Acme Vacation Rentals"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label htmlFor="url" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Website URL</label>
                                            <input
                                                name="url"
                                                type="url"
                                                value={formData.url}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-light"
                                                placeholder="https://acme.com (Optional)"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="listings" className="text-xs font-medium text-gray-400 uppercase tracking-wide"># of Listings <span className="text-accent">*</span></label>
                                            <input
                                                name="listings"
                                                type="number"
                                                required
                                                value={formData.listings}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-light"
                                                placeholder="50"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="marketsServed" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Market(s) Served <span className="text-accent">*</span></label>
                                        <input
                                            name="marketsServed"
                                            required
                                            value={formData.marketsServed}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-light"
                                            placeholder="e.g. Austin, Miami, Nashville"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-light"
                                            placeholder="alice@acme.com (Optional)"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="phone" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Phone Number <span className="text-accent">*</span></label>
                                        <input
                                            name="phone"
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-light"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="techStack" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Tech Stack</label>
                                        <textarea
                                            name="techStack"
                                            value={formData.techStack}
                                            onChange={handleChange}
                                            rows={2}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-light resize-none"
                                            placeholder="PMS, Pricing Tool, Operations, etc. (Optional)"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full mt-4 bg-accent text-black font-bold py-3.5 rounded-lg hover:bg-accent/90 hover:shadow-[0_0_20px_-5px_var(--color-accent)] transform active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Submitting..." : "Apply Now"}
                                    </button>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
