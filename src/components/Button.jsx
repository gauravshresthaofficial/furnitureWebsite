import React from 'react'
import { PiLessThan } from 'react-icons/pi'

const Button = ({ className, text = "View more", hasArrow = true }) => {
    return (
        <button className={`border px-10 py-4 hover:scale-110 duration-100 w-fit ${className}`}>
            {text}{" "}
            {hasArrow &&
                <PiLessThan className="inline-block ml-2 font-extralight rotate-180" />
            }
        </button>
    )
}

export default Button
