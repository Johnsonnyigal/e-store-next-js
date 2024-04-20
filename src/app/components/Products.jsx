"use client";
import Card from "./Card";
import { useEffect, useState } from "react";

const Products = () => {
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
    <>
      <h1>Products</h1>
      <Card />
    </>
  );
};

export default Products;
