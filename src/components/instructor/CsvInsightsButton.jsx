import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function CsvInsightsButton({sessionId}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const handleExportInsights = async () => {
    try {
        
      const response = await fetch(`http://127.0.0.1:5000/api/v1/insights/export/${sessionId}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'mood_data.csv');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      } else {
        console.error('Failed to export insights:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Failed to export insights:', error);
    }
  };

  return (
    <div>
      <div className="relative">
        <div className="inline-flex items-center overflow-hidden rounded-md shadow border border-gray-400 bg-white">
          <button
            className="border-e sm:px-2 sm:py-2 py-1 px-1 sm:text-sm text-xs text-gray-800 hover:bg-red-100 hover:text-gray-700 flex"
            onClick={toggleMenu}
          >
            Download
            <span className="sr-only">Menu</span>
            <span className=' ml-2 text-lg mt-[1px]'><MdOutlineKeyboardArrowDown /></span>
          </button>
        </div>

        {menuOpen && (
          <div
            className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
            role="menu"
          >
            <div className="p-2">
              <button
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                onClick={handleExportInsights} // Call handleExportInsights function when menu item is clicked
              >
                Insights (30 days)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CsvInsightsButton;
