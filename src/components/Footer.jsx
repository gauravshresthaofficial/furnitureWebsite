import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#2a2a2a] text-gray-200 px-16 py-8 space-y-6'>
            <h1 className='text-3xl font-bold'>Soudemy</h1>

            <div className='grid grid-cols-6 gap-20'>
                <div className='col-span-2 space-y-4'>
                    <h3 className='text-2xl font-bold'>About Us</h3>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque quibusdam fugiat quae quo earum eius deleniti optio sunt. Cum eaque ad necessitatibus reprehenderit, qui provident ratione soluta voluptatum ipsum.</p>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-2xl font-bold'>Useful</h3>
                    <div className='space-y-2 text-gray-400' >
                        <p >Download Product</p>
                        <p >Download Product</p>
                        <p >Download Product</p>
                        <p >Download Product</p>
                        <p >Download Product</p>
                        <p >Download Product</p>
                    </div>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-2xl font-bold'>Download</h3>
                    <div className='space-y-2 text-gray-400'>
                        <p >instagram</p>
                        <p >facebook</p>
                        <p >Twitter</p>
                        <p >pinterest</p>
                        <p >youtube</p>
                    </div>
                </div>



                <div className='col-span-2 space-y-4'>
                    <h3 className='text-2xl font-bold'>Call Center</h3>
                    <div className='space-y-2 text-gray-400'>
                        <p className='line-clamp-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, iure corrupti. Quos laboriosam, placeat dicta beatae sint temporibus asperiores nesciunt aut sequi quisquam ex consequuntur iste qui error eveniet illo.</p>
                        <p >soroushnorozyui@gmail.com</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer
