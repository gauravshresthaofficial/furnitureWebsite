import { useState } from "react";
import { PiClockThin, PiCreditCardThin, PiHandbagThin, PiKeyReturnThin} from "react-icons/pi";
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
            <p className="font-light text-slate-400 text-sm">
                {blog.date} / by {blog.author}
            </p>
            <h3 className="font-bold text-center text-lg capitalize">
                {blog.title}
            </h3>
            <button
                className="opacity-65 hover:opacity-100 underline underline-offset-4 duration-100 cursor-pointer hover:scale-105"
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
            <div className="flex justify-center items-center bg-hero-pattern bg-cover bg-no-repeat bg-center pr-16 pl-24 w-full min-h-dvh">
                <div className="flex flex-col items-center gap-6 text-white">
                    <h1 className="font-bold text-5xl capitalize">All for your home</h1>
                    <p className="w-[30dvw] text-center text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                        dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                    </p>
                    <Button onClick={handleViewMore} />
                </div>
            </div>

            {/* Product of the Week Section */}
            <div className="flex flex-col justify-center items-center gap-6 w-full max-h-screen text-slate-900">
                <h2 className="font-bold text-4xl capitalize">Product of the week</h2>
                <p className="max-w-xl text-center text-lg text-slate-500 leading-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                    dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                </p>

                {/* Cards Section */}
                <div className="gap-10 grid grid-cols-1 md:grid-cols-3 px-6 w-full max-w-6xl">
                    {/* Card 1 */}
                    <div className="flex flex-col justify-center items-center gap-2 text-slate-800">
                        <img
                            src="/webp/saleimage.webp"
                            alt="Pot"
                            className="w-full object-cover"
                        />
                        <h3 className="font-bold text-lg">Pot</h3>
                        <p>$222.22</p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col justify-center items-center gap-2 text-slate-800">
                        <img
                            src="webp/newimage.webp"
                            alt="Lamp"
                            className="w-full object-cover"
                        />
                        <h3 className="font-bold text-lg">Lamp</h3>
                        <p>$123.45</p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col justify-center items-center gap-2 text-slate-800">
                        <img
                            src="webp/soldimage.webp"
                            alt="Chair"
                            className="w-full object-cover"
                        />
                        <h3 className="font-bold text-lg">Chair</h3>
                        <p>$333.33</p>
                    </div>
                </div>
            </div>



            {/* details section */}
            <div className="flex flex-col pt-20 w-full h-screen overflow-hidden">
                <div className="relative h-[36%]">
                    <img src="/lamp.png" alt="" className="w-full h-full object-cover" />
                    <div className="top-[50%] right-16 absolute flex flex-col items-center gap-4 -translate-y-1/2">
                        <p className="w-[40dvw] text-center text-lg text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                        </p>
                        <Button className="text-white" onClick={handleViewMore} />
                    </div>
                </div>

                <div className="grow">
                    <img src="webp/room.webp" alt="" className="w-screeen h-full object-cover" />

                </div>

            </div>

            {/* single product */}
            <div className="flex flex-col">
                <div className="flex justify-around items-center px-16 pt-24 w-full max-min-h-dvh">
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="font-bold text-5xl capitalize">stylish chairs</h1>
                        <p className="w-[30dvw] text-center text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                        </p>
                        <Button className="border-black text-black" onClick={handleViewMore} />
                    </div>

                    <img src="webp/chair.webp" alt="" className="w-[40%] h-auto text-center" />

                </div>
                <div className="flex justify-around items-center px-16 pt-24 w-full max-min-h-dvh">
                    <img src="webp/table.webp" alt="" className="w-[40%] h-auto text-center" />
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="font-bold text-5xl capitalize">Table</h1>
                        <p className="w-[30dvw] text-center text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                        </p>
                        <Button className="border-black text-black" onClick={handleViewMore} />
                    </div>


                </div>
                <div className="flex justify-around items-center px-16 pt-24 w-full max-min-h-dvh">
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="font-bold text-5xl capitalize">contemporary lamps</h1>
                        <p className="w-[30dvw] text-center text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                        </p>
                        <Button className="border-black text-black" onClick={handleViewMore} />
                    </div>

                    <img src="webp/c_lamp.webp" alt="" className="w-[40%] h-auto text-center" />

                </div>
            </div>

            <div className="flex justify-center items-center gap-20 bg-slate-200 mt-24 h-52">
                <h2 className="text-3xl">order now for an{" "}
                    <span className="font-semibold text-slate-800">
                        express delivery in 24h !
                    </span>
                </h2>
                <Button className="border-black" onClick={handleViewMore} />
            </div>

            <div className="gap-10 grid grid-cols-1 md:grid-cols-4 mx-auto px-16 max-w-6xl text-slate-600">
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <PiClockThin className="w-10 h-auto" />
                        <h2 className="font-bold text-2xl text-center grow">Shope online</h2>
                    </div>
                    <p className="line-clamp-3 font-thin text-justify text-slate-500 tracking-tighter overflow-clip">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed beatae recusandae quasi labore facere ipsa, saepe vero cum deleniti nisi, ex repudiandae ratione, quas optio nostrum vitae eveniet tempore minus.
                    </p>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <PiHandbagThin className="w-10 h-auto" />
                        <h2 className="font-bold text-2xl text-center grow">Free Shipping</h2>
                    </div>
                    <p className="line-clamp-3 font-thin text-justify text-slate-500 tracking-tighter overflow-clip">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed beatae recusandae quasi labore facere ipsa, saepe vero cum deleniti nisi, ex repudiandae ratione, quas optio nostrum vitae eveniet tempore minus.
                    </p>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <PiKeyReturnThin className="w-10 h-auto" />
                        <h2 className="font-bold text-2xl text-center grow">Return Policy</h2>
                    </div>
                    <p className="line-clamp-3 font-thin text-justify text-slate-500 tracking-tighter overflow-clip">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed beatae recusandae quasi labore facere ipsa, saepe vero cum deleniti nisi, ex repudiandae ratione, quas optio nostrum vitae eveniet tempore minus.
                    </p>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <PiCreditCardThin className="w-10 h-auto" />
                        <h2 className="font-bold text-2xl text-center grow">Payment</h2>
                    </div>
                    <p className="line-clamp-3 font-thin text-justify text-slate-500 tracking-tighter overflow-clip">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed beatae recusandae quasi labore facere ipsa, saepe vero cum deleniti nisi, ex repudiandae ratione, quas optio nostrum vitae eveniet tempore minus.
                    </p>
                </div>
            </div>

            {/* blog section */}
            <div className="gap-24 grid grid-cols-1 md:grid-cols-2 mx-auto px-16 w-full max-w-6xl grow">
                {mockBlogs.slice(0, 2).map((blog) => (
                    <LastBlogCard key={blog.id} blog={blog} />
                ))}


            </div>



            {/* Testimonial Section */}
            <div className="flex justify-between bg-slate-300 px-16 w-full h-80">
                {/* Left Arrow */}
                <div className="flex justify-center items-center">
                    <img
                        src={arrowRight}
                        alt="Left Arrow"
                        className="h-10 duration-100 cursor-pointer hover:scale-110"
                        onClick={prevTestimonial}
                    />
                </div>

                {/* Testimonial Content */}
                <div className="flex flex-col justify-center items-center max-w-xl">
                    <BiSolidQuoteAltLeft className="mb-6 w-auto h-8" />
                    <p className="font-light text-center text-slate-500">
                        {testimonialData[currentTestimonialIndex].quote}
                    </p>
                    <h3 className="mt-4 font-bold text-center text-lg">
                        {testimonialData[currentTestimonialIndex].name}
                    </h3>
                    <p className="text-sm">{testimonialData[currentTestimonialIndex].role}</p>
                </div>

                {/* Right Arrow */}
                <div className="flex justify-center items-center">
                    <img
                        src={arrowRight}
                        alt="Right Arrow"
                        className="h-10 duration-100 cursor-pointer hover:scale-110 rotate-180"
                        onClick={nextTestimonial}
                    />
                </div>
            </div>



        </div >
    );
};

export default Home;
