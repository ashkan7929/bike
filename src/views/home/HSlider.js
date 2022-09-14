import React from 'react'
import bike from '../../assets/img/bike.png'
import ashkanText from '../../assets/img/ashkan.png'

const HSlider = () => {
    return (
        <div className='w-screen h-screen bg-[#1d1d1d]'>
            <p className='absolute text-[30rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 opacity-25'>CYCLE</p>
            <img src={ashkanText} className="absolute top-32 right-1/2" />
            <div className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
                <img src={bike} />
            </div>
        </div>
    )
}

export default HSlider