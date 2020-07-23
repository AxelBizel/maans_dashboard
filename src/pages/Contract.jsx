import React, { useState } from "react";
import HeaderBar from "../components/HeaderBar";
import BillItem from "../components/BillItem";
import bills from "../assets/data/bills";
import Button from "../components/Button";
import Pagination from "../components/Pagination";

function Contract() {
  const pagesNumber = Math.ceil(bills.length / 6);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div id="Contract">
      <HeaderBar title="Contrat" />
      <div className="mainContainer">
        <div className="leftColumn">
          <h2>Vos factures</h2>
          <div className="billsSection">
            <div>
              <div className="billsHeader">
                <h4 className="period">Période</h4>
                <h4 className="amount">Montant</h4>
                <h4 className="status">Statut</h4>
                <h4 className="download">Télécharger</h4>
              </div>
              {bills
                .filter(
                  (b, i) => i < 6 * currentPage && i >= 6 * (currentPage - 1)
                )
                .map((b, i) => {
                  return (
                    <BillItem
                      key={`bill-${i}`}
                      period={b.period}
                      amount={b.amount}
                      paid={b.paid}
                    />
                  );
                })}
            </div>
            {pagesNumber > 1 ? (
              <Pagination
                pagesNumber={pagesNumber}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            ) : (
              false
            )}
          </div>
        </div>

        <div className="rightColumn">
          <h2>Vos informations</h2>
          <div className="infosSection">
            <div className="paymentSection">
              <div className="paymentHeader">
                <h4>Paiement</h4>
              </div>
              <div className="paymentInfos">
                <label htmlFor="name">Titulaire du compte</label>
                <br />
                <input type="text" id="name" className="textInput" />
                <br />
                <br />
                <label htmlFor="IBAN">Votre Iban</label>
                <br />
                <input
                  className="textInput"
                  type="text"
                  name="iban"
                  placeholder="FR1420041010050500013M02606"
                />
                <div className="contractButtons">
                  <Button text="Modifier" center action={() => alert("OK")} />
                </div>
              </div>
            </div>

            <div className="contractSection">
              <div className="paymentHeader">
                <h4>Contrat</h4>
              </div>
              <div className="contractDownload">
                <Button
                  text="Télécharger"
                  center
                  action={() => alert("Téléchargement du contrat")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contract;
