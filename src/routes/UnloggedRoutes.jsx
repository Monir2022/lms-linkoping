// NPM package
import { Routes, Route } from "react-router-dom";

// Project files
import Login from "../pages/Login";
import NotLogged from "../pages/NotLogged";
import SignUp from "../pages/SignUp";
import Landing from "../pages/Landing";
import RecoverPassword from "pages/RecoverPassword";

export default function UnloggedRoutes({ uidState }) {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      <Route path="login" element={<Login uidState={uidState} />} />
      <Route path="sign-up" element={<SignUp uidState={uidState} />} />
      <Route path="*" element={<NotLogged />} />
    </Routes>
  );
}
