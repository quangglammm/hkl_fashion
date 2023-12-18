import "./App.css";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import MUICustomSwitch from "./Components/MUICustomSwitch/MUICustomSwitch";
function App() {
  return (
    <div className="App">
  <div className="switchLayout" >
  <MUICustomSwitch />
  </div>
      <Outlet />
      <ToastContainer />
    </div>
  );
}
export default App;