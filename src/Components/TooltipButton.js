import React, { useState } from 'react';
import './TooltipButton.css'; // Import your CSS file for styling

function TooltipButton({ text }) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="tooltip-button-container">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="tooltip-button"
      >
        ?
      </button>
      {isTooltipVisible && <div className="tooltip">{text}</div>}
    </div>
  );
}

export default TooltipButton;
