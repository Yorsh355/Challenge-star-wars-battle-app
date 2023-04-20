function Card() {
  return (
    <div className="container-fluid">
      <div
        className="card shadow-lg"
        style={{
          width: "18rem",
          height: "38rem",
          backgroundColor: "rgba(100, 100, 100, .4)",
          border: "none",
        }}
      >
        {/* Imagen Card */}
        <img
          src={process.env.PUBLIC_URL + "images/todo6.png"}
          className="card-img-top"
          style={{ height: "16rem" }}
          alt="card"
        />
        <div className="card-body">
          <h5 className="card-title text-warning">Nombre Personaje</h5>
        </div>
        <ul className="list-group list-group-flush text-warning">
          <li
            className="list-group-item"
            style={{
              backgroundColor: "rgba(100, 100, 100, .5)",
              border: "none",
            }}
          >
            Id:
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor: "rgba(100, 100, 100, .5)",
              border: "none",
            }}
          >
            Age:
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor: "rgba(100, 100, 100, .5)",
              border: "none",
            }}
          >
            Galaxia:
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor: "rgba(100, 100, 100, .5)",
              border: "none",
            }}
          >
            Facction:
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
