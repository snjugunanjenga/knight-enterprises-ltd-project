const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  weight: { type: Number, required: true },
  dimensions: { type: String, required: true },
  shippingMethod: { type: String, enum: ['air', 'road'], required: true },
  serviceType: { type: String, enum: ['express', 'standard'], required: true },
  status: { type: String, enum: ['pending', 'in-transit', 'delivered'], default: 'pending' },
  trackingNumber: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

shipmentSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Shipment', shipmentSchema);