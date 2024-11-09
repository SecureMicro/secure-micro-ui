import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Plus, RefreshCw, Search } from "lucide-react";
import { Card, CardHeader, CardContent, Input } from "@mui/material";
import Button from "../../components/common/Button";
import ServiceTable from "../../components/services/ServiceTable";
import AddServiceModal from "../../components/services/AddServiceModal";
// import { fetchServices } from "../../store/slices/serviceSlice";

const Services: React.FC<{ services?: any[] }> = ({ services }) => {
  // const dispatch = useDispatch();
  const { loading } = useSelector((state: { services: any }) => state.services);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  // useEffect(() => {
  //   dispatch(fetchServices());
  // }, [dispatch]);

  const servicesArr = [
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

  const filteredServices = services ?? servicesArr .filter((service: { name: string }) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Services Management</h1>
        <Button
          onClick={() => setShowAddModal(true)}
          className="flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Service
        </Button>
      </div>

      <Card>
        <CardHeader title="Services Overview" />
        <div className="flex items-center gap-4 p-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button variant="outline" onClick={() => setSearchTerm("")}>
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
        <CardContent>
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <ServiceTable services={filteredServices} />
          )}
        </CardContent>
      </Card>

      {showAddModal && (
        <AddServiceModal
          open={showAddModal}
          onClose={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
};

export default Services;
