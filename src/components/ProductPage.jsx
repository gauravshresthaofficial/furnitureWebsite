import React, { useEffect, useRef, useState } from 'react';
import { PiHeartFill, PiHeartLight, PiLessThanThin } from 'react-icons/pi';
import { useNavigate, useParams } from 'react-router-dom';
import productDetails from '../data/productData';

const ProductPage = () => {
    const { productId } = useParams(); // Access productId from the URL
    const navigate = useNavigate();
    const mainContentRef = useRef()
    const [quantity, setQuantity] = useState(1)
    const [addedToWishlist, setAddedToWishlist] = useState(true);

    // Find the product using the productId (assuming productId is numeric)
    const product = productDetails.find((item) => item.id === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleWishlist = () => {
        setAddedToWishlist(!addedToWishlist);
    }


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
    }, [productId]);

    // Filter out the current product from the productDetails to display related products
    const relatedProducts = productDetails.filter((product) => product.id !== parseInt(productId));
    console.log(productId);
    console.log(relatedProducts)
    


    return (
        <div className="space-y-10 w-full mt-24 p-16 pt-6 gap-10 transition ease-in-out" ref={mainContentRef}>
            <p>Shop / {product.productName} (Code {product.sku})</p>

            <div className="grid grid-cols-5 gap-10 w-full max-h-[80vh] overflow-clip">
                <div className="space-y-4">
                    {Array(4)
                        .fill("/chair.png")
                        .map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Product Image ${index + 1}`}
                                className="w-full aspect-[16/9] object-cover"
                            />
                        ))}
                </div>

                <div className="col-span-2">
                    <img
                        src={product.img}
                        alt={product.productName}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="col-span-2 text-gray-500 space-y-2 p-2">
                    <h2 className="font-semibold text-2xl text-gray-800">{product.productName}</h2>
                    <p className="text-gray-500">
                        {Array(product.rating).fill("⭐").join(" ")}{" "}
                        <span className="text-gray-400 font-thin">(top)</span>
                    </p>
                    <p className='font-bold text-xl'> <span className='pr-4 font-normal text-sm line-through'>$ {Math.ceil(product.price - (product.price * .2))}</span>$ {product.price}</p>
                    <p className="w-[80%] leading-tight line-clamp-3 py-4">{product.description}</p>

                    <div className="h-12 flex gap-12">
                        <button className="flex items-center justify-between w-32 px-2 border border-gray-600 h-full">
                            <PiLessThanThin onClick={() => {
                                quantity != 0 ?
                                    setQuantity(quantity - 1) : null
                            }} /> {quantity} <PiLessThanThin className="rotate-180"
                                onClick={
                                    () => setQuantity(quantity + 1)
                                } />
                        </button>

                        <button className="h-full px-2 bg-gray-700 w-32 text-white hover:scale-105 hover:bg-gray-800 duration">
                            Add to cart
                        </button>
                    </div>

                    <div className="flex items-center gap-4 py-4 cursor-pointer" onClick={handleWishlist}>
                        {addedToWishlist ?
                            <PiHeartLight className="h-5 w-auto" /> :
                            <PiHeartFill className="h-5 w-auto" />}
                        <p>Add to wishlist</p>
                    </div>

                    <div className="space-y-1">
                        <p>Sku : {product.sku}</p>
                        <p>Category : {product.category}</p>
                        <p>
                            Tag:{" "}
                            {product.tags.map((tag, index) => (
                                <span key={index} className="underline pr-2 underline-offset-2">
                                    {tag}
                                    {index < product.tags.length - 1 && ","}
                                </span>
                            ))}
                        </p>
                    </div>

                    <div className="flex flex-col justify-between py-3 gap-4 text-gray-700">
                        <p className="underline underline-offset-4">Description</p>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>

            <section>
                <h3 className="text-lg font-semibold">Related Products</h3>

                {/* Product Grid */}
                <div className="grid grid-cols-4 gap-8 mt-8">
                    {relatedProducts.slice(0, 4).map((product, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(`/shop/${product.id}`)} // Navigate based on productId
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
    );
};

export default ProductPage;
