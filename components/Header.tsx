"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Form from "next/form";
import { ShoppingCart, ShoppingBag, Users } from "lucide-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";


const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between px-4 py-2">
      <div className="flex w-full flex-wrap justify-between items-center">
        <Link href="/" className="cursor-pointer mx-auto sm:mx-0">
          <Image src="/logo.png" alt="logo" width={120} height={20} />
        </Link>
        {/* Center Query */}
        <Form
          action="/search"
          scroll={false}
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            name="query"
            type="text"
            placeholder="Search for products"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full"

          />
          
        </Form>
        <div className="flex items-center justify-end space-x-2 mt-4 sm:mt-0 flex-1">
          <div className="flex items-center gap-4 xl:gap-8 justify-end">
            <ClerkLoading>
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedIn>
                <div className="flex space-x-2">
                
                <Link
                  href="/cart"
                  className=" flex-1 relative flex gap-1 justify-center sm:flex-none sm:justify-start items-center  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>My Cart</span>
                </Link>
                
                <Link
                  href="/myOrders"
                  className=" flex-1 relative flex gap-1 justify-center sm:flex-none sm:justify-start items-center  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>My order</span>
                </Link>
                </div>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <div className="flex items-center gap-2 text-sm">
                  <Image src="/login.png" alt="" width={20} height={20} />
                  <Link href="/sign-in">Login/Register</Link>
                </div>
              </SignedOut>
            </ClerkLoaded>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
