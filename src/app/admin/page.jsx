"use server";
import Link from "next/link";
import AdminDashboard from "../components/AdminDashboard";
import AdminHome from "../components/AdminHome";

const page = () => {
  return (
    <>
      <AdminDashboard title="Dashboard" CenterProp={AdminHome} />
    </>
  );
};

export default page;
