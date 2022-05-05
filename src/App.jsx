// NPM package
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "state/ModalContext";

// Project files
import LoggedRoutes from "./routes/LoggedRoutes";
import UnloggedRoutes from "./routes/UnloggedRoutes";
import "./styles/styles.css";

export default function App() {
  const [uid, setUID] = useState(null);

  return (
    <div className="App">
      <ModalProvider>
        <BrowserRouter>
          {uid && <LoggedRoutes uidState={[uid, setUID]} />}
          {!uid && <UnloggedRoutes uidState={[uid, setUID]} />}
        </BrowserRouter>
      </ModalProvider>
    </div>
  );
}
