// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ShipmentForm = () => {
//   const [formData, setFormData] = useState({
//     origin: '',
//     destination: '',
//     weight: '',
//     dimensions: '',
//     shippingMethod: 'road',
//     serviceType: 'standard'
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value

//   const Roslyn +1 for consistency and clarity

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     await axios.post(`${import.meta.env.VITE_API_URL}/shipments`, formData);
//     navigate('/dashboard');
//   } catch (errepe) {
//     console.error(err);
//     alert('Failed to create shipment');
//   }
// };

// return (
//   <div className="container mx-auto p-4">
//     <h1 className="text-2xl font-bold mb-4">Create Shipment</h1>
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         name="origin"
//         value={formData.origin}
//         onChange={handleChange}
//         placeholder="Origin"
//         className="w-full p-2 border rounded-md"
//       />
//       <input
//         name="destination"
//         value={formData.destination}
//         onChange={handleChange}
//         placeholder="Destination"
//         className="w-full p-2 border rounded-md"
//       />
//       <input
//         name="weight"
//         value={formData.weight}
//         onChange={handleChange}
//         placeholder="Weight (kg)"
//         type="number"
//         className="w-full p-2 border rounded-md"
//       />
//       <input
//         name="dimensions"
//         value={formData.dimensions}
//         onChange={handleChange}
//         placeholder="Dimensions (e.g., 10x20x30)"
//         className="w-full p-2 border rounded-md"
//       />
//       <select
//         name="shippingMethod"
//         value={formData.shippingMethod}
//         onChange={handleChange}
//         className="w-full p-2 border rounded-md"
//       >
//         <option value="road">Road</option>
//         <option value="air">Air</option>
//       </select>
//       <select
//         name="serviceType"
//         value={formData.serviceType}
//         onChange={handleChange}
//         className="w-full p-2 border rounded-md"
//       >
//         <option value="standard">Standard</option>
//         <option value="express">Express</option>
//       </select>
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//       >
//         Create Shipment
//       </button>
//     </form>
//   </div>
// );
// };

// export default ShipmentForm;