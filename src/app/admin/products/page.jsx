import AdminDashboard from "@/app/components/AdminDashboard";

import Products from "@/app/components/Products";

const page = () => {
  return (
    <>
      <AdminDashboard title="List of Products" CenterProp={Products} />
    </>
  );
};

export default page;
