"use client";

import { useState, useEffect } from "react";
import { getSubmissions, Submission } from "@/lib/storage";
import { FadeIn } from "@/components/ui/fade-in";

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [submissions, setSubmissions] = useState<Submission[]>([]);

    useEffect(() => {
        // Check if already authenticated via session storage or just rely on state for now
        // For this simple task, state is fine, but maybe session persistence is better for refresh
        const auth = sessionStorage.getItem("admin_auth");
        if (auth === "true") {
            setIsAuthenticated(true);
            loadSubmissions();
        }
    }, []);

    const loadSubmissions = () => {
        setSubmissions(getSubmissions());
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "HG123") {
            setIsAuthenticated(true);
            sessionStorage.setItem("admin_auth", "true");
            loadSubmissions();
        } else {
            alert("Incorrect password");
        }
    };

    if (!isAuthenticated) {
        return (
            <main className="min-h-screen bg-background flex items-center justify-center p-4">
                <div className="w-full max-w-md p-8 border border-white/10 rounded-2xl bg-black/50 backdrop-blur-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Admin Access</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-accent text-black font-bold py-3 rounded-lg hover:bg-accent/90 transition-colors"
                        >
                            Unlock
                        </button>
                    </form>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-bold">Form Submissions</h1>
                    <button
                        onClick={() => {
                            setIsAuthenticated(false);
                            sessionStorage.removeItem("admin_auth");
                        }}
                        className="text-sm text-muted-foreground hover:text-white"
                    >
                        Logout
                    </button>
                </div>

                <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-wider">
                                    <th className="py-4 px-6 font-medium text-muted-foreground">Date</th>
                                    <th className="py-4 px-6 font-medium text-muted-foreground">Name</th>
                                    <th className="py-4 px-6 font-medium text-muted-foreground">Company</th>
                                    <th className="py-4 px-6 font-medium text-muted-foreground">Details</th>
                                    <th className="py-4 px-6 font-medium text-muted-foreground">Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {submissions.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="py-8 text-center text-muted-foreground">
                                            No submissions found yet.
                                        </td>
                                    </tr>
                                ) : (
                                    submissions.map((sub) => (
                                        <tr key={sub.id} className="border-b border-white/5 hover:bg-white/5 transition-colors align-top">
                                            <td className="py-4 px-6 text-sm whitespace-nowrap text-muted-foreground">
                                                {new Date(sub.timestamp).toLocaleString()}
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="font-bold text-white">{sub.firstName} {sub.lastName}</div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="text-white">{sub.companyName}</div>
                                                {sub.url && (
                                                    <a href={sub.url} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline block mt-1 truncate max-w-[150px]">
                                                        {sub.url}
                                                    </a>
                                                )}
                                            </td>
                                            <td className="py-4 px-6 text-sm text-gray-300">
                                                <div className="mb-1"><span className="text-muted-foreground">Listings:</span> {sub.listings}</div>
                                                <div className="mb-1"><span className="text-muted-foreground">Mkts:</span> {sub.marketsServed}</div>
                                                {sub.techStack && (
                                                    <div className="text-xs text-muted-foreground mt-2 bg-white/5 p-2 rounded">
                                                        stack: {sub.techStack}
                                                    </div>
                                                )}
                                            </td>
                                            <td className="py-4 px-6 text-sm">
                                                <div className="block text-white">{sub.email || <span className="text-muted-foreground italic">No email</span>}</div>
                                                <div className="block text-muted-foreground text-xs mt-1">{sub.phone}</div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
