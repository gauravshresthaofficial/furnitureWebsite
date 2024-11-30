import React from "react";
import { PiClockThin, PiCreditCardThin, PiHandbagThin, PiKeyReturnThin, PiLessThanThin } from "react-icons/pi";
import Button from "../components/Button";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import arrowRight from '/arrow-right.png'

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="min-h-dvh py-24 pr-16 pl-24 bg-hero-pattern bg-cover bg-center bg-no-repeat flex items-center justify-center">
                <div className="flex flex-col items-center gap-6 text-white">
                    <h1 className="text-5xl font-bold capitalize">All for your home</h1>
                    <p className="w-[30dvw] text-center text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                        dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                    </p>
                    <Button />
                </div>
            </div>

            {/* Product of the Week Section */}
            <div className="min-h-dvh w-screen flex flex-col justify-center items-center gap-6 text-slate-900 pt-28">
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
            <div className="h-screen pt-20 w-screen overflow-hidden flex flex-col">
                <div className="h-[36%] relative">
                    <img src="/lamp.png" alt="" className="object-cover h-full w-screen" />
                    <div className="absolute top-[50%] -translate-y-1/2 right-16 flex items-center flex-col gap-4">
                        <p className="w-[40dvw] text-center text-lg text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                        </p>
                        <Button className="text-white" />
                    </div>
                </div>

                <div className="grow">
                    <img src="/room.png" alt="" className="object-cover w-screeen  h-full" />

                </div>

            </div>

            {/* single product */}
            <div className="flex flex-col">
                <div className="flex justify-around items-center max-min-h-dvh w-screen px-16 pt-24">
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="text-5xl font-bold capitalize">stylish chairs</h1>
                        <p className="w-[30dvw] text-center text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                        </p>
                        <Button className="text-black border-black" />
                    </div>

                    <img src="/chair.png" alt="" className="w-[40%] h-auto text-center" />

                </div>
                <div className="flex justify-around items-center max-min-h-dvh w-screen px-16 pt-24">
                    <img src="/table.png" alt="" className="w-[40%] h-auto text-center" />
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="text-5xl font-bold capitalize">Table</h1>
                        <p className="w-[30dvw] text-center text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                        </p>
                        <Button className="text-black border-black" />
                    </div>


                </div>
                <div className="flex justify-around items-center max-min-h-dvh w-screen px-16 pt-24">
                    <div className="flex flex-col items-center gap-6">
                        <h1 className="text-5xl font-bold capitalize">contemporary lamps</h1>
                        <p className="w-[30dvw] text-center text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
                        </p>
                        <Button className="text-black border-black" />
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
                <Button className="border-black" />
            </div>


            <div className="h-scteen w-screen py-24 space-y-24 flex flex-col">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-6xl px-16 w-full mx-auto grow">
                    <div className="flex flex-col justify-center items-center gap-2 text-slate-800">
                        <img
                            src="/soldimage.png"
                            alt="Chair"
                            className="h-96 w-full object-cover"
                        />
                        <p className="text-slate-400 font-light text-sm">29 sep,2022 / by soroush norozy</p>
                        <h3 className="text-lg font-bold text-center">Your office should have only <br />natural materials</h3>
                        <button className="underline underline-offset-4 opacity-65 hover:opacity-100 hover:scale-105 cursor-pointer duration-100">read more</button>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 text-slate-800">
                        <img
                            src="/soldimage.png"
                            alt="Chair"
                            className="h-96 w-full object-cover"
                        />
                        <p className="text-slate-400 font-light text-sm">29 sep,2022 / by soroush norozy</p>
                        <h3 className="text-lg font-bold text-center">Your office should have only <br />natural materials</h3>
                        <button className="underline underline-offset-4 opacity-65 hover:opacity-100 hover:scale-105 cursor-pointer duration-100">read more</button>
                    </div>

                </div>


            </div>
            <div className="bg-slate-300 h-80 w-full flex justify-between px-16">
                <div className="flex justify-center items-center">
                    <img src={arrowRight} alt="" className="h-10 hover:scale-110 duration-100"/>
                </div>
                <div className="flex flex-col items-center justify-center max-w-xl">
                    <BiSolidQuoteAltLeft className="mb-6 h-8 w-auto"/>
                    <p className="text-slate-500 font-light text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus luctus amet. Aliquam </p>
                    <h3 className="text-lg font-bold text-center mt-4">Soroush norozy </h3>
                    <p className="text-sm">Designer</p>
                </div>
                <div className="flex justify-center items-center">
                    <img src={arrowRight} alt="" className="rotate-180 h-10 hover:scale-110 duration-100" />
                </div>

            </div>


        </div>
    );
};

export default Home;
