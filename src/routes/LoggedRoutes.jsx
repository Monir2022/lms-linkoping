// NPM package
import { Routes, Route } from "react-router-dom";

// Project files
import Courses from "pages/Courses";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import StudentList from "components/StudentList";
import RecoverPassword from "pages/RecoverPassword";

export default function LoggedRoutes({ uidState }) {
  return (
    <Routes>
      <Route path="recover-password" element={<RecoverPassword />} />
      <Route path="student-list" element={<StudentList />} />
      <Route path="courses" element={<Courses />} />      
      <Route path="login" element={<Login uidState={uidState} />} />
      <Route path="sign-up" element={<SignUp uidState={uidState} />} />
    </Routes>
  );
}
