import React, { useState, useEffect } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Change background color after 50px scroll
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`flex justify-between px-16 h-24 z-10 w-screen items-center fixed top-0 left-0 transition-all duration-300 ${isScrolled
                ? "bg-white shadow-md text-slate-900"
                : "text-white"
                }`}
            style={{
                "--underline-color": isScrolled
                    ? "black"
                    : "white",
            }}
        >
            {/* Left Section */}
            <div className="flex gap-6 font-sans font-semibold text-lg ">
                <p className={`mr-6 font-extrabold italic ${isScrolled ? "text-slate-500" : "text-slate-200"}`}>soudemy</p>
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/shop" className="nav-link">
                    Shop
                </Link>
                <Link to="/aboutus" className="nav-link">
                    About Us
                </Link>
                <Link to="/blog" className="nav-link">
                    Blog
                </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-10">
                <IoSearch className="h-6 w-6 cursor-pointer hover:scale-105 hover:opacity-80" />
                <BiShoppingBag className="h-6 w-6 cursor-pointer hover:scale-105 hover:opacity-80" />
                <GiHamburgerMenu className="h-6 w-6 cursor-pointer hover:scale-105 hover:opacity-80" />
            </div>
        </div>
    );
};

export default NavBar;
