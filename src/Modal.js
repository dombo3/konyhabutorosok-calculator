import "./Modal.css";

export default function Modal({ children, handleClose }) {
  return (
    <div id="modal" onClick={handleClose}>
      {children}
    </div>
  );
}
