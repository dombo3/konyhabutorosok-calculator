import Calculator from "./Calculator";
import Modal from "./Modal";
import { useState } from "react";
import "./CalculatorButton.css";

export default function CalculatorButton() {
  const [show, setShow] = useState(false);

  const hideModal = (e) => {
    e.stopPropagation();
    setShow(false);
  };

  const showModal = () => {
    setShow(true);
  };
  return (
    <>
      {show && (
        <Modal handleClose={hideModal}>
          <Calculator inModal={true} handleClose={hideModal} />
        </Modal>
      )}
      <button id="calculatorButton" onClick={showModal}>
        Kalkulátor
      </button>
    </>
  );
}
