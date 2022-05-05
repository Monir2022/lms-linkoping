import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "state/AuthProvider";
import { UIDProvider } from "state/UIDContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AuthProvider><UIDProvider><App/></UIDProvider></AuthProvider>);
