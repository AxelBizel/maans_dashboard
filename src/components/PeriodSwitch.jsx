import React from "react";

const PeriodSwitch = ({
  duration,
  setDuration,
  setDataState,
  setKeyFactState,
}) => {
  return (
    <div className="buttonGroup">
      <button
        className={duration === "week" ? "active" : undefined}
        onClick={() => {
          if (duration !== "week") {
            setDuration("week");
            setDataState(false);
            setKeyFactState(false);
          }
        }}
      >
        Sem.
      </button>
      <button
        className={duration === "month" ? "active" : undefined}
        onClick={() => {
          if (duration !== "month") {
            setDuration("month");
            setDataState(false);
            setKeyFactState(false);
          }
        }}
      >
        Mois
      </button>
      <button
        className={duration === "year" ? "active" : undefined}
        onClick={() => {
          if (duration !== "year") {
            setDuration("year");
            setDataState(false);
            setKeyFactState(false);
          }
        }}
      >
        An
      </button>
    </div>
  );
};

export default PeriodSwitch;
