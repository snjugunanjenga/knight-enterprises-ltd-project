import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/shipments`);
        setShipments(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchShipments();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Link to="/shipments/new" className="bg-blue-500 text-white p-2 rounded-md mb-4 inline-block">
        Create New Shipment
      </Link>
      <ul className="space-y-2">
        {shipments.map(shipment => (
          <li key={shipment._id} className="p-4 bg-white rounded-md shadow">
            <Link to={`/shipments/${shipment.trackingNumber}`} className="text-blue-500">
              {shipment.trackingNumber}
            </Link> - {shipment.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;