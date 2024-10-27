import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Power, Settings } from "lucide-react";
import Button from "../../common/Button/Button";
import { getStatusColor, getHealthIcon } from "../../../utils/formatters";

const ServiceTable: React.FC<{ services: any[] }> = ({ services }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Service Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Health</TableHead>
          <TableHead>Version</TableHead>
          <TableHead>Last Deployed</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow key={service.id}>
            <TableCell className="font-medium">{service.name}</TableCell>
            <TableCell>
              <span className={getStatusColor(service.status)}>
                {service.status}
              </span>
            </TableCell>
            <TableCell>{getHealthIcon(service.health)}</TableCell>
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
  );
};

export default ServiceTable;
