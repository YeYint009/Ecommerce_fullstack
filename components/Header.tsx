"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Form from "next/form";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between px-4 py-2">
      <div className="flex w-full flex-wrap justify-between items-center">
        <Link href="/" className="cursor-pointer mx-auto sm:mx-0">
          <Image src="/logo.png" alt="logo" width={110} height={12} />
        </Link>
        {/* Center Query */}
        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            name="query"
            type="text"
            placeholder="Search for products"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl"
          />
        </Form>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1">
          <Link
            href="/cart"
            className=" flex-1 relative flex gap-2 justify-center sm:flex-none sm:justify-start items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          >
            <ShoppingCart className="w-5 h-5" />
            <span>My Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
