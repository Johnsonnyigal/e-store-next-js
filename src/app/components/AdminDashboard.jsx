import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

const AdminDashboard = ({ title, CenterProp }) => {
  return (
    <div className="min-h-screen space-x-2 mt-4">
      <header className="flex justify-between py-6 px-3">
        <div className="flex items-center gap-2 justify-center ">
          <Image src="/Ellipse.svg" alt="logo" height={45} width={45} />
          <Image src="/logo.svg" alt="" height={100} width={160} />
        </div>
        <form className="bg-white rounded-md ">
          <div className="flex items-center rounded-md gap-2 justify-center">
            <FaSearch size={20} color="gray" />
            <input
              type="text"
              placeholder="Search or type a command"
              className="px-2 py-1 placeholder:bg-grey-500 "
            />
          </div>
        </form>
        <div className="flex items-center gap-4 font-lato font-bold">
          <button className="bg-blue-600 text-white px-4 rounded-md min-h-[30px]">
            + Create
          </button>
          <CiBellOn size={30} />
          <GoPencil size={26} />

          <Image
            src="/images/adm.png"
            alt=""
            height={40}
            width={40}
            className="rounded-full aspect-square object-fill"
          />
        </div>
      </header>

      <main className="grid  grid-cols-12 min-h-screen">
        <div className="col-span-2 bg-white ">
          <ul className="flex flex-col space-y-6 m-2 font-lato font-medium">
            <button className="flex gap-2 items-center">
              <Image src="/home.svg" alt="" height={20} width={20} />
              <Link href="/admin">Home</Link>
            </button>
            <button className="flex gap-2 items-center">
              <Image src="/product.svg" alt="" height={20} width={20} />
              <Link href="/admin/products">Products</Link>
            </button>
            <button className="flex gap-2 items-center">
              <Image src="/customer.svg" alt="" height={20} width={20} />
              <a>Customers</a>
            </button>
            <button className="flex gap-2 items-center">
              <Image src="/shop.svg" alt="" height={20} width={20} />
              <a>Shop</a>
            </button>
            <button className="flex gap-2 items-center">
              <Image src="/income.svg" alt="" height={20} width={20} />
              <a>Income</a>
            </button>
          </ul>
        </div>
        <div className="bg-gray-100 col-span-10 font-lato">
          <h1 className="font-lato font-bold text-3xl py-2 px-4">{title}</h1>
          <div>
            <CenterProp />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
