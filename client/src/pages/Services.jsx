import React from 'react'
import ServicesComponent from '../components/ServicesComponent'

const Services = () => {
    return (
        <div className='w-[80%] mx-auto flex flex-row gap-10 justify-center max-lg:flex-wrap mb-10'>
            <ServicesComponent title="GRAPHIS DESIGN" description="Need a project completed by an expert? Let’s go! Access a Human Resources Consultant to answer questions

" image="./image/service1.svg" />
            <ServicesComponent title="GRAPHIS DESIGN" description="Need a project completed by an expert? Let’s go! Access a Human Resources Consultant to answer questions

" image="./image/service2.svg" />
            <ServicesComponent title="GRAPHIS DESIGN" description="Need a project completed by an expert? Let’s go! Access a Human Resources Consultant to answer questions

" image="./image/service3.svg" />

        </div>
    )
}

export default Services
