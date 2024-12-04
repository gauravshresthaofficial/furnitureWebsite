import React, { useState } from "react";
import { BsChatSquareDots } from "react-icons/bs";
import { PiHeartLight } from "react-icons/pi";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import mockBlogs from "../data/blogData";

const categories = ["All", "Ceiling", "Floor", "LED", "Modern", "Retro", "Wood"];


const BlogCard = ({ blog }) => {
    const navigate = useNavigate(); // Moved useNavigate inside component

    return (
        <div className="space-y-5 pb-12 border-black border-b">
            <img src={blog.image} alt={blog.title} className="w-full h-auto bg-cover" />
            <div className="flex items-center divide-x-2 gap-4 text-gray-400">
                <p>{blog.date}</p>
                <p className="pl-4">{blog.category}</p>
                <p className="pl-4">By {blog.author}</p>
                <p className="pl-4">
                    <PiHeartLight className="inline-block pr-1 h-full w-auto hover:scale-110" />
                    {blog.likes}
                </p>
                <p className="pl-4">
                    <BsChatSquareDots className="inline-block pr-1 h-full w-auto hover:scale-110" />
                    {blog.comments}
                </p>
            </div>
            <h2 className="font-semibold text-xl">{blog.title}</h2>
            <p className="font-light text-gray-400 line-clamp-3">{blog.description}</p>
            <p
                className="underline cursor-pointer duration-100 text-gray-400 hover:text-gray-700"
                onClick={() => navigate(`/blog/${blog.id}`)} // Updated to navigate to a dynamic blog page
            >
                Read More
            </p>
        </div>
    );
};


const Blogs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const blogsPerPage = 2;
    const navigate = useNavigate()

    const recentBlogs = mockBlogs.slice(0, 3);

    const handleNavigate = (id) => {
        navigate(`/blog/${id}`);
    }

    // Calculate blog counts by category
    const categoryCounts = mockBlogs.reduce(
        (counts, blog) => {
            counts[blog.category] = (counts[blog.category] || 0) + 1;
            counts["All"] += 1;
            return counts;
        },
        { All: 0 }
    );

    // Filter and paginate blogs
    const filteredBlogs =
        selectedCategory === "All"
            ? mockBlogs
            : mockBlogs.filter((blog) => blog.category === selectedCategory);

    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    const paginatedBlogs = filteredBlogs.slice(
        (currentPage - 1) * blogsPerPage,
        currentPage * blogsPerPage
    );

    const handlePageChange = (page) => setCurrentPage(page);
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    return (
        <div className="grid grid-cols-8 min-h-screen w-full mt-24 p-16 pt-6 gap-10">
            {/* Main Content */}
            <div className="col-span-6">
                {paginatedBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}

                {/* Pagination */}
                <div className="flex justify-center items-center mt-10">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-3 py-1 mx-1 hover:scale-110 ${currentPage === index + 1 ? "text-gray-900 font-bold" : "text-gray-500"
                                } rounded-md`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-2 p-4 pt-0 text-gray-400">
                <input
                    type="text"
                    className="w-full mb-6 p-2 border focus:ring-1 ring-gray-600 outline-0 hover:ring-1"
                    placeholder="Search products..."
                />

                {/* Categories */}
                <h2 className="font-semibold text-lg mt-4 mb-2 text-gray-900">Category</h2>
                <ul className="mb-6 space-y-4">
                    {Object.entries(categoryCounts).map(([category, count]) => (
                        <li
                            key={category}
                            className={`cursor-pointer ${selectedCategory === category ? "text-gray-900 font-bold" : "text-gray-500"
                                }`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {`${category} (${count})`}
                        </li>
                    ))}
                </ul>

                {/* Recent Posts */}
                <h2 className="font-semibold text-lg mt-4 mb-2 text-gray-900">Recent posts</h2>
                <div className="space-y-3">
                    {recentBlogs.map((blog) => (
                        <p onClick={() => handleNavigate(blog.id)} className="cursor-pointer hover:text-gray-500 hover:font-bold">{blog.title}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
