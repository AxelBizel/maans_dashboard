import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

function BillItem({ period, amount, paid }) {
  return (
    <div className="billItem">
      <h4 className="period">{period}</h4>
      <h4 className="amount">{amount}</h4>
      <div className="paymentStatus">
        <span className={paid ? "paid" : "unpaid"}>&nbsp;</span>
        <h4>{paid ? "Réglée" : "À régler"}</h4>
      </div>
      <FontAwesomeIcon icon={faFileDownload} className="downloadIcon" onClick={()=>alert('Téléchargement facture')}/>
    </div>
  );
}

export default BillItem;
