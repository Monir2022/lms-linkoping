// NPM package
import { Routes, Route } from "react-router-dom";

// Project files

import Dashboard from "../pages/Dashboard";
import Courses from "pages/Courses";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import RecoverPassword from "../pages/RecoverPassword";


export default function LoggedRoutes({ uidState }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path = "courses" element = {<Courses/>}/>      
      <Route path="dashboard" element={<Dashboard uidState={uidState} />} />
      <Route path="login" element={<Login uidState={uidState} />} />
      <Route path="sign-up" element={<SignUp uidState={uidState} />} />
      <Route path="recover-password" element={<RecoverPassword />} />
    </Routes>
  );
}
