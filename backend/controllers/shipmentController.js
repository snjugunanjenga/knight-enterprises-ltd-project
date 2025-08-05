const Shipment = require('../models/Shipment');
const { validationResult } = require('express-validator');

exports.createShipment = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { origin, destination, weight, dimensions, shippingMethod, serviceType } = req.body;

  try {
    const shipment = new Shipment({
      user: req.user.id,
      origin,
      destination,
      weight,
      dimensions,
      shippingMethod,
      serviceType,
      trackingNumber: `KNIGHT${Date.now()}`
    });

    await shipment.save();
    res.json(shipment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(shipments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getShipmentByTrackingNumber = async (req, res) => {
  try {
    const shipment = await Shipment.findOne({ trackingNumber: req.params.trackingNumber });
    if (!shipment) return res.status(404).json({ message: 'Shipment not found' });
    res.json(shipment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};