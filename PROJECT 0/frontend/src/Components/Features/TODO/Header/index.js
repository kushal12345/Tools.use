import React, { useEffect } from "react";
import "./Style/style.css";

function Headers() {
  useEffect(() => {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date();
    document.getElementById("date-headers").innerHTML = month[d.getMonth()];

    setInterval(() => {
      let d = new Date();
      document.getElementById("date-header").innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }, 1000);

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    setInterval(() => {
      let d = new Date();
      document.getElementById("ddatee").innerHTML = "DAY : <b>" + weekday[d.getDay()] + "</b>";
    }, 1000);
  }, []);

  return (
    <div className="Container-feild headeraa">
      <div className="row"> 
        <div className="row my-2"> 
          <h2>DAILY PLANNER</h2>                 
        </div>
        <div className="row">
          <div className="col-md-4"  id="date-headers">
          </div>
          <div className="col-md-4"  id="date-header">
          </div>
          <div className="col-md-4" id="ddatee">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headers;