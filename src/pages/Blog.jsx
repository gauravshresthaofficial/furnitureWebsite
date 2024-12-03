import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs'
import { PiHeartLight, PiLessThanThin } from 'react-icons/pi'
import Button from '../components/Button'

const Blog = () => {
  return (
    <div className="grid grid-cols-8 min-h-screen w-full mt-24 p-16 pt-6 gap-10" >
      {/* Main Content */}
      <div className="col-span-6 ">
        <div className='space-y-5 pb-12 border-black border-b'>

          <img src="/modernSofa.png" alt="" className='w-full h-auto bg-cover' />
          <div className="flex items-center divide-x-2 gap-4 text-gray-400">
            <p >Sep 26, 2022</p>
            <p className="pl-4">Newest, sofa and chair, wooden</p>
            <p className="pl-4">By soroush norozy</p>
            <p className="pl-4">
              <PiHeartLight className="inline-block pr-1 h-full w-auto hover:scale-110" />5
            </p>
            <p className="pl-4">
              <BsChatSquareDots className="inline-block pr-1 h-full w-auto hover:scale-110" /> 3
            </p>
          </div>

          <h2 className='font-semibold text-xl'>New modern sofa is here</h2>

          <p className='font-light text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa libero, mattis volutpat id. Egestas adipiscing placerat eleifend a nascetur. Mattis proin enim, nam porttitor vitae. Faucibus vel porttitor imperdiet ultricies a eget sed. Vestibulum velit vulputate amet nunc amet.
          </p>

          <p className='font-bold !mt-10'>
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa libero, mattis volutpat id. Egestas adipiscing placerat eleifend a nascetur. Mattis proin enim, nam porttitor vitae. Faucibus vel porttitor imperdiet ultricies a eget sed. Vestibulum velit vulputate amet nunc amet. “
          </p>

          <div className='flex gap-10'>
            <img src="/blogpic1.png" alt="" className='h-64 w-auto object-fill' />
            <img src="/blogpic2.png" alt="" className='h-64 w-auto object-fill' />
          </div>

        </div>

        <div className='flex justify-center h-28'>
          <div className='w-[50%] h-full  flex gap-10 items-center'>
            <PiLessThanThin className='bg-gray-200 h-12 w-12 text-lg px-2' />
            <div className='h-full w-full flex flex-col justify-between py-4'>
              <p className='text-xl font-bold'>New wooden furniture</p>
              <button className='text-gray-400 w-fit'>Back</button>
            </div>
          </div>

          <div className='w-[50%] h-full  flex gap-10 items-center'>
            <div className='h-full w-full flex flex-col justify-between py-4'>
              <p className='text-xl font-bold'>your office should have only natural material</p>
              <button className='text-gray-400 w-fit'>Next</button>
            </div>
            <PiLessThanThin className='rotate-180 bg-gray-200 h-12 w-12 text-lg px-2' />
          </div>


        </div>

        {/* post a comment */}
        <div className='space-y-4 w-full font-bold !mt-8'>
          <h2 className='text-xl text-gray-400'>Post a comment</h2>
          <textarea rows={5} placeholder='Your comment' className=' p-4 border w-[80%] border-gray-500' />
          <input type="text" placeholder='Your Name' className='w-[80%] border p-4 border-gray-500' />
          <input type="text" placeholder='Your Email' className='w-[80%] border p-4 border-gray-500' />
          <input type="text" placeholder='Website' className='w-[80%] border p-4 border-gray-500' />
          <div className='flex gap-4'>
            <input type="checkbox" name="checked" id="" />
            <p className='text-sm text-gray-400 '>SAVE MY NAME , EMAIL, AND WEBSITE IN THIS browser for the next time comment </p>
          </div>
          <Button className="bg-black text-white !mt-6" text="Submit" hasArrow={false}/>
        </div>
      </div>

      <div className="col-span-2 p-4 pt-0">
        <input
          type="text"
          className="w-full mb-6 p-2 border focus:ring-1 ring-gray-600 outline-0 hover:ring-1"
          placeholder="Search products..."

        />

        <h2 className="font-semibold mb-4">Lorem ipsum dolor sit amet, consectetur</h2>
      </div>
    </div>
  )
}

export default Blog
