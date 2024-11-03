import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Plus, Search } from 'lucide-react';
import { Card, CardHeader, CardContent, Input } from "@mui/material";
import Button from '../../components/common/Button';
import ServiceTable from '../../components/services/ServiceTable';
import AddServiceModal from '../../components/services/AddServiceModal';
import { fetchServices } from '../../store/slices/serviceSlice';

const Services: React.FC = () => {
  const dispatch = useDispatch();
  const { services, loading } = useSelector((state: { services: any }) => state.services);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const filteredServices = services.filter((service: { name: string }) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Services Management</h1>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4 mr-2" /> Add Service
        </Button>
      </div>

      <Card>
        <CardHeader title="Services">
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
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div>Loading...</div>
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