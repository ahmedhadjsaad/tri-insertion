import React from "react";
import { Redirect, withRouter } from "react-router-dom";
const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-1">
        <div className="title-projet">
          <h1 onClick={() => props.history.push("/")}> SANTÉ FOR LIFE </h1>
        </div>
        <div className="search">
          <input
            className="input-search"
            type="text"
            placeholder="I'am shopping for ..."
          />
          <button className="btn-search"> Search </button>
        </div>
        <div className="wishlist">
          <i class="far fa-heart"></i>
          <span className="nombreWilshit">1</span>
        </div>
        <div className="panier">
          <i onClick={()=>props.history.push("/Cart")} class="fas fa-shopping-cart"></i>
          <span onClick={()=>props.history.push("/Cart")} className="nombreProduit">1</span>
        </div>
        <div className="user">
          <i class="far fa-user"></i>
          <div>
            <h3 onClick={() => props.history.push("/Login")}> Login</h3>
            <h3 onClick={() => props.history.push("/Register")}>Register</h3>
          </div>
        </div>
      </div>
      <div className="header-2">
        <h2>
          {" "}
          <i class="fas fa-bars"></i> Shop by Category
        </h2>
        <h3>
          {" "}
          <i class="fas fa-home"></i> Home{" "}
        </h3>
        <h3> New </h3>
        <h3> Promotions </h3>
        <h3> Marques </h3>
        <h3> Contact </h3>
      </div>
    </div>
  );
};

export default withRouter(Header);
