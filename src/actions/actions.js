import { GET_PROJECTS } from './actionTypes';
import projects_data from '../data/projects.json';

export const getProjects = () => {   
    return {
        type: GET_PROJECTS,
        payload: {
            ...projects_data.projects
        }
    }
}