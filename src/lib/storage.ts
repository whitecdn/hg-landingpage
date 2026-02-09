export interface Submission {
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    url?: string;
    phone: string;
    email?: string;
    listings: string;
    marketsServed: string;
    techStack?: string;
    timestamp: number;
}

const STORAGE_KEY = 'hg_network_submissions';

export const saveSubmission = (data: Omit<Submission, 'id' | 'timestamp'>) => {
    if (typeof window === 'undefined') return;

    const newSubmission: Submission = {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        ...data
    };

    const existing = getSubmissions();
    const updated = [newSubmission, ...existing];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return newSubmission;
};

export const getSubmissions = (): Submission[] => {
    if (typeof window === 'undefined') return [];

    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error('Error reading submissions', e);
        return [];
    }
};
