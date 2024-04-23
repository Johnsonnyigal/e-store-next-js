import { connectDB } from "../../../../../config/connectDB";
import Product from "@/models/Product";

export const DELETE = async (request, product) => {
  await connectDB();
  const productId = product.params.productId;

  try {
    await Product.findByIdAndDelete(productId);

    return new Response(
      JSON.stringify({ message: "Product deleted successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};
