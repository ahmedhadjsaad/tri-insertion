import React from "react";
import { useSelector ,useDispatch  } from "react-redux";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {addToCart} from "../../JS/actions/actions"

const MotherBaby = () => {
  const loading = useSelector(state => state.loading)
  const productList = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const dispatch = useDispatch()

  return (
    <div className="pd-container">
      <div className="pd-cat">
        <h2> Bébé & Maman</h2>
      </div>
      <div className="pd-img"></div>
      <div className="nb-produits">
        <h2>
          {" "}
          There is {``}
          {productList.filter(el=>el.Category==="MotherBaby").length} {``}
          Products
        </h2>
      </div>
      <div className="pd-list">
        
        {loading ? <h1>plz loading</h1>  : productList.filter(el=>el.Category==="MotherBaby")
          .map((el) => (
            <div className="pd-list-map">
              <img src={el.Image} alt="" />
              <h5> {el.Name} </h5>
              <h4> {el.Prix} TND </h4>
              <div className="btn-shop-pd">
                <div className="bouton_4">
                  <a href="#123">
                    <AddShoppingCartIcon
                      style={{ fontSize: 40, color: "white" }}
                      onClick={()=>dispatch(addToCart(el,cartItems))}
                    />
                    <span onClick={()=>dispatch(addToCart(el,cartItems))} className="texteduboutton_4">Add to cart</span>
                  </a>
                </div>
                <div className="bouton_4">
                  <a href="#123">
                    <FavoriteBorderIcon
                      style={{ fontSize: 40, color: "white" }}
                    />
                    <span className="texteduboutton_4">Add to Wishlist</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MotherBaby;
