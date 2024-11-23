import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Paper,
} from '@mui/material'
import { Power, Settings } from 'lucide-react'
import Button from '../common/Button'
import { getHealthIcon, getStatusColor } from '../../utils/formatter'

const ServiceTable: React.FC<{ services: any[] }> = ({ services }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Service Name</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Health</TableCell>
                        <TableCell>Version</TableCell>
                        <TableCell>Last Deployed</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {services.map((service) => (
                        <TableRow key={service.id}>
                            <TableCell className="font-medium">
                                {service.name}
                            </TableCell>
                            <TableCell>
                                <span
                                    className={getStatusColor(service.status)}
                                >
                                    {service.status}
                                </span>
                            </TableCell>
                            <TableCell>
                                {getHealthIcon(service.health)}
                            </TableCell>
                            <TableCell>{service.version}</TableCell>
                            <TableCell>{service.lastDeployed}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon">
                                        <Power className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <Settings className="w-4 h-4" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ServiceTable
