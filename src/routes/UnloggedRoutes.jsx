// NPM package
import { Routes, Route } from "react-router-dom";

// Project files
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotLogged from "../pages/NotLogged";
import SignUp from "../pages/SignUp";

import Landing from "../pages/Landing";

export default function UnloggedRoutes({ uidState }) {
  return (
    <Routes>
      <Route path= "/" element = {<Landing/>}/>
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login uidState={uidState} />} />
      <Route path="sign-up" element={<SignUp uidState={uidState} />} />
      <Route path="*" element={<NotLogged />} />
      
    </Routes>
  );
}