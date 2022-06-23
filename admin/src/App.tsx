import { useState } from "react";
import "./styles/App.css";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import RTLLayout from "./layouts/rtl";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/auth`} element={<AuthLayout />} />
        <Route path={`/admin`} element={<AdminLayout />} />
        <Route path={`/rtl`} element={<RTLLayout />} />
        <Route path="/" element={<Navigate replace to="/admin" />} />
        {/* <Redirect from='/' to='/admin' /> */}
      </Routes>
    </Router>
  );
}

export default App;
