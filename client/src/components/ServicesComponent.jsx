import React from 'react'
import AnimiatedCircle from './AnimiatedCircle'

const ServicesComponent = (props) => {
    return (
        <>
            <div className='relative overflow-hidden group'>


                <div className='z-10 flex flex-col flex-wrap min-w-[280px] h-auto items-center p-10 gap-5 bg-[#131617] group-hover:bg-[--green]  transition-all'>
                    <img src={`${props.image}`} alt="service" className='max-w-[100px] h-[100px]' />
                    <span className='text-[--green] text-2xl group-hover:text-white'>{props.title}</span>
                    <p className='text-white text-lg text-center'>{props.description}</p>
                </div>
                <AnimiatedCircle posx="-right-3" posy="-bottom-3" />
            </div>


        </>
    )
}

export default ServicesComponent
