"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const router = useRouter();
  const [info, setInfo] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(info);
    try {
      const res = await signIn("credentials", {
        email: info.email,
        password: info.password,
        redirect: false,
      });
      if (res.error) {
        toast.error("Invalid credentials");
        return;
      } else {
        toast.success("Login successful");
        router.push("/");
        router.replace("/");
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
            <p className="text-gray-500">Not a member?</p>
            <Link href="/register" className="text-blue-700 font-bold">
              Register
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
                required
                value={info.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
              />
              <label className="text-md ">Password</label>
              <input
                id="password"
                name="password"
                type="text"
                autoComplete="email"
                required
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div className="flex justify-between text-sm">
                <span>Remember Me</span>
                <span className="text-blue-600 font-lato font-bold">
                  Forgot password?
                </span>
              </div>
              <button type="submit" className="btn btn-primary ">
                Sign in
              </button>
            </form>
          </div>

          <span>Or continue with</span>
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
