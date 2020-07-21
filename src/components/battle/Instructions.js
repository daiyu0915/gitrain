import React from "react";
import "@/styles/battle.css";

class Instructions extends React.Component {
  render() {
    const style = {
      col1: { fontSize: "20px", textAlign: "center", margin: "8px 16px" },
      icon1: {
        backgroundColor: "#eee",
        fontSize: "120px",
        padding: "32px",
        color: "rgba(255,191,116)",
      },
      col2: { fontSize: "20px", textAlign: "center", margin: "8px 16px" },
      icon2: {
        backgroundColor: "#eee",
        fontSize: "120px",
        padding: "32px",
        color: "gray",
      },
      col3: { fontSize: "20px", textAlign: "center", margin: "8px 16px" },
      icon3: {
        backgroundColor: "#eee",
        fontSize: "120px",
        padding: "32px",
        color: " gold",
      },
    };

    return (
      <div id="instuction">
        <div style={{ textAlign: "center" }}>
          <h2 className="text-center">Instructions</h2>
        </div>
        <div className="row">
          <div className="col-1">
            <div style={style.col1}>Enter two Github</div>
            <div>
              <i className="fa fa-users" style={style.icon1} />
            </div>
          </div>
          <div className="col-2">
            <div style={style.col2}>Battle</div>
            <div>
              <i className="fa fa-fighter-jet" style={style.icon2} />
            </div>
          </div>
          <div className="col-3">
            <div style={style.col3}>See the winner</div>
            <div>
              <i className="fa fa-trophy" style={style.icon3} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Instructions;
