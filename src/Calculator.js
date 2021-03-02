import "./Calculator.css";
import { useState } from "react";

export default function Calculator({ handleClose, inModal = false }) {
  const [_workFee, setWorkFee] = useState(0);
  const [_materialCost, setMaterialCost] = useState(0);

  function handleClick(e) {
    e.stopPropagation();
  }

  function calculateFinancialSupport() {
    const workFee = Number(_workFee);
    const materialCost = Number(_materialCost);
    const querterSumCost = (workFee + materialCost) / 4;
    const maxFinancialSupport = 1500000;

    if (workFee === 0 || materialCost === 0) {
      return 0;
    } else if (workFee < materialCost / 2) {
      return Math.min(querterSumCost, workFee, maxFinancialSupport) * 2;
    } else if (materialCost < workFee / 2) {
      return Math.min(querterSumCost, materialCost, maxFinancialSupport) * 2;
    } else {
      return Math.min(querterSumCost, maxFinancialSupport) * 2;
    }
  }

  return (
    <div id="calculator" onClick={handleClick}>
      {inModal && (
        <button id="closeButton" onClick={handleClose}>
          X
        </button>
      )}
      <h1>Online kalkulátor*</h1>
      <form>
        <label htmlFor={"materialCost"}>
          Konyhabútorgyártás anyagköltsége (bruttó Ft)
        </label>
        <input
          type="text"
          id="materialCost"
          value={_materialCost}
          onChange={(e) => {
            if (!Number.isNaN(Number(e.target.value))) {
              setMaterialCost(e.target.value);
            }
          }}
        ></input>
        <label htmlFor={"workFee"}>
          Konyhabútorgyártás munkadíj (bruttó Ft)
        </label>
        <input
          type="text"
          id="workFee"
          value={_workFee.toLocaleString()}
          onChange={(e) => {
            if (!Number.isNaN(Number(e.target.value))) {
              setWorkFee(e.target.value);
            }
          }}
        ></input>
      </form>
      <p className="ephasize">
        Számla teljes összege:{" "}
        <span>
          {Math.round(
            Number(_materialCost) + Number(_workFee)
          ).toLocaleString() + " Ft"}
        </span>
      </p>
      <p className="ephasize">
        Becsült igényelhető támogatás összege :{" "}
        <span className="highlite">
          {Math.round(calculateFinancialSupport()).toLocaleString() + " Ft"}
        </span>
      </p>
      <p>
        *A kalkuláltor által számított igényelhető támogatás összege becslésnek
        minősül, a tényleges támogatás összegét a Magyar Államkincstár határozza
        meg a benyújtott számlák alapján.
      </p>
    </div>
  );
}
