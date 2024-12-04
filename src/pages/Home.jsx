import React, { useState } from "react";
import { PiClockThin, PiCreditCardThin, PiHandbagThin, PiKeyReturnThin, PiLessThanThin } from "react-icons/pi";
import Button from "../components/Button";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import arrowRight from '/arrow-right.png'
import { useNavigate } from "react-router-dom";
import mockBlogs from "../data/blogData";
import testimonialData from "../data/testimonialData";

const LastBlogCard = ({ blog }) => {
    const navigate = useNavigate()
    // console.log(blog);
    // console.log(1);

    return (

        <div className="flex flex-col justify-center items-center gap-2 text-slate-800">
            <div className="relative w-full aspect-square">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <p className="text-slate-400 font-light text-sm">
                {blog.date} / by {blog.author}
            </p>
            <h3 className="capitalize text-lg font-bold text-center">
                {blog.title}
            </h3>
            <button
                className="underline underline-offset-4 opacity-65 hover:opacity-100 hover:scale-105 cursor-pointer duration-100"
                onClick={() => navigate(`/blog/${blog.id}`)}
            >
                read more
            </button>
        </div>
    )
}

const Home = () => {
    const navigate = useNavigate()
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const nextTestimonial = () => {
        // Go to next testimonial, looping back to the start if at the last one
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    };

    const prevTestimonial = () => {
        // Go to previous testimonial, looping back to the last one if at the first
        setCurrentTestimonialIndex(
            (prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length
        );
    };

    const handleViewMore = () => {
        navigate('/shop'); // This will correctly navigate to the /shop page
    }

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="min-h-dvh pr-16 pl-24 bg-hero-pattern bg-cover bg-center bg-no-repeat flex items-center justify-center w-full">
                <div className="flex flex-col items-center gap-6 text-white">
                    <h1 className="text-5xl font-bold capitalize">All for your home</h1>
                    <p className="w-[30dvw] text-center text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                        dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                    </p>
                    <Button onClick={handleViewMore} />
                </div>
            </div>

            {/* Product of the Week Section */}
            <div className="max-h-screen w-full flex flex-col justify-center items-center gap-6 text-slate-900">
                <h2 className="capitalize text-4xl font-bold">Product of the week</h2>
                <p className="max-w-xl text-center text-lg leading-tight text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                    dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                </p>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 w-full max-w-6xl">
                    {/* Card 1 */}
                    <div className="flex flex-col justify-center items-center gap-2 text-slate-800">
                        <img
                            src="/saleimage.png"
                            alt="Pot"
                            className="w-full object-cover"
                        />
                        <h3 className="text-lg font-bold">Pot</h3>
                        <p>$222.22</p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col justify-center items-center gap-2 text-slate-800">
                        <img
                            src="/newimage.png"
                            alt="Lamp"
                            className="w-full object-cover"
                        />
                        <h3 className="text-lg font-bold">Lamp</h3>
                        <p>$123.45</p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col justify-center items-center gap-2 text-slate-800">
                        <img
                            src="/soldimage.png"
                            alt="Chair"
                            className="w-full object-cover"
                        />
                        <h3 className="text-lg font-bold">Chair</h3>
                        <p>$333.33</p>
                    </div>
                </div>
            </div>



            {/* details section */}
            <div className="h-screen pt-20 w-full overflow-hidden flex flex-col">
                <div className="h-[36%] relative">
                    <img src="/lamp.png" alt="" className="object-cover h-full w-full" />
                    <div className="absolute top-[50%] -translate-y-1/2 right-16 flex items-center flex-col gap-4">
                        <p className="w-[40dvw] text-center text-lg text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                        </p>
                        <Button className="text-white" onClick={handleViewMore} />
                    </div>
                </div>

                <div className="grow">
                    <img src="/room.png" alt="" className="object-cover w-screeen  h-full" />

                </div>

            </div>

            {/* single product */}
            <div className="flex flex-col">
                <div className="flex justify-around items-center max-min-h-dvh w-full px-16 pt-24">
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="text-5xl font-bold capitalize">stylish chairs</h1>
                        <p className="w-[30dvw] text-center text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                        </p>
                        <Button className="text-black border-black" onClick={handleViewMore} />
                    </div>

                    <img src="/chair.png" alt="" className="w-[40%] h-auto text-center" />

                </div>
                <div className="flex justify-around items-center max-min-h-dvh w-full px-16 pt-24">
                    <img src="/table.png" alt="" className="w-[40%] h-auto text-center" />
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="text-5xl font-bold capitalize">Table</h1>
                        <p className="w-[30dvw] text-center text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                        </p>
                        <Button className="text-black border-black" onClick={handleViewMore} />
                    </div>


                </div>
                <div className="flex justify-around items-center max-min-h-dvh w-full px-16 pt-24">
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="text-5xl font-bold capitalize">contemporary lamps</h1>
                        <p className="w-[30dvw] text-center text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                        </p>
                        <Button className="text-black border-black" onClick={handleViewMore} />
                    </div>

                    <img src="/c_lamp.png" alt="" className="w-[40%] h-auto text-center" />

                </div>
            </div>

            <div className="h-52 bg-slate-200 mt-24 flex items-center justify-center gap-20">
                <h2 className="text-3xl ">order now for an{" "}
                    <span className="font-semibold text-slate-800">
                        express delivery in 24h !
                    </span>
                </h2>
                <Button className="border-black" onClick={handleViewMore} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl px-16 mx-auto text-slate-600">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <PiClockThin className="w-10 h-auto" />
                        <h2 className="grow text-2xl font-bold text-center">Shope online</h2>
                    </div>
                    <p className="overflow-clip text-justify line-clamp-3 font-thin tracking-tighter text-slate-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed beatae recusandae quasi labore facere ipsa, saepe vero cum deleniti nisi, ex repudiandae ratione, quas optio nostrum vitae eveniet tempore minus.
                    </p>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <PiHandbagThin className="w-10 h-auto" />
                        <h2 className="grow text-2xl font-bold text-center">Free Shipping</h2>
                    </div>
                    <p className="overflow-clip text-justify line-clamp-3 font-thin tracking-tighter text-slate-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed beatae recusandae quasi labore facere ipsa, saepe vero cum deleniti nisi, ex repudiandae ratione, quas optio nostrum vitae eveniet tempore minus.
                    </p>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <PiKeyReturnThin className="w-10 h-auto" />
                        <h2 className="grow text-2xl font-bold text-center">Return Policy</h2>
                    </div>
                    <p className="overflow-clip text-justify line-clamp-3 font-thin tracking-tighter text-slate-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed beatae recusandae quasi labore facere ipsa, saepe vero cum deleniti nisi, ex repudiandae ratione, quas optio nostrum vitae eveniet tempore minus.
                    </p>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <PiCreditCardThin className="w-10 h-auto" />
                        <h2 className="grow text-2xl font-bold text-center">Payment</h2>
                    </div>
                    <p className="overflow-clip text-justify line-clamp-3 font-thin tracking-tighter text-slate-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed beatae recusandae quasi labore facere ipsa, saepe vero cum deleniti nisi, ex repudiandae ratione, quas optio nostrum vitae eveniet tempore minus.
                    </p>
                </div>
            </div>

            {/* blog section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-6xl px-16 w-full mx-auto grow">
                {mockBlogs.slice(0, 2).map((blog) => (
                    <LastBlogCard key={blog.id} blog={blog} />
                ))}


            </div>



            {/* Testimonial Section */}
            <div className="bg-slate-300 h-80 w-full flex justify-between px-16">
                {/* Left Arrow */}
                <div className="flex justify-center items-center">
                    <img
                        src={arrowRight}
                        alt="Left Arrow"
                        className="h-10 hover:scale-110 duration-100 cursor-pointer"
                        onClick={prevTestimonial}
                    />
                </div>

                {/* Testimonial Content */}
                <div className="flex flex-col items-center justify-center max-w-xl">
                    <BiSolidQuoteAltLeft className="mb-6 h-8 w-auto" />
                    <p className="text-slate-500 font-light text-center">
                        {testimonialData[currentTestimonialIndex].quote}
                    </p>
                    <h3 className="text-lg font-bold text-center mt-4">
                        {testimonialData[currentTestimonialIndex].name}
                    </h3>
                    <p className="text-sm">{testimonialData[currentTestimonialIndex].role}</p>
                </div>

                {/* Right Arrow */}
                <div className="flex justify-center items-center">
                    <img
                        src={arrowRight}
                        alt="Right Arrow"
                        className="rotate-180 h-10 hover:scale-110 duration-100 cursor-pointer"
                        onClick={nextTestimonial}
                    />
                </div>
            </div>



        </div >
    );
};

export default Home;
