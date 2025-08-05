// import Constants from 'expo-constants';
// const API_KEY = Constants.expoConfig?.extra?.API_NINJA_KEY;

export const fetchRandomQuote = async () => {
    try {
        const res = await fetch('https://api.kanye.rest/');
        if (!res.ok) {
        throw new Error(`Failed to fetch quote. Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching quote:', error);
        throw error;
    }
};
