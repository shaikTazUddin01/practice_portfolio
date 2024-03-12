import js from '../assets/logo-javascript 1.png'
import react from '../assets/react.svg'
import node from '../assets/nodejs-icon 1.png'
import mongo from '../assets/mongo 1.png'

const WhatDo = () => {
    return (
        <div className='max-w-4xl mx-auto mt-20'>
            <div className='text-center space-y-2 p-20'>
                <h1 className='text-4xl font-bold'>What i do</h1>
                <p className='text-[16px]'>I have more than 10 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies i use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
            </div>
            <div className='flex justify-between  gap-6'>
                <div className='bg-yellow-100 p-5 space-y-2'>
                    <img src={js} alt="" />

                    <h2 className='font-bold'>Vanila JavaScript</h2>
                    <p className='text-[14px]'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className='bg-yellow-100 p-5 space-y-2'>
                    <img src={react} alt="" />

                    <h2 className='font-bold'>React</h2>
                    <p className='text-[14px]'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className='bg-yellow-100 p-5 space-y-2'>
                    <img src={node} alt="" />

                    <h2 className='font-bold'>Node.Js</h2>
                    <p className='text-[14px]'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className='bg-yellow-100 p-5 space-y-2'>
                    <img src={mongo} alt="" />

                    <h2 className='font-bold'>MongoDB</h2>
                    <p className='text-[14px]'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
            </div>
        </div>
    );
};

export default WhatDo;