import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import MotherBaby from "./Components/Pages/MotherBaby";
import Materielmedical from "./Components/Pages/Materielmedical";
import { fetchProducts } from "./JS/actions/actions";
import { useDispatch } from "react-redux";
import CartItems from "./Components/Cart/CartItems";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <div className="grid-container">
        <header>
          <Header />
        </header>

        <main>
          <Route exact path="/" component={() => <Main />} />

          <Route exact path="/MotherBaby" component={() => <MotherBaby />} />

          <Route
            exact
            path="/Materielmedical"
            component={() => <Materielmedical />}
          />

          <Route exact path="/Cart" component={CartItems}/>

          <Route exact path="/Login" component={() => <Login />} />

          <Route exact path="/Register" component={() => <Register />} />
        </main>

        {/* <footer></footer> */}
      </div>
    </Router>
  );
}

export default App;
