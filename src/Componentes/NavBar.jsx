import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar p-3 container-fluid"
        style={{ backgroundColor: "rgba(100, 100, 100, .5)", border: "none" }}
      >
        <div className="container-fluid justify-content-around">
          {/* Formulario izquierda */}
          <form className="form-inline d-flex" role="search">
            <button className="btn btn-success ml-md-2" type="submit">
              Search
            </button>
            <input
              className="form-control me-2 mr-2 ml-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-danger" type="submit">
              Random
            </button>
          </form>

          {/* Boton All Characters */}
          <button className="btn btn-primary ml-2" type="submit">
            All Characters
          </button>

          {/* Formulario derecha */}
          <form className="form-inline d-flex" role="search">
            <button className="btn btn-success ml-md-2" type="submit">
              Search
            </button>
            <input
              className="form-control me-2 mr-2 ml-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className="btn btn-danger" type="submit">
              Random
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
