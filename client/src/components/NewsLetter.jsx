import React from 'react'
import ActionButton from './ActionButton'
import { HiOutlineChatAlt2 } from "react-icons/hi";


const NewsLetter = () => {
    return (
        <div className=''>
            <div className='flex flex-col items-center justify-center w-[600px] mx-auto'>
                <span className='text-[--green] text-sm mb-5'>NEWSLETTER</span>
                <div className='text-center'><p className='text-4xl text-white font-bold mb-12'>STAY UP TO DATE, SUBSCRIBE TO THE FREE <span className='text-[--green]'>NEWSLETTER !</span></p></div>
                <div className='flex items-center gap-5'>
                    <input type="email" name="" id="" className='p-4 bg-[--inputBg] rounded-md placeholder:text-[--placeholder] h-14 text-white' placeholder='Enter Your Email..' />
                    <ActionButton text="SUBSCRIBE" IconComponent={HiOutlineChatAlt2} />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
