import React from "react";
import { PiLessThan } from "react-icons/pi";
import Button from "../components/Button";

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
                <p className="w-[30dvw] text-center text-lg leading-tight text-slate-500">
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
                            className="w-full h-full object-cover"
                        />
                        <h3 className="text-lg font-bold">Pot</h3>
                        <p>$222.22</p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col justify-center items-center gap-2 text-slate-800">
                        <img
                            src="/newimage.png"
                            alt="Lamp"
                            className="w-full h-full object-cover"
                        />
                        <h3 className="text-lg font-bold">Lamp</h3>
                        <p>$123.45</p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col justify-center items-center gap-2 text-slate-800">
                        <img
                            src="/soldimage.png"
                            alt="Chair"
                            className="w-full h-full object-cover"
                        />
                        <h3 className="text-lg font-bold">Chair</h3>
                        <p>$333.33</p>
                    </div>
                </div>
            </div>



            {/* details section */}
            <div className="min-h-dvh pt-24 w-screen overflow-hidden flex flex-col">
                <div className="h-[40%] relative">
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


        </div>
    );
};

export default Home;
