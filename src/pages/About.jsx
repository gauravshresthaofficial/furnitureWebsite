import React from 'react'
import { PiClockThin, PiCreditCardThin, PiHandbagThin, PiKeyReturnThin } from 'react-icons/pi'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import mockBlogs from '../data/blogData'

const LastBlogCard = ({ blog }) => {
    const navigate = useNavigate()
    console.log(blog);
    console.log(1);
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

const About = () => {
    return (
        <div className='space-y-16 px-16 pt-28 pb-16 w-full'>
            <img src="webp/herobackground.webp" alt="" className='w-full max-h-96 object-cover' />

            <div className="gap-10 grid grid-cols-1 md:grid-cols-4 mx-auto pt-10 text-slate-600">
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


            <img src="webp/yellowbulb.webp" alt="" className='w-full max-h-96 object-cover' />


            <div className="gap-10 grid grid-cols-2 px-16 py-8 w-full max-min-h-dvh">
                <div className="flex flex-col justify-center items-start gap-6">
                    <h1 className="font-bold text-5xl capitalize leading-snug">Functionality <br />
                        meets perfection</h1>
                    <p className="w-full text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                        dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center gap-10 w-full h-full'>

                    <div className='space-y-3 w-full'>
                        <div className='flex justify-between font-medium text-lg'>
                            <p >Creativity</p>
                            <p className='text-sm'>76%</p>
                        </div>
                        <div className='bg-gray-300 rounded-xl w-full h-1.5'>
                            <div className='bg-gray-800 rounded-lg w-[76%] h-full'></div>
                        </div>
                    </div>

                    <div className='space-y-3 w-full'>
                        <div className='flex justify-between font-medium text-lg'>
                            <p >Creativity</p>
                            <p className='text-sm'>76%</p>
                        </div>
                        <div className='bg-gray-300 rounded-xl w-full h-1.5'>
                            <div className='bg-gray-800 rounded-lg w-[76%] h-full'></div>
                        </div>
                    </div>

                    <div className='space-y-3 w-full'>
                        <div className='flex justify-between font-medium text-lg'>
                            <p >Creativity</p>
                            <p className='text-sm'>76%</p>
                        </div>
                        <div className='bg-gray-300 rounded-xl w-full h-1.5'>
                            <div className='bg-gray-800 rounded-lg w-[76%] h-full'></div>
                        </div>
                    </div>
                </div>

            </div>


            {/* last blog page section */}
            <section >
                <h3 className='font-semibold text-lg'>Last blog</h3>

                <div className='gap-10 grid grid-cols-3 mt-8 w-full'>
                    {mockBlogs.slice(0, 3).map((blog) => (
                        <LastBlogCard key={blog.id} blog={blog} />
                    ))}

                </div>
            </section>
        </div>
    )
}

export default About
