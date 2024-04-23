"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const HomeProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/products`,
          {
            method: "GET",
          }
        );
        const response = await res.json();
        setProducts(response);
        console.log(response);
      } catch (error) {
        console.error("Error fetching the products", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mr-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default HomeProduct;
