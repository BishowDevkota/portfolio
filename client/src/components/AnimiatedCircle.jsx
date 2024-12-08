import React from 'react'

const AnimiatedCircle = (props) => {
    return (
        <div>
            <div className={`z-0 absolute w-2 h-2 ${props.posx} ${props.posy} hidden group-hover:block group-hover:scale-[14]`}>
                <div className="absolute inset-0 bg-white group-hover:opacity-40 rounded-full scale-[1] transition-opacity "></div>
                <div className="absolute inset-0 bg-white group-hover:opacity-30 rounded-full scale-[2] transition-opacity"></div>
                <div className="absolute inset-0 bg-white group-hover:opacity-20 rounded-full scale-[3] transition-opacity"></div>
                <div className="absolute inset-0 bg-white group-hover:opacity-10 rounded-full scale-[4] transition-opacity"></div>
            </div>
        </div>
    )
}

export default AnimiatedCircle
