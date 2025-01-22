import { useState, useEffect } from "react";
export const Footer = () => {
  const [showGlitch, setShowGlitch] = useState(false);
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setShowGlitch(true);
      setTimeout(() => setShowGlitch(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <footer>
      {showGlitch && (
        <div className="absolute inset-0 bg-white/20 z-50 animate-pulse" />
      )}
      <div className="fixed bottom-0 left-0 right-0 p-4 text-sm font-light">
        <div className="max-w-4xl mx-auto flex justify-between">
          <span>System Version 1.0</span>
          <span className="animate-pulse">Connection Stable</span>
        </div>
      </div>
    </footer>
  );
};
