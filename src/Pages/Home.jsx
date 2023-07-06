import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import Feedback from "../Components/Feedback";
import Chefs from "./Chefs";
import ChefRecipes from "./ChefRecipes";
import RecipesDetails from "./RecipesDetails";
import Blogs from "./Blogs";
import { useLoaderData } from "react-router-dom";
import Loader from "../Components/Loader";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://receee.onrender.com/chefs/");
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  let content;
  if (loading) {
    content = (
      <div className=" gap-3 my-3">
        {" "}
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  } else {
    content = (
      <div className="grid md:grid-cols-3 mx-10 justify-items-center ">
        {data?.map((c) => (
          <Chefs chef={c} />
        ))}
      </div>
    );
  }
  return (
    <div className="">
      <h1 className="font-bold text-4xl text-center mt-10 ">
        Welcome at <br /> BLACK CUMIN BANGLADESH
      </h1>
      <Banner />

      <div className=" gap-5 gap-x-4 gap-y-8 ">
      <h1 className="font-bold text-4xl text-center mt-10 mb-10">
        All CHEF'S FOR <br /> BLACK CUMIN BANGLADESH
      </h1>

      {content}
      </div>

      <h1 className="font-bold text-4xl text-center mt-10 mb-10">
        FEEDBACK CORNER
      </h1>
      <Feedback />
      <div className="">
      <h1 className="font-bold text-4xl text-center mt-10 mb-10 ">
        MENU CORNER
      </h1>
      <Menu/>
      </div>

    </div>
  );
}
