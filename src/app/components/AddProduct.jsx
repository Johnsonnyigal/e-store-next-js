"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddProduct = () => {
  const router = useRouter();
  const [fields, setFields] = useState({
    name: "",
    category: "",
    price: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", fields.name);
      formData.append("category", fields.category);
      formData.append("price", fields.price);
      console.log(formData);

      await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/products`, {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    router.push("/api/products");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Product Name:
        <input
          name="name"
          type="text"
          value={fields.name}
          required
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Category Name:
        <input
          name="category"
          type="text"
          value={fields.category}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Price:
        <input
          name="price"
          type="number"
          value={fields.price}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProduct;
