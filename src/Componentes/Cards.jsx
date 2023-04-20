import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="container-fluid  max border border-primary p-3 d-flex justify-content-center">
      <div className="row gap-4">
        {/* Card izquierda */}
        <div
          className="col border border-danger d-flex justify-content-center align-items-center"
          style={{ height: "40rem" }}
        >
          <Card />
        </div>

        {/* espacio VS */}
        <div
          className="col border border-danger d-flex justify-content-center align-items-center"
          style={{ height: "40rem", width: "10rem" }}
        >
          <h1>VS</h1>
        </div>

        {/* Card derecha */}
        <div
          className="col border border-danger d-flex justify-content-center align-items-center"
          style={{ height: "40rem" }}
        >
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Cards;
