import Link from "next/link";
import AdminDashboard from "@/app/components/AdminDashboard";
import AddProduct from "@/app/components/AddProduct";
import Products from "@/app/components/Products";

const page = () => {
  return (
    <>
      <AdminDashboard title="List of Products" CenterProp={Products} />
    </>
  );
};

export default page;
