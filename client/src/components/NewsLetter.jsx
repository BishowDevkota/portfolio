import React from 'react'
import ActionButton from './ActionButton'
import { HiOutlineChatAlt2 } from "react-icons/hi";


const NewsLetter = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <span className='text-[--green] text-xl'>NEWSLETTER</span>
            <div><p className='text-4xl'>Stay up to date, subscribe to the free newsletter !</p></div>
            <div>
                <input type="email" name="" id="" />
                <ActionButton IconComponent={HiOutlineChatAlt2} />
            </div>
        </div>
    )
}

export default NewsLetter
