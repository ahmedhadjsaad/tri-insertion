import React from "react";
import { useSelector } from "react-redux";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Visage = (props) => {
  const loading = useSelector((state) => state.loading);
  const productList = useSelector((state) => state.products.products);

  return (
    <div className="visage-container">
      <div className="bg-container">
        <h1> Visage </h1>
        <div className="dis-more">
          <h1> Se more </h1>
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
      <div className="visage-grid">
        <div className="ul-container">
          <ul className="ul-produits">
            <li className="li-produit">Nettoyant & Démaquillant</li>
            <li className="li-produit">Soin Anti-Âge</li>
            <li className="li-produit">Hydratation Et Nutrition</li>
            <li className="li-produit">Anti-Tache , Dépigmentant</li>
            <li className="li-produit">Yeux</li>
            <li className="li-produit">Lèvres</li>
            <li className="li-produit">Cicatrices</li>
          </ul>
        </div>
        <div className="image-container">
          <img
            className="Image-main"
            src="https://parapharmacieplus.tn/modules/poslistcateproduct/images/158d70f1d5e08f3caa69186d8b14b9f43d243585_visage_categ.jpg"
            alt=""
          />
        </div>
        <div className="product-container">
          <div className="product-grid-main">
            {productList
              .slice(25, 31)
              .filter((el) => el.Category === "Visage")
              .map((el) => (
                <div className="map-container-main">
                  <img src={el.Image} alt="" />
                  <p className="name-product">{el.Name}</p>
                  <p className="price-product">{el.Prix} TND </p>
                  <button className="btn-add-cart"> Add to cart</button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visage;
