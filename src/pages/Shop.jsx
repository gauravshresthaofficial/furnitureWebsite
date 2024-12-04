import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import productDetails from "../data/productData";

const categories = ["All", "Ceiling", "Floor", "LED", "Modern", "Retro", "Wood"];
const colors = ["All", "Black", "Blue", "Red", "Green", "Yellow", "Grey"];

const Shop = () => {
  const [sortOption, setSortOption] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const productsPerPage = 6;

  // Ref for scrolling
  const mainContentRef = useRef(null);

  useEffect(() => {
    // Scroll to the main content and account for the navbar height
    if (mainContentRef.current) {
      const navbarHeight = 80; // Adjust this value based on your actual navbar height
      const mainContentPosition = mainContentRef.current.offsetTop;

      // Scroll to the top of the main content minus the navbar height
      window.scrollTo({
        top: mainContentPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  }, [currentPage]);


  // Filter logic
  const filteredProducts = productDetails.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesColor = selectedColor === "All" || product.color === selectedColor;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.productName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesColor && matchesPrice && matchesSearch;
  });

  // Sort logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price: low to high") return a.price - b.price;
    if (sortOption === "price: high to low") return b.price - a.price;
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to page 1
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setCurrentPage(1); // Reset to page 1
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPriceRange([0, value]); // Set only the max price based on the slider value
    setCurrentPage(1); // Reset to page 1
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to page 1
  };

  return (
    <div className="grid grid-cols-8 min-h-screen w-full mt-24 p-16 pt-6 gap-10" ref={mainContentRef}>
      {/* Main Content */}
      <div className="col-span-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <p>
            Showing {currentProducts.length} of {filteredProducts.length} results
          </p>
          <div className="relative">
            <select
              className="p-2"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="popularity">Sort by popularity</option>
              <option value="price: low to high">Price: Low to High</option>
              <option value="price: high to low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-3 gap-12">
          {currentProducts.map((product, index) => (
            <div
              key={index}
              onClick={() => navigate(`/shop/${index}`)}
              className="hover:opacity-80 duration-100 justify-items-center space-y-4"
            >
              <img
                src={product.img}
                alt={product.productName}
                className="w-full object-cover mb-2"
              />
              <h3 className="text-lg font-medium">{product.productName}</h3>
              <p className="text-gray-500">
                Rating: {Array(product.rating).fill("⭐").join(" ")}
              </p>
              <p className="text-red-600 font-semibold">${product.price}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-10">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 mx-1 hover:scale-110 ${currentPage === index + 1
                ? "text-gray-900 font-bold"
                : "text-gray-500"
                } rounded-md`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="col-span-2 p-4 pt-0">
        <input
          type="text"
          className="w-full mb-6 p-2 border focus:ring-1 ring-gray-600 outline-0 hover:ring-1"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <h2 className="font-semibold text-lg mb-4">Category</h2>
        <ul className="mb-6">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`cursor-pointer mb-2 ${selectedCategory === category ? "font-bold text-gray-900" : ""
                }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </li>
          ))}
        </ul>

        <h2 className="font-semibold text-lg mb-4">Color</h2>
        <ul className="mb-6">
          {colors.map((color, index) => (
            <li
              key={index}
              className={`cursor-pointer mb-2 ${selectedColor === color ? "font-bold text-gray-900" : ""
                }`}
              onClick={() => handleColorChange(color)}
            >
              {color}
            </li>
          ))}
        </ul>

        <h2 className="font-semibold text-lg mb-4">Price</h2>
        <div className="flex flex-col">
          <input
            type="range"
            min={0}
            max={150}
            step={1}
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-full mb-2"
          />
          <div className="flex justify-between">
            <span>$0</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
