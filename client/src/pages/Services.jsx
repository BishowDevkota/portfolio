import React from 'react'
import ServicesComponent from '../components/ServicesComponent'
import SectionTitle from '../components/SectionTitle'

const Services = () => {
    return (
        <div className='flex flex-col gap-10 w-[80%] mx-auto'>
            <SectionTitle smallHeading={"WHAT WE DO"} largeWhiteHeading={"SERVICES AND"} largeGreenHeading={"SOLUTIONS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ratione reprehenderit, error qui enim sit ex provident"} />


            <div className='mx-auto flex flex-row gap-10 justify-center max-lg:flex-wrap mb-10' >
                <ServicesComponent title="GRAPHIS DESIGN" description="Need a project completed by an expert? Let’s go! Access a Human Resources Consultant to answer questions

" image="./image/service1.svg" />
                <ServicesComponent title="GRAPHIS DESIGN" description="Need a project completed by an expert? Let’s go! Access a Human Resources Consultant to answer questions

" image="./image/service2.svg" />
                <ServicesComponent title="GRAPHIS DESIGN" description="Need a project completed by an expert? Let’s go! Access a Human Resources Consultant to answer questions

" image="./image/service3.svg" />
            </div>
        </div>
    )
}

export default Services
