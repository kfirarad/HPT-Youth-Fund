import db from '../db';

export const useDb = () => {
    const fetchProjects = (): Project[] => {
        return db.projects;
    }
    const fetchProject = (id: string): Project => {
        return db.projects.find(p => p.id === id);
    }
    return { fetchProjects, fetchProject };
}
