import React, { useState } from "react";
import { Plus, RefreshCw, Search } from "lucide-react";
import { Card, CardContent, CardHeader, Input } from "@mui/material";
import Button from "../../components/common/Button";
import StatsCard from "../../components/statsCard/StatsCard";
import ServiceTable from "../../components/services/ServiceTable";

const Dashboard: React.FC = () => {
  const [services] = useState([
    {
      id: 1,
      name: "Authentication Service",
      status: "running",
      health: "healthy",
      lastDeployed: "2024-10-26 10:30 AM",
      version: "1.0.1",
    },
    {
      id: 2,
      name: "User Management",
      status: "running",
      health: "warning",
      lastDeployed: "2024-10-25 02:15 PM",
      version: "1.1.0",
    },
    {
      id: 3,
      name: "Payment Gateway",
      status: "stopped",
      health: "critical",
      lastDeployed: "2024-10-24 09:45 AM",
      version: "0.9.5",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">SecureMicro Dashboard</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" /> Add Service
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard
          title="Total Services"
          value={services.length}
          className={""}
          valueClassName={""}
        />
        <StatsCard
          title="Active Services"
          value={services.filter((s) => s.status === "running").length}
          valueClassName="text-green-500"
          className={""}
        />
        <StatsCard
          title="Health Warnings"
          value={services.filter((s) => s.health !== "healthy").length}
          valueClassName="text-yellow-500"
          className={""}
        />
      </div>

      <Card>
        <CardHeader title="Services Overview" />
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <Button variant="outline">
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
        <CardContent>
          <ServiceTable services={filteredServices} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
