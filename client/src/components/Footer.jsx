import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-10 py-20'>
            <div ><ul className='flex text-white gap-8'><li>ABOUT</li><li>SKILLS</li><li>BLOG</li><li>CONTACT ME</li></ul></div>
            <div className='text-sm text-[--placeholder]'>© Copyright <span className='text-[--green]'> BISHOW DEVKOTA </span> {new Date().getFullYear()}. All right reserved</div>
        </div>
    )
}

export default Footer
