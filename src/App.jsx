// 📄 src/App.jsx
import React, { useEffect } from "react";
import RoleSelectionScreen from "./components/RoleSelectionScreen";

export default function App() {
  useEffect(() => {
    const preventSwipeDismiss = (e) => {
      if (e.cancelable) e.preventDefault();
    };

    document.addEventListener("touchmove", preventSwipeDismiss, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventSwipeDismiss);
    };
  }, []);

  return (
    <div className="h-screen bg-[#fdf8f4]">
      <RoleSelectionScreen />
    </div>
  );
}
