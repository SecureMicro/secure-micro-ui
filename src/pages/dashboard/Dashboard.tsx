import React, { useState } from "react";
import StatsCard from "../../components/statsCard/StatsCard";
import Services from "../services/Services";
import AddServiceModal from "../../components/services/AddServiceModal";

const Dashboard: React.FC = () => {
  const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsAddServiceModalOpen(false);
  };

  const services = [
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
      name: "User  Management",
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
      lastDeployed: "2024-10-24 09 :45 AM",
      version: "0.9.5",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
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

      <Services services={services} />

      <AddServiceModal
        open={isAddServiceModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Dashboard;
