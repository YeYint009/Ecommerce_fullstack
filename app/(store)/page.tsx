import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import React from "react";

const Home = async () => {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return <div>Home</div>;
};

export default Home;
