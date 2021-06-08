import React, { useState } from "react";
import NavBar from "./NavBar";
import "./Layout.css";

const Layout = (props) => {
  // const [page, setPage] = useState(1);
  const searchHandler = (e) => {
    e.preventDefault();
    const searchKey = e.target[0].value;
    props.setSearch(searchKey);
  };

  return (
    <div className="top-container">
      <div className="row content">
        <NavBar />
        <div className="col s6 offset-s3 z-depth-3">
          <h2>Unsplash</h2>
          <h6>Beautiful free photos</h6>
          <h6>Cited by the world's most generous community of photographers</h6>
          <div>
            <form className="input-field col s12" onSubmit={searchHandler}>
              <div className="col s9">
                <i className="material-icons prefix">search</i>
                <input
                  id="icon_prefix"
                  type="text"
                  className="validate"
                  placeholder="Search images"
                />
              </div>
              <div className="col s3 search-btn-div">
                <button
                  type="submit"
                  className="waves-effect waves-light btn-small"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
