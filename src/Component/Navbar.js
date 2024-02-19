import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/authSlice";
import { FaFilterCircleDollar } from "react-icons/fa6";

const NavBar = () => {
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);

  const logOutBtn = () => {
    dispatch(logout(false));
    window.localStorage.clear();
    navigate("/");
  };
  const sidebarHandler = () => {
    let id = document.getElementById("sidebar");
    let bg = document.getElementById("bg");
    let body = document.querySelector("body");
    if (active) {
      id.style.left = "0";
      bg.style.left = "0";
      body.style.overflow = "hidden";
      setActive(false);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      id.style.left = "-150%";
      bg.style.left = "-150%";
      body.style.overflow = "";
      setActive(true);
    }
  };
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 shadow-lg fixed top-0 right-0 w-full z-50">
      <div className="flex items-center justify-between w-11/12 mx-auto place-items-center ">
        <div className="flex justify-center gap-x-2 sm:gap-x-5 md:gap-x-5 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-5 items-center">
          <Link className="md:text-3xl sm:text-2xl text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl !font-extrabold text-white">
            <FaFilterCircleDollar onClick={sidebarHandler} />
          </Link>
          <Link to="/home" className="md:text-2xl text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold text-white">
            Shopsy
          </Link>
        </div>
        <h2 className="md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold text-center hidden sm:hidden md:block lg:block xl:block 2xl:block 3xl:block">
          Welcome to the Shopsy App
        </h2>
        <div className="flex items-center space-x-4 ">
          <Link to="/cart" className="hover:text-gray-300">
            <span className="font-bold relative fa-solid fa-cart-shopping text-xl">
              <i className="before:absolute before:w-5 before:h-5 before:bg-purple-500 before:border-2 before:rounded-full before:-right-1 before:-top-3 "></i>
              <span className="absolute left-3 -top-2 text-xs text-white "> {items.length}</span>
            </span>
          </Link>
          <button
            onClick={logOutBtn}
            className="flex items-center px-3 py-3 text-white bg-indigo-600 hover:bg-orange-600 rounded-full focus:outline-none focus:shadow-outline-blue">
            <p className="hidden sm:block md:block lg:block xl:block 2xl:block">Logout</p>
            <i className="fas fa-sign-out-alt ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
