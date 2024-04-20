import { connectDB } from "../../../../config/connectDB";
import Product from "@/models/Product";

export const GET = async (request) => {
  try {
    await connectDB();
    const products = await Product.find({});
    return new Response(JSON.stringify(products));
  } catch (error) {
    return new Response("Something broke", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    await connectDB();

    const formData = await request.formData();
    const ProductData = {
      name: formData.get("name"),
      price: formData.get("price"),
      category: formData.get("category"),
    };
    const newProduct = new Product(ProductData);
    await newProduct.save();

    return new Response("Product created", { status: 201 });
  } catch (error) {
    console.error("Error creatning product: ", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
