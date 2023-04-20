function Card() {
  return (
    <div className="container-fluid">
      <div className="card" style={{ width: "18rem", height: "38rem" }}>
        {/* Imagen Card */}
        <img
          src={process.env.PUBLIC_URL + "images/todo6.png"}
          className="card-img-top"
          style={{ height: "16rem" }}
          alt="card"
        />
        <div className="card-body">
          <h5 className="card-title">Nombre Personaje</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Id:</li>
          <li className="list-group-item">Age:</li>
          <li className="list-group-item">Galaxia:</li>
          <li className="list-group-item">Facction:</li>
        </ul>
        {/*<div className="card-body">
           <a href={"#"} className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> 
        </div>*/}
      </div>
    </div>
  );
}

export default Card;
