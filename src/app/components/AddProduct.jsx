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

      await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/products`, {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    router.push("/admin/products");
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4 py-4 px-3">
      <div className="flex flex-col gap-3">
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

        <button
          type="submit"
          className=" bg-blue-700 justify-start w-16 text-white rounded-md py-2 px-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
