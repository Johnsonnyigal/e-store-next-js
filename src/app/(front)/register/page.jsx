"use client";
import Link from "next/link";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const [fields, setFields] = useState({ email: "", password: "" });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email", fields.email);
      formData.append("password", fields.password);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/users`,
        {
          method: "POST",
          body: formData,
        }
      );
      console.log(response);
      if (response.ok) {
        toast.success("Successfully created the user!");
      } else {
        toast.error("User already exists");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <main>
      <Toaster />
      <section className="flex justify-between  mt-8 font-lato">
        <div className="col-span-3"></div>
        <div className="col-span-6 items-center">
          <h1 className="font-bold text-2xl ">Sign in to your account</h1>
          <div className="font-lato mt-4 flex gap-2">
            <p className="text-gray-500">A member?</p>
            <Link href="/signin" className="text-blue-700 font-bold">
              Login
            </Link>
          </div>
          <div className="mt-8">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <label className="text-md">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={fields.email}
                onChange={handleFieldChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
              />
              <label className="text-md ">Password</label>
              <input
                id="password"
                name="password"
                type="text"
                autoComplete="email"
                value={fields.password}
                onChange={handleFieldChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />

              <button type="submit" className="btn btn-primary mt-6">
                Register
              </button>
            </form>
          </div>

          <span className="flex justify-center">Or continue with</span>
          <div className="flex justify-between">
            <p>Google</p>
            <p>Github</p>
          </div>
        </div>
        <div className="col-span-3"></div>
      </section>
    </main>
  );
}
