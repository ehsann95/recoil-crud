import React from "react";
import "./styles/App.css";
import Home from "./components/pages/Home";
import AddProduct from "./components/products/AddProduct";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditProduct from "./components/products/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddProduct} />
        <Route exact path="/edit/:id" component={EditProduct} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
