import { useState } from "react";

const App = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        onClick={handleToggleClick}
        className={`relative w-24 h-12 rounded-full transition-all duration-300 ease-in-out cursor-pointer 
          ${isOn ? "bg-green-500" : "bg-red-500"} 
          ${isOn ? "shadow-lg" : "shadow-md"}
        `}
      >
        <span
          className={`absolute top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out 
            ${isOn ? "translate-x-12 " : "translate-x-1"}
          `}
        >
          <span className={`text-white font-bold text-lg`}>
            {isOn ? "ON" : "OFF"}
          </span>
        </span>
      </div>
    </div>
  );
};

export default App;
