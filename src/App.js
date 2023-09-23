import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import Home from "./Pages/Home.jsx";
import Restaurant from "./Pages/Restaraunt";
// import Cart from "./Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/DeliveryFood" element={<Home />} />
        <Route path="/DeliveryFood/restaurant" element={<Restaurant />} />
      </Routes>
    </Router>
  );
}

export default App;
