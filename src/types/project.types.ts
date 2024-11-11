export interface Project {
    id: string
    name: string
    type: string
    status: 'Active' | 'Maintenance' | 'Development'
    envVars: number
    team: string[]
    lastUpdated: string
}
