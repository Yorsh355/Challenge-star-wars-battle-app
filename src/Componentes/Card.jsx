//import React, { useState } from "react";

function Card(/* props */) {
  /* const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  }; */

  return (
    <div className="card m-3">
      {/* <img
        style={{ height: "20rem", width: "20rem" }}
        src={process.env.PUBLIC_URL + "/images/todo6.png"}
        className="card-img-top"
        alt={props.name}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <button className="btn btn-primary" onClick={toggleInfo}>
          {showInfo ? "Hide Info" : "Show Info"}
        </button>
        {showInfo && <p className="card-text">{props.info}</p>}
      </div> */}
    </div>
  );
}

export default Card;
