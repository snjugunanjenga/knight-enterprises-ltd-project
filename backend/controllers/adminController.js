const Shipment = require('../models/Shipment');

exports.getAllShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find().populate('user', 'name email');
    res.json(shipments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateShipmentStatus = async (req, res) => {
  try {
    const shipment = await Shipment.findById(req.params.id);
    if (!shipment) return res.status(404).json({ message: 'Shipment not found' });
    shipment.status = req.body.status;
    await shipment.save();
    res.json(shipment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};