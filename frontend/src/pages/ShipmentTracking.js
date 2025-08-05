import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShipmentTracking = () => {
  const { trackingNumber } = useParams();
  const [shipment, setShipment] = useState(null);

  useEffect(() => {
    const fetchShipment = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/shipments/${trackingNumber}`);
        setShipment(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchShipment();
  }, [trackingNumber]);

  if (!shipment) return <div className="text-center p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shipment Tracking</h1>
      <div className="bg-white p-4 rounded-md shadow">
        <p><strong>Tracking Number:</strong> {shipment.trackingNumber}</p>
        <p><strong>Status:</strong> {shipment.status}</p>
        <p><strong>Origin:</strong> {shipment.origin}</p>
        <p><strong>Destination:</strong> {shipment.destination}</p>
        <p><strong>Weight:</strong> {shipment.weight} kg</p>
        <p><strong>Dimensions:</strong> {shipment.dimensions}</p>
        <p><strong>Shipping Method:</strong> {shipment.shippingMethod}</p>
        <p><strong>Service Type:</strong> {shipment.serviceType}</p>
      </div>
    </div>
  );
};

export default ShipmentTracking;