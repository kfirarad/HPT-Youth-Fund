import db from '../db';

import { createClient } from '@supabase/supabase-js'


export const useDb = () => {
    const supabaseUrl = 'https://iqdvfvzszzrmyqpoizhe.supabase.co';
    const supabaseKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);


    const fetchProjects = (): Project[] => {
        const projects = [...db.projects];
        return projects;
    }
    const fetchProject = (id: string): Project => {
        return db.projects.find(p => p.id === id);
    }
    return { fetchProjects, fetchProject };
}
