import React, { useState } from 'react';

const CustomInput = () => {
  const [rawValue, setRawValue] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;

    // Allow empty input
    if (val === '') {
      setRawValue('');
      return;
    }

    // Only allow valid number characters (digits, optional one dot)
    if (/^\d*\.?\d*$/.test(val)) {
      // Parse and format with .0 if it's a valid number
      const parsed = parseFloat(val);
      if (!isNaN(parsed)) {
        setRawValue(parsed.toFixed(1));
      } else {
        setRawValue(val); // Keep typing "10." etc.
      }
    }
  };

  const handleKeyDown = (e) => {
    // Clear on delete or backspace when there's only one char
    if ((e.key === 'Backspace' || e.key === 'Delete') && rawValue.length <= 1) {
      setRawValue('');
    }
  };

  return (
    <input
      type="text"
      value={rawValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Enter number"
    />
  );
};

export default CustomInput;
