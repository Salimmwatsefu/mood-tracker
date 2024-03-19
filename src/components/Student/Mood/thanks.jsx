import React, { useEffect, useState } from 'react';

const Thanks = () => {
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    // Delay the appearance of the Thanks message by 500 milliseconds
    const timeout = setTimeout(() => setShowThanks(true), 500);
    
    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div
        className={`transition-transform ${showThanks ? 'translate-x-0' : '-translate-x-full'}`}
        style={{
          transform: showThanks ? 'translateX(0)' : 'translateX(-100%)',
          transitionDuration: '0.5s',
          transitionTimingFunction: 'ease-in-out'
        }}
      >
        <h2 className="text-6xl font-bold text-green-600">Thank You</h2>
      </div>
    </div>
  );
}

export default Thanks;
