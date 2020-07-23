import React, { useState, useEffect } from "react";
import {
  defaults,
  Radar,
  Bar,
  Polar,
  Line,
  HorizontalBar,
  Doughnut,
  Pie,
} from "react-chartjs-2";

import Counter from "./Counter";
import PeriodSwitch from "./PeriodSwitch";

function GraphTemplate({
  title,
  subtitle,
  type,
  data,
  keyFact,
  options,
  defaultPeriod,
}) {
  const [duration, setDuration] = useState(defaultPeriod);
  const [dataState, setDataState] = useState(false);
  const [keyFactState, setKeyFactState] = useState(false);
  defaults.global.defaultFontFamily = "'Montserrat', 'sans-serif'";

  useEffect(() => {
    if (!dataState) {
      if (duration === "week") {
        setDataState(data.week);
      }
      if (duration === "month") {
        setDataState(data.month);
      }
      if (duration === "year") {
        setDataState(data.year);
      }
    }
    if (!keyFactState && keyFact) {
      if (duration === "week") {
        setKeyFactState(keyFact.week);
      }
      if (duration === "month") {
        setKeyFactState(keyFact.month);
      }
      if (duration === "year") {
        setKeyFactState(keyFact.year);
      }
    }
  }, [duration, data, dataState, keyFact, keyFactState]);

  const getType = (type) => {
    if (type === "bar") return <Bar data={dataState} options={options} />;
    else if (type === "radar")
      return <Radar data={dataState} options={options} />;
    else if (type === "area")
      return <Line data={dataState} options={options} />;
    else if (type === "polar")
      return <Polar data={dataState} options={options} />;
    else if (type === "horizontalBar")
      return <HorizontalBar data={dataState} options={options} />;
    else if (type === "doughnut")
      return <Doughnut data={dataState} options={options} />;
    else if (type === "pie") return <Pie data={dataState} options={options} />;
    else return false;
  };

  return (
    <div id="GraphTemplate">
      <div className="header">
        <div className="titleSubtitle">
          <h3 className="title">{title}</h3>
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className="switcher">
          <PeriodSwitch
            duration={duration}
            setDuration={setDuration}
            setDataState={setDataState}
            setKeyFactState={setKeyFactState}
          />
        </div>
      </div>
      <div className="graphSection">
        {dataState ? (
          <div>
            {keyFactState ? (
              <div className="keyFact">
                <Counter number={keyFactState.number} />
                <p>{keyFactState.legend}</p>
              </div>
            ) : (
              false
            )}
            <div
              style={
                type === "area"
                  ? { position: "relative", height: "12vh", width: "auto" }
                  : type === "horizontalBar"
                  ? { position: "relative", height: "52vh", width: "auto" }
                  : { position: "relative", height: "20vh", width: "auto" }
              }
            >
              {getType(type)}
            </div>
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  );
}

export default GraphTemplate;
