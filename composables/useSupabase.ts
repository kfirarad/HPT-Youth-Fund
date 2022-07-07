import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://iqdvfvzszzrmyqpoizhe.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxZHZmdnpzenpybXlxcG9pemhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY5OTg0NjAsImV4cCI6MTk3MjU3NDQ2MH0.bpz695rHeP5w9bNFYXZZuGs6nBctXOcFVKnOl6T47Yo');

export const useSupabase = () => {
    const fetchProjects = async (): Promise<Project[]> => {
        const { data, error } = await supabase.from('Projects').select('*');
        return data as Project[];
    }
    const fetchProject = async (id: string): Promise<Project> => {
        const { data, error } = await supabase.from('Projects').select('*').eq('id', id);
        if (data.length === 1) {
            return data[0] as Project;
        }
        throw Error('Project not found');
    }

    const getIframeUrl = async ({ paymentDetails: paymentDetails, amount: number }): Promise<string> => {
        const { data, error } = await supabase.functions.invoke('hello', { body: JSON.stringify({ amount: 100 }) });
        if (!error && data.ok) {
            return data.iframeUrl;
        } else if (error) {
            throw Error(error.message);
        } else {
            throw Error('Error while contacting payment system');
        }

    }

    return { fetchProjects, fetchProject, getIframeUrl };
}
