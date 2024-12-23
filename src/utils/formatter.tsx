import { Check, AlertTriangle } from 'lucide-react'

type StatusType = 'running' | 'stopped' | 'unknown'
type HealthType = 'healthy' | 'warning' | 'critical'

export const getStatusColor = (status: StatusType): string => {
    switch (status) {
        case 'running':
            return 'text-green-500'
        case 'stopped':
            return 'text-red-500'
        default:
            return 'text-gray-500'
    }
}

export const getHealthIcon = (
    health: HealthType
): React.ReactElement | null => {
    switch (health) {
        case 'healthy':
            return <Check className="w-5 h-5 text-green-500" />
        case 'warning':
            return <AlertTriangle className="w-5 h-5 text-yellow-500" />
        case 'critical':
            return <AlertTriangle className="w-5 h-5 text-red-500" />
        default:
            return null
    }
}
