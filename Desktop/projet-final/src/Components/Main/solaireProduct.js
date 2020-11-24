import React, { useState } from "react";
import { useSelector } from "react-redux";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Solaire = (props) => {
  const loading = useSelector(state => state.loading)
  const productList = useSelector((state) => state.products.products);


  return (
    <div className="visage-container">
      <div className="bg-container">
        <h1> Solaire </h1>
        <div className="dis-more">
          <h1> Se more </h1>
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
      <div className="visage-grid">
        <div className="ul-container">
          <ul className="ul-produits">
            <li className="li-produit">Autobronzant</li>
            <li className="li-produit">Après-solaire</li>
            <li className="li-produit">Protection solaire enfant</li>
            <li className="li-produit">Maquillage solaire</li>
            <li className="li-produit">Protection solaire lèvres</li>
            <li className="li-produit">Indice solaire fort 40 à 50+</li>
            <li className="li-produit">Indice solaire faible SPF15</li>
            <li className="li-produit">Indice solaire moyen 20 à 30</li>
          </ul>
        </div>
        <div className="image-container">
          <img
            className="Image-main"
            src="https://www.publicdomainpictures.net/pictures/230000/nahled/sunscreen.jpg"
            alt=""
          />
        </div>
        <div className="product-container">
          <div className="product-grid-main">
            {productList
              .slice(34, 40)
              .filter((el) => el.Category === "Solaire")
              .map((el) => (
                <div className="map-container-main">
                  <img src={el.Image} alt="" />
                  <p className="name-product">{el.Name}</p>
                  <p className="price-product">{el.Prix} TND </p>
                  <button className="btn-add-cart">Add to cart</button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solaire;
