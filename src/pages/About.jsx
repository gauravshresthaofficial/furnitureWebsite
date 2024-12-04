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

const About = () => {
    return (
        <div className='pt-28 w-full px-16 pb-16 space-y-16'>
            <img src="/herobackground.png" alt="" className='max-h-96 w-full object-cover' />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mx-auto text-slate-600 pt-10">
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


            <img src="/yellowbulb.png" alt="" className='max-h-96 w-full object-cover' />


            <div className="grid grid-cols-2  max-min-h-dvh w-full px-16 py-8 gap-10">
                <div className="flex flex-col items-start justify-center gap-6">
                    <h1 className="text-5xl font-bold capitalize leading-snug">Functionality <br />
                        meets perfection</h1>
                    <p className="w-full text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                        dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                    </p>
                </div>

                <div className='h-full w-full flex flex-col items-center justify-center gap-10'>

                    <div className='w-full space-y-3'>
                        <div className='flex justify-between font-medium text-lg'>
                            <p >Creativity</p>
                            <p className='text-sm'>76%</p>
                        </div>
                        <div className='h-1.5 w-full bg-gray-300 rounded-xl'>
                            <div className='h-full w-[76%] bg-gray-800 rounded-lg'></div>
                        </div>
                    </div>

                    <div className='w-full space-y-3'>
                        <div className='flex justify-between font-medium text-lg'>
                            <p >Creativity</p>
                            <p className='text-sm'>76%</p>
                        </div>
                        <div className='h-1.5 w-full bg-gray-300 rounded-xl'>
                            <div className='h-full w-[76%] bg-gray-800 rounded-lg'></div>
                        </div>
                    </div>

                    <div className='w-full space-y-3'>
                        <div className='flex justify-between font-medium text-lg'>
                            <p >Creativity</p>
                            <p className='text-sm'>76%</p>
                        </div>
                        <div className='h-1.5 w-full bg-gray-300 rounded-xl'>
                            <div className='h-full w-[76%] bg-gray-800 rounded-lg'></div>
                        </div>
                    </div>
                </div>

            </div>


            {/* last blog page section */}
            <section >
                <h3 className='text-lg font-semibold '>Last blog</h3>

                <div className='grid grid-cols-3 gap-10 w-full mt-8'>
                    {mockBlogs.slice(0, 3).map((blog) => (
                        <LastBlogCard key={blog.id} blog={blog} />
                    ))}

                </div>
            </section>
        </div>
    )
}

export default About
