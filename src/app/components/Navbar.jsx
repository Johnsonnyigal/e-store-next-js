import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300 ">
          <Link href="/" className="btn btn-ghost text-lg font-bold">
            E-STORE
          </Link>
          <ul className="flex">
            <Link href="/cart" className="btn btn-ghost rounded-btn">
              Cart
            </Link>
            <Link href="/signin" className="btn btn-success text-white">
              Sign in
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
