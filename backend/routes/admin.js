const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const adminController = require('../controllers/adminController');

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });
  next();
};

router.get('/shipments', auth, isAdmin, adminController.getAllShipments);
router.put('/shipments/:id', auth, isAdmin, adminController.updateShipmentStatus);

module.exports = router;