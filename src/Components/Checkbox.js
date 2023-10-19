import React, { useState, useEffect } from 'react';

function Checkbox({ id, label }) {
  // Initialize the state and retrieve the value from local storage, if available
  const [isChecked, setIsChecked] = useState(() => {
    const savedValue = localStorage.getItem(`checkbox_${id}`);
    return savedValue ? JSON.parse(savedValue) : false;
  });

  // Update the local storage whenever isChecked changes
  useEffect(() => {
    localStorage.setItem(`checkbox_${id}`, JSON.stringify(isChecked));
  }, [isChecked, id]);

  // Handle the checkbox toggle
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
}

export default Checkbox;
