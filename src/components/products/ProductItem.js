import React from "react";
import { useRecoilState } from "recoil";
import { productState } from "../../recoil/productRecoil";
import { Link } from "react-router-dom";
import View from "../layout/View";

const PrpductItem = (props) => {
  const { product } = props;
  const [products, setProducts] = useRecoilState(productState);

  const deleteProduct = (id) => {
    const new_products = products.filter((prod) => prod.id !== id);
    setProducts(new_products);
  };

  return (
    <View>
      <div className="has-text-centered">
        <div className="box box__custom">
          <Link
            to={`/edit/${product.id}`}
            className="button button-edit is-warning"
          >
            edit
          </Link>
          <button
            onClick={() => deleteProduct(product.id)}
            className="button button-delete is-danger"
          >
            delete
          </button>
          <h1 className="title is-1">{product.picture}</h1>
          <h2 className="subtitle is-5">{product.name}</h2>
          <span className="tag">Rs. {product.price}/kg</span>
        </div>
      </div>
    </View>
  );
};

export default PrpductItem;
