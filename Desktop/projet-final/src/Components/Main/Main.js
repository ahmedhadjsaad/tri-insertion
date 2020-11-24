import React from "react";
import Category from "./Category";
import Solaire from "./solaireProduct";
import TopCategory from "./topcategory";
import Visage from "./visageProduct";
const Main = (props) => {
  return (
    <div className="main-container">
      <div className="image-background">
        <div className="choice-product">
          <h1> BIG CHOICE OF PARAMEDICAL PRODUCTS</h1>
        </div>
        <button className="btn-shop">
          {" "}
          <strong> Shop now </strong>{" "}
        </button>
      </div>
      <div className="détails-container">
        <div className="livraison">
          <i class="fas fa-people-carry"></i>
          <h2> Free Shipping </h2>
          <h3> For orders from 50 TND </h3>
        </div>
        <div className="paiement">
          <i class="fas fa-credit-card"></i>
          <h2> Secure Payment </h2>
          <h3> 100% secure payment </h3>
        </div>
        <div className="support">
          <i class="fas fa-comments"></i>
          <h2> 24/7 Support </h2>
          <h3> Dedicated support </h3>
        </div>
        <div className="échange">
          <i class="fas fa-sync-alt"></i>
          <h2> 90 Days Return </h2>
          <h3> If goods have problems </h3>
        </div>
      </div>
      <TopCategory/>
      <Visage/>
      <Solaire />
      <Category/>
    </div>
  );
};

export default Main;
