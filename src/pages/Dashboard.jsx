import React from "react";
import GraphTemplate from "../components/GraphTemplate";
import HeaderBar from "../components/HeaderBar";
import { graphsToDisplay } from "../assets/data/graphsToDisplay";

function Dashboard({selectedSeat}) {
  return (
    <div id="Dashboard">
      <HeaderBar title="DASHBOARD" seatToggler/>

      <div className="graphsContainer">
        <div className="wrapper">
          {graphsToDisplay.map((g, i) => {
            return (
              <div className={g.position} key={`graph-${i}`}>
                <GraphTemplate
                  title={g.title}
                  subtitle={g.subtitle}
                  data={g.data}
                  keyFact={g.keyFact}
                  type={g.type}
                  options={g.options}
                  defaultPeriod={g.defaultPeriod}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
