import React from "react";

const AnimiatedCircle = (props) => {
    return (
        <div
            className={`absolute ${props.posx} ${props.posy} z-0 w-32 h-32`}
        >

            <div className="absolute inset-0 bg-white opacity-15 rounded-full scale-0 group-hover:scale-[1] transition-transform duration-500 delay-100"></div>

            <div className="absolute inset-0 bg-white opacity-10 rounded-full scale-0 group-hover:scale-[1.5] transition-transform duration-500 delay-200"></div>

            <div className="absolute inset-0 bg-white opacity-10 rounded-full scale-0 group-hover:scale-[2] transition-transform duration-500 delay-250"></div>

            <div className="absolute inset-0 bg-white opacity-10 rounded-full scale-0 group-hover:scale-[2.5] transition-transform duration-500 delay-280"></div>

        </div>
    );
};

export default AnimiatedCircle;
