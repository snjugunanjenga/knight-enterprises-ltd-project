const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const auth = require('../middleware/auth');
const shipmentController = require('../controllers/shipmentController');

router.post('/', auth, [
  check('origin', 'Origin is required').not().isEmpty(),
  check('destination', 'Destination is required').not().isEmpty(),
  check('weight', 'Weight is required').isNumeric(),
  check('dimensions', 'Dimensions are required').not().isEmpty(),
  check('shippingMethod', 'Shipping method is required').isIn(['air', 'road']),
  check('serviceType', 'Service type is required').isIn(['express', 'standard'])
], shipmentController.createShipment);

router.get('/', auth, shipmentController.getShipments);
router.get('/:trackingNumber', auth, shipmentController.getShipmentByTrackingNumber);

module.exports = router;