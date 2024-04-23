"use client";
import Link from "next/link";
import Card from "./Card";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const handleDeleteFunc = async (productId) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        setProducts(products.filter((product) => product._id !== productId));
        console.log("Product deleted successfully");
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };
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
      <Link
        href="/admin/products/add"
        className="  bg-blue-700 rounded-md shadow-md m-2 text-white py-3 px-2 ml-8
        "
      >
        Add Product
      </Link>

      {products.map((product) => (
        <Card key={product._id} product={product} onDelete={handleDeleteFunc} />
      ))}
    </>
  );
};

export default Products;
