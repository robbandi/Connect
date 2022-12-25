const express = require('express');
const LinesController = require('../controllers/lines');

const router = express.Router();

router.get('/', LinesController.getLines);
router.post('/', LinesController.addLine);
router.patch('/:id', LinesController.updateLine);
router.delete('/:id', LinesController.deleteLine);

module.exports = router;