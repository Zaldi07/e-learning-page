import React, { useState, Fragment } from "react";
// import { useNavigate } from "react-router-dom";
// import { SlBasket } from "react-icons/sl";
import logo from "../../asset/logo.png";
const Nav = () => {
  let [open, setopen] = useState(false);

  //   const navigate = useNavigate();

  let Links = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/Features" },
    { name: "How it Works", link: "/Features" },
    { name: "About Us", link: "/Features" },
    { name: "Testimonial", link: "/about" },
    { name: "blog", link: "/sign_up" },
  ];

  // const searchHandler = () => {
  //   console.log("Not Working Yet");
  // };

  return (
    <Fragment>
      <div className="border-2 w-full fixed top-0 right-0 left-0 z-50 ">
        <div className="lg:flex items-center justify-between w-full bg-white pt-2 lg:pt-6 pb-4 lg:px-20 px-5 ">
          <a className="font-bold text-2xl cursor-pointer w-1/5 h-full flex items-center font-inter lg:pl-12 text-gray-800" href="/">
            <img src={logo} alt="logo" className="w-1/2" />
          </a>
          <div onClick={() => setopen(!open)} className="text-3xl absolute right-8 bottom-2 rounded-lg cursor-pointer lg:hidden bg-[#0961f5ff] text-white">
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <div className="w-[60%] flex justify-center ">
            <ul
              className={`-z-20 lg:flex lg:items-center font-poppins lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "left-0" : " left-[120%]"
              }`}
            >
              {Links.map((link) => (
                <li key={link.name} className="hover:underline underline-offset-8 transition-all duration-400 lg:ml-8 text-sm lg:text-lg font-medium lg:my-0 my-7 w-">
                  <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/5 h-auto hidden lg:flex justify-center">
            <div className="flex pr-14 ">
              <button className="bg-[#0961f5ff] px-5 py-2 rounded-full text-white">Get the app </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
