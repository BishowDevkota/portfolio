import React from 'react'

const SectionTitle = ({smallHeading,largeWhiteHeading,largeGreenHeading,description}) => {
  return (
    <div className='flex gap-10 max-lg:flex-col'>
    <div className='flex-1'>
    <h2 className='text-[--green] text-lg font-semibold'>{smallHeading}</h2>
    <h2 className='text-[--white] text-4xl font-bold'>{largeWhiteHeading} <span className='text-[--green]'>{largeGreenHeading}</span></h2>
</div>
<p className='text-[--white] flex-1 border-l-4 border-[--green] pl-10 text-xl'>{description}</p>
</div>
  )
}

export default SectionTitle
