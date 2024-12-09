import React from 'react'
import ActionButton from './ActionButton'
import { HiOutlineChatAlt2 } from "react-icons/hi";


const NewsLetter = () => {
    return (
        <div className='py-20'>
            <div className='flex flex-col lg:w-[600px]  max-lg:w-[600px] max-md:w-[480px] max-sm:w-[380px]  items-center justify-center mx-auto'>
                <span className='text-[--green] text-sm mb-5'>NEWSLETTER</span>
                <div className='text-center'><p className='max-md:text-3xl text-4xl text-white font-bold mb-12'>STAY UP TO DATE, SUBSCRIBE TO THE FREE <span className='text-[--green]'>NEWSLETTER !</span></p></div>
                <div className='flex flex-wrap items-center justify-center gap-5'>
                    <input type="email" name="" id="" className='p-4 bg-[--inputBg] rounded-md placeholder:text-[--placeholder] h-14 text-white' placeholder='Enter Your Email..' />
                    <ActionButton text="SUBSCRIBE" IconComponent={HiOutlineChatAlt2} />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
