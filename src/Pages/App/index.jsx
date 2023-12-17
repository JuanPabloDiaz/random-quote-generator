import React, { useEffect } from "react";
import Home from "../Home";
import "./App.css";

const App = () => {
  useEffect(() => {
    // When the component mounts, we set the overflow property to hidden
    document.body.style.overflow = "hidden";

    // When the component unmounts, we set the overflow property back to auto
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return <Home />;
};

export default App;
