import { useState } from "react";

import { FaArrowDown } from "react-icons/fa";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute z-10 inline-block left-4mt-2 px-1 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-100 tooltip dark:bg-gray-700">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
