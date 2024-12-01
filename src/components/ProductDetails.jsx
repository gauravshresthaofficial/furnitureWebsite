import React from 'react'
import { PiHeartLight, PiLessThanThin } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom';

const productDetails = [
    { img: "/chair.png", productName: "Modern Sofa 1", rating: 4, price: 73, color: "Black", category: "Modern" },
    { img: "/chair.png", productName: "Modern Sofa 2", rating: 5, price: 85, color: "Blue", category: "Retro" },
    { img: "/chair.png", productName: "Modern Sofa 3", rating: 3, price: 50, color: "Red", category: "Wood" },
    { img: "/chair.png", productName: "Modern Sofa 4", rating: 4, price: 120, color: "Green", category: "LED" },
    { img: "/chair.png", productName: "Modern Sofa 5", rating: 5, price: 60, color: "Yellow", category: "Modern" },
    { img: "/chair.png", productName: "Modern Sofa 6", rating: 2, price: 95, color: "Grey", category: "Floor" },
    { img: "/chair.png", productName: "Modern Sofa 7", rating: 4, price: 45, color: "Blue", category: "Retro" },
    { img: "/chair.png", productName: "Modern Sofa 8", rating: 4, price: 77, color: "Black", category: "Modern" },
    { img: "/chair.png", productName: "Modern Sofa 9", rating: 5, price: 89, color: "Red", category: "Ceiling" },
];

const ProductDetails = () => {

    const navigate = useNavigate();
    return (
        <div className="space-y-10 w-full mt-24 p-16 pt-6 gap-10 transition ease-in-out">
            <p >
                shope/ sofa code 234
            </p>

            <div className='grid grid-cols-5 gap-10 w-full max-h-[80vh] overflow-clip'>

                <div className='space-y-4'>
                    <img src="/chair.png" alt="" className='w-full aspect-[16/9] object-cover' />
                    <img src="/chair.png" alt="" className='w-full aspect-[16/9] object-cover' />
                    <img src="/chair.png" alt="" className='w-full aspect-[16/9] object-cover' />
                    <img src="/chair.png" alt="" className='w-full aspect-[16/9] object-cover' />
                </div>

                <div className='col-span-2'>
                    <img src="/chair.png" alt="" className='w-full h-full object-cover' />
                </div>

                <div className='col-span-2 text-gray-500 space-y-2 p-2'>
                    <h2 className='font-semibold text-2xl text-gray-800'>Sofa Code 234 </h2>
                    <p className='text-gray-500'>⭐ ⭐ ⭐ ⭐ ⭐ <span className='text-gray-400 font-thin'>(top)</span></p>
                    <p className='w-[80%] leading-tight line-clamp-3 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio necessitatibus harum consequatur soluta dignissimos quas adipisci ea, enim fugit.</p>

                    <div className='h-12 flex gap-12'>
                        <button className='flex items-center justify-between w-32 px-2 border border-gray-600 h-full'><PiLessThanThin /> 1 <PiLessThanThin className='rotate-180' /></button>

                        <button className='h-full px-2 bg-gray-700 w-32 text-white hover:scale-105 hover:bg-gray-800 duration'>Add to cart</button>
                    </div>

                    <div className='flex items-center gap-4 py-4'>
                        <PiHeartLight className='h-5 w-auto' />
                        <p>Add to wishlist</p>
                    </div>
                    <div className='space-y-1'>
                        <p>Sku : 02</p>
                        <p>Category : Sofa</p>
                        <p>tag: <span className='underline'>sofa</span>{" "}<span className='underline'>clean</span></p>
                    </div>

                    <div className='flex justify-between py-3 text-gray-700'>
                        <p className='underline underline-offset-4'>Description</p>
                        <p>Description</p>
                        <p>Description</p>
                    </div>

                    <div className='line-clamp-3 tracking-tight'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deleniti modi quas illo? Dolor perspiciatis doloremque sit sequi expedita odio voluptates dolore quod architecto incidunt animi, corrupti et eaque in.</p>
                    </div>

                </div>
            </div>

            <section>
                <h3 className='text-lg font-semibold '>Related Products</h3>

                {/* Product Grid */}
                <div className="grid grid-cols-4 gap-8 mt-8">
                    {productDetails.slice(0, 4).map((product, index) => (
                        <div
                            key={index}
                            onClick={()=> navigate(`/shop/${index}`)}
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
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default ProductDetails
