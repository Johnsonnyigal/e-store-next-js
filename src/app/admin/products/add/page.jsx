import AddProduct from "@/app/components/AddProduct";
import AdminDashboard from "@/app/components/AdminDashboard";

const page = () => {
  return (
    <div>
      <AdminDashboard title="Add Product Page" CenterProp={AddProduct} />
    </div>
  );
};

export default page;
