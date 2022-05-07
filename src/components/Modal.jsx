// NPM packages
import { createPortal } from "react-dom";

// Project files
import { useModal } from "state/ModalContext";

export default function Modal() {
  const { modal, setModal } = useModal();

  // Safeguard
  if (modal === null) return null;

  return createPortal(
    <div id="modal">
      <div className="background"></div>
      <div className="content">{modal}</div>
    </div>,
    document.getElementById("portal")
  );
}