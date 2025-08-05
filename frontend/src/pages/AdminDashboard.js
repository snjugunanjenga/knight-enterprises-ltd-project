import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/shipments`);
        setShipments(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchShipments();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <ul className="space-y-2">
        {shipments.map(shipment => (
          <li key={shipment._id} className="p-4 bg-white rounded-md shadow">
            {shipment.trackingNumber} - {shipment.status} - {shipment.user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboa