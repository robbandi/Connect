import React from 'react';
import PropTypes from 'prop-types';

const ColorPicker = ({ colors, selectedColor, setSelectedColor }) => (
  <div className="color-picker">
    {colors.map((color) => (
      <div
        key={color}
        className={`color-picker__color ${selectedColor === color ? 'selected' : ''}`}
        style={{ backgroundColor: color }}
        onClick={() => setSelectedColor(color)}
      />
    ))}
  </div>
);

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedColor: PropTypes.string.isRequired,
  setSelectedColor: PropTypes.func.isRequired,
};

export default ColorPicker;