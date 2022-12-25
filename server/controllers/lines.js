const Line = require('../models/Line');

exports.getLines = async (req, res) => {
  try {
    const lines = await Line.find();
    res.json(lines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addLine = async (req, res) => {
  const line = new Line({ ...req.body });
  try {
    const newLine = await line.save();
    res.status(201).json(newLine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateLine = async (req, res) => {
  try {
    const updatedLine = await Line.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedLine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteLine = async (req, res) => {
  try {
    await Line.findByIdAndDelete(req.params.id);
    res.json({ message: 'Line deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};