import api from './api'
import { Project } from '../types/project.types'

export const ProjectsService = {
    getAll: () => api.get<Project[]>('/projects'),
    getById: (id: string) => api.get<Project>(`/projects/${id}`),
    // Other methods
}
