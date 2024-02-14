import React, { useState } from "react";
import ProductList from "../Component/ProductsList";
import NavBar from "../Component/Navbar";
// import Footer from "../Footer/Footer";
import Bot from "../Component/Bot";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [found, setFound] = useState(true);
  const searchProduct = (e) => {
    setSearchTerm(e.target.value);
  };
  const handler = () => {
    let bot = document.getElementById("bot");
    if (found) {
      bot.style.rotate = "-180deg";
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
      setFound(false);
    } else {
      bot.style.rotate = "0deg";
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setFound(true);
    }
  };

  return (
    <>
      <NavBar />
      <section className=" relative top-20 w-4/5 mx-auto mb-20 mt-3">
        <div className="flex justify-between items-center mx-auto rounded-lg shadow-md shadow-purple-600">
          <input
            className="w-full outline-none text-lg py-6 pl-6 rounded-xl text-gray-600 line-clamp-1"
            type="text"
            placeholder="Search Your preferred Items here"
            onChange={(e) => searchProduct(e)}
          />
        </div>
      </section>
      <ProductList searchTerm={searchTerm} />
      {/* <div className="sticky right-0 w-full mt-10">
        <Footer />
      </div> */}
      <Bot handler={handler} />
    </>
  );
};

export default Home;
