import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
