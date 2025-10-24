import { useMemo } from 'react';

// Cache for sections data to avoid repeated imports
let sectionsCache: any = null;

export const useSectionsData = () => {
    return useMemo(() => {
        if (sectionsCache) {
            return sectionsCache;
        }
        
        // This will be dynamically imported when needed
        return null;
    }, []);
};

export const getSectionsData = async () => {
    if (sectionsCache) {
        return sectionsCache;
    }
    
    const { allSections } = await import("@/.content-collections/generated");
    sectionsCache = allSections;
    return allSections;
};
