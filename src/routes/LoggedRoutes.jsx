// NPM package
import { Routes, Route } from "react-router-dom";

// Project files
import Dashboard from "../pages/Dashboard";
import Courses from "pages/Courses";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import StudentList from "components/StudentList";
import Modal from "components/Modal";



export default function LoggedRoutes({ uidState }) {
  return (
    <Routes>
      <Route path= "modal" element = {<Modal/>}/>      
      <Route path= "student-list" element = {StudentList}/>
      <Route path = "courses" element = {<Courses/>}/>      
      <Route path="dashboard" element={<Dashboard uidState={uidState} />} />
      <Route path="login" element={<Login uidState={uidState} />} />
      <Route path="sign-up" element={<SignUp uidState={uidState} />} />      
    </Routes>
  );
}