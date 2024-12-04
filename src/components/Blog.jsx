import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsChatSquareDots } from "react-icons/bs";
import { PiHeartLight, PiLessThanThin } from "react-icons/pi";
import Button from "./Button";
import mockBlogs from "../data/blogData";

const Blog = () => {
  const { id } = useParams(); // Extract the blog ID from the URL
  const navigate = useNavigate()
  console.log(id);

  const [currentBlogId, setCurrentBlogId] = useState(id || mockBlogs[0]?.id);
  console.log(currentBlogId, "sdfsdf");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const mainContentRef = useRef(null); // Reference for smooth scrolling

  // Update `currentBlogId` whenever the `id` in the URL changes
  useEffect(() => {
    if (id) setCurrentBlogId(id);
  }, [id]);

  // Automatically update `selectedCategory` based on the current blog
  useEffect(() => {
    const blog = mockBlogs.find((b) => b.id === currentBlogId);
    if (blog) setSelectedCategory(blog.category);
  }, [currentBlogId]);

  // Scroll to the top of the blog content
  useEffect(() => {
    if (mainContentRef.current) {
      const navbarHeight = 80; // Adjust as needed for your navbar
      const mainContentPosition = mainContentRef.current.offsetTop;
      window.scrollTo({
        top: mainContentPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  }, [currentBlogId]);

  // Calculate blog counts by category
  const categoryCounts = mockBlogs.reduce(
    (counts, blog) => {
      counts[blog.category] = (counts[blog.category] || 0) + 1;
      counts["All"] += 1;
      return counts;
    },
    { All: 0 }
  );

  // Filter blogs by the selected category
  const filteredBlogs = useMemo(() => {
    return selectedCategory === "All"
      ? mockBlogs
      : mockBlogs.filter((blog) => blog.category === selectedCategory);
  }, [selectedCategory]);

  // Find the current blog
  const currentBlog = mockBlogs.find((blog) => blog.id.toString() === currentBlogId.toString());
  console.log(currentBlog, "ddddddddddd", currentBlogId);


  // Handle missing blog (404 handling)
  if (!currentBlog) {
    return <div className="text-center mt-24">Blog Not Found</div>;
  }

  // Calculate Next and Previous Blog
  const currentIndex = mockBlogs.findIndex((blog) => blog.id.toString() === id?.toString());
  const nextBlog = currentIndex < mockBlogs.length - 1 ? mockBlogs[currentIndex + 1] : null;
  const previousBlog = currentIndex > 0 ? mockBlogs[currentIndex - 1] : null;

  // Handle Next and Previous Navigation
  const handleNavigate = (blogId) => {
    navigate(`/blog/${blogId}`); // Update the URL
  };

  // Find a recent similar blog
  const recentSimilarBlog = mockBlogs.find(
    (blog) => blog.category === currentBlog?.category && blog.id !== currentBlog?.id
  );

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const firstBlogInCategory = mockBlogs.find((blog) => blog.category === category)?.id;
    setCurrentBlogId(firstBlogInCategory);
  };

  return (
    <div className="grid grid-cols-8 min-h-screen w-full mt-24 p-16 pt-6 gap-10" ref={mainContentRef}>
      {/* Main Content */}
      <div className="col-span-6">
        <div className="space-y-5 pb-12 border-black border-b">
          {/* Blog Main Image */}
          <img
            src={currentBlog.image || "default-image.jpg"}
            alt={currentBlog.title || "Blog Image"}
            className="w-full h-auto bg-cover"
          />
          <div className="flex items-center divide-x-2 gap-4 text-gray-400">
            <p>{currentBlog.date}</p>
            <p className="pl-4">{currentBlog.category}</p>
            <p className="pl-4">By {currentBlog.author}</p>
            <p className="pl-4">
              <PiHeartLight className="inline-block pr-1 h-full w-auto hover:scale-110" />
              {currentBlog.likes}
            </p>
            <p className="pl-4">
              <BsChatSquareDots className="inline-block pr-1 h-full w-auto hover:scale-110" />
              {currentBlog.comments}
            </p>
          </div>
          <h2 className="font-semibold text-xl">{currentBlog.title}</h2>
          <p className="font-light text-gray-400">{currentBlog.description}</p>
          <p className="font-bold !mt-10">
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa libero... ”
          </p>

          {/* Related Images */}
          <div className="flex gap-10">
            {currentBlog.relatedImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Related ${index}`}
                className="h-64 w-auto object-fill"
              />
            ))}
          </div>
        </div>

        {/* Navigation for Next and Previous Blogs */}
        <div className="flex justify-center h-28">
          {!previousBlog ? <div className="w-[50%]"></div> : (
            <div
              className="w-[50%] h-full flex gap-10 items-center cursor-pointer"
              onClick={() => handleNavigate(previousBlog.id)}
            >
              <PiLessThanThin className="bg-gray-200 h-12 w-12 text-lg px-2" />
              <div className="h-full w-full flex flex-col justify-between py-4">
                <p className="text-xl font-bold">{previousBlog.title}</p>
                <button className="text-gray-400 w-fit">Back</button>
              </div>
            </div>
          )}
          {!nextBlog ? <div className="w-[50%]"></div> : (
            <div
              className="w-[50%] h-full flex gap-10 items-center cursor-pointer"
              onClick={() => handleNavigate(nextBlog.id)}
            >
              <div className="h-full w-full flex flex-col justify-between py-4">
                <p className="text-xl font-bold">{nextBlog.title}</p>
                <button className="text-gray-400 w-fit">Next</button>
              </div>
              <PiLessThanThin className="rotate-180 bg-gray-200 h-12 w-12 text-lg px-2" />
            </div>
          )}
        </div>

        {/* Post a Comment */}
        <div className="space-y-4 w-full font-bold !mt-8">
          <h2 className="text-xl text-gray-400">Post a comment</h2>
          <textarea rows={5} placeholder="Your comment" className="p-4 border w-[80%] border-gray-500" />
          <input type="text" placeholder="Your Name" className="w-[80%] border p-4 border-gray-500" />
          <input type="text" placeholder="Your Email" className="w-[80%] border p-4 border-gray-500" />
          <input type="text" placeholder="Website" className="w-[80%] border p-4 border-gray-500" />
          <div className="flex gap-4">
            <input type="checkbox" name="checked" id="" />
            <p className="text-sm text-gray-400 font-normal">
              Save my name, email, and website in this browser for the next time I comment.
            </p>
          </div>
          <Button className="bg-black text-white !mt-6" text="Submit" hasArrow={false} />
        </div>
      </div>

      {/* Sidebar */}
      <div className="col-span-2 p-4 pt-0 text-gray-400">
        <input
          type="text"
          className="w-full mb-6 p-2 border focus:ring-1 ring-gray-600 outline-0 hover:ring-1"
          placeholder="Search blogs..."
        />
        {/* Recent Similar Blog */}
        {recentSimilarBlog && (
          <div className="space-y-5 w-full cursor-pointer" onClick={() => navigate(`/blog/${recentSimilarBlog.id}`)}>
            <h2 className="font-semibold text-gray-900">Recent Similar Blog</h2>
            <img src={recentSimilarBlog.image} className="w-full h-auto" alt={recentSimilarBlog.title} />
            <h3 className="text-lg font-semibold text-gray-900">{recentSimilarBlog.title}</h3>
            <p className="text-gray-500 text-sm">{recentSimilarBlog.description.slice(0, 60)}...</p>
          </div>
        )}

        {/* Categories */}
        <h2 className="font-semibold text-lg mt-4 mb-2 text-gray-900">Category</h2>
        <ul className="mb-6 space-y-4">
          {mockBlogs.reduce(
            (acc, blog) => {
              acc[blog.category] = (acc[blog.category] || 0) + 1;
              acc["All"] += 1;
              return acc;
            },
            { All: 0 }
          ) &&
            Object.entries(categoryCounts).map(([category, count]) => (
              <li
                key={category}
                className={`cursor-pointer ${selectedCategory === category ? "font-bold text-gray-900" : "text-gray-500"
                  }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category} ({count})
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
