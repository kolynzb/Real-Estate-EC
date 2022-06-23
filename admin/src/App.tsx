import { useState } from "react";
import "./styles/App.css";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
// import RTLLayout from "./layouts/rtl";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/auth`} element={<AuthLayout />} />
        <Route path={`/`} element={<AdminLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
