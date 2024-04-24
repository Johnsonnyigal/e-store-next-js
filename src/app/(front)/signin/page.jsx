import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <main>
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
            <form className="flex flex-col space-y-2">
              <label className="text-md">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
              />
              <label className="text-md ">Password</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
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
