import React from "react";
import { filterProducts } from "../../recoil/productRecoil";
import { useRecoilValue } from "recoil";
import ProductItem from "./ProductItem";

const Products = () => {
  const products = useRecoilValue(filterProducts);
  return (
    <div className="columns is-multiline">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
