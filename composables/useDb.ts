import db from '../db';

const useDb = () => {
    const projects = db;
    return projects;
}

export default useDb;