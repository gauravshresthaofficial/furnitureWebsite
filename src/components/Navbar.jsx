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

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/shop", label: "Shop" },
        { path: "/aboutus", label: "About Us" },
        { path: "/blog", label: "Blog" }
    ];

    return (
        <div
            className={`flex justify-between px-16 h-24 z-10 w-screen items-center fixed top-0 left-0 transition-all duration-300 ${isScrolled
                ? isHomePage
                    ? "bg-white shadow-md text-slate-900"
                    : "text-gray-900 bg-white"
                : isHomePage
                    ? "text-white"
                    : "text-gray-900"
                }`}
            style={{
                "--underline-color": isScrolled
                    ? "black"
                    : isHomePage
                        ? "white"
                        : "black",
            }}
        >
            {/* Left Section */}
            <div className="flex gap-6 font-sans text-lg ">
                <p className={`mr-6 font-extrabold italic ${isScrolled ? isHomePage ? "text-slate-500" : "text-slate-700" : isHomePage ? "text-slate-200" : "text-gray-500"}`}>soudemy</p>
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`nav-link ${location.pathname === link.path ? "font-bold" : ""}`}
                    >
                        {link.label}
                    </Link>
                ))}
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
