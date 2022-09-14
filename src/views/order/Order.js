import { Transition } from '@tailwindui/react';
import React, { useState } from 'react';
import bikeFrame from '../../assets/img/frame.png';
import Enumerations from '../../configs/Enumerations';


function Order() {

    const configurationOptions = [
        {
            id: 1,
            label: "Wheels",
            children: [
                { id: 1, label: "Hybrid", price: 11 },
                { id: 2, label: "BMX", price: 121 },
                { id: 3, label: "Sport", price: 16 },
                { id: 4, label: "Cover", price: 19 },
                { id: 5, label: "Carbon", price: 13 },
            ],
        },
        {
            id: 2,
            label: "Handlers",
            children: [
                { id: 1, label: "Tall handler", price: 21 },
                { id: 2, label: "Short handler", price: 28 },
            ],
        },
        {
            id: 3,
            label: "Saddles",
            children: [
                { id: 1, label: "Carbon", price: 78 },
                { id: 2, label: "Bag holder", price: 58 },
                { id: 3, label: "Red saddle", price: 99 },
                { id: 4, label: "Adjustable", price: 48 },
            ],
        }
    ]

    const [selectedTab, setSelectedTab] = useState(configurationOptions[0])
    const [selectedWheel, setSelectedWheel] = useState(configurationOptions[0].children[0])
    const [selectedHandler, setSelectedHandler] = useState(configurationOptions[1].children[0])
    const [selectedSaddle, setSelectedSaddle] = useState(configurationOptions[2].children[0])
    const [showSelectedWheel, setShowSelectedWheel] = useState(true)
    const [showSelectedHandler, setShowSelectedHandler] = useState(true)
    const [showSelectedSaddle, setShowSelectedSaddle] = useState(true)



    const selectedTabHandler = (tabHeader) => {
        setSelectedTab(tabHeader)
    }

    const tabContentButtonClicked = (selected, configType) => {
        configType === Enumerations.configurationOptions.Wheels && setShowSelectedWheel(false)
        configType === Enumerations.configurationOptions.Handlers && setShowSelectedHandler(false)
        configType === Enumerations.configurationOptions.Saddles && setShowSelectedSaddle(false)
        setTimeout(() => {
            configType === Enumerations.configurationOptions.Wheels && setSelectedWheel(selected)
            configType === Enumerations.configurationOptions.Wheels && setShowSelectedWheel(true)

            configType === Enumerations.configurationOptions.Handlers && setSelectedHandler(selected)
            configType === Enumerations.configurationOptions.Handlers && setShowSelectedHandler(true)

            configType === Enumerations.configurationOptions.Saddles && setSelectedSaddle(selected)
            configType === Enumerations.configurationOptions.Saddles && setShowSelectedSaddle(true)
        }, 1000);
    }

    return (
        <>
            <div className='fixed w-1/3 min-h-screen rounded-r-[10%] bg-blue-200/75 -z-50' />

            <div className="flex w-screen h-screen overflow-auto">
                <div className="relative top-0 bottom-0 flex flex-col justify-around ml-[5%]">
                    <div className='relative inline-block w-[40vw] max-w-[1000px]'>
                        <img src={bikeFrame} alt="bike" className='relative left-0 z-50 top-10' />

                        <Transition show={showSelectedWheel} appear={showSelectedWheel} className="absolute lg:-bottom-3 sm:-bottom-6 -bottom-8  right-0 w-[32%]">
                            <Transition.Child enter="transition ease-in-out duration-1000 transform"
                                enterFrom="opacity-0 translate-x-20"
                                enterTo="opacity-100"
                                leave="transition ease-in-out duration-1000 transform"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0 translate-x-20">
                                <img src={require(`../../assets/img/wheel${selectedWheel.id}.png`)} alt="bike" className='animate-spin' />
                            </Transition.Child>
                        </Transition>

                        <Transition show={showSelectedWheel} appear={showSelectedWheel} className="absolute lg:-bottom-3 sm:-bottom-6 -bottom-8  left-0 w-[32%]">
                            <Transition.Child enter="transition ease-in-out duration-1000 transform"
                                enterFrom="opacity-0 -translate-x-20"
                                enterTo="opacity-100"
                                leave="transition ease-in-out duration-1000 transform"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0 -translate-x-20">
                                <img src={require(`../../assets/img/wheel${selectedWheel.id}.png`)} alt="bike" className='animate-spin' />
                            </Transition.Child>
                        </Transition>

                        <Transition show={showSelectedHandler} appear={showSelectedHandler} className="absolute bottom-[40%] sm:bottom-[40%] md:bottom-[45%] lg:bottom-[50%] xl:bottom-[53%] 3xl:bottom-[55%] left-[65%] w-[10%]">
                            <Transition.Child enter="transition ease-in-out duration-1000 transform"
                                enterFrom="opacity-0 -translate-y-20"
                                enterTo="opacity-100"
                                leave="transition ease-in-out duration-1000 transform"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0 -translate-y-20">
                                <img src={require(`../../assets/img/handler${selectedHandler.id}.png`)} alt="handler" />
                            </Transition.Child>
                        </Transition>

                        <Transition show={showSelectedSaddle} appear={showSelectedSaddle} className="absolute bottom-[30%] sm:bottom-[34%] md:bottom-[38%] lg:bottom-[43%] xl:bottom-[46%] left-[23%] xl:left-[22%] 2xl:left-[23%] 3xl:left-[24%] w-[20%]">
                            <Transition.Child enter="transition ease-in-out duration-1000 transform"
                                enterFrom="opacity-0 "
                                enterTo="opacity-100"
                                leave="transition ease-in-out duration-1000 transform"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0 ">
                                <img src={require(`../../assets/img/saddle${selectedSaddle.id}.png`)} alt="handler" />
                            </Transition.Child>
                        </Transition>

                    </div>
                    <div className='flex items-center justify-around'>
                        <span className='w-32 text-6xl font-bold text-white'>
                            {selectedHandler.price + selectedWheel.price + selectedSaddle.price}$
                        </span>
                        <button className='p-4 px-10 text-2xl font-bold text-white transition-transform bg-orange-400 hover:scale-125 rounded-xl w-fit'>+ Order</button>
                    </div>
                </div>
                <div className='w-1/2 my-auto ml-auto mr-3 h-1/2'>
                    <div>
                        <span className='text-6xl font-bold'>Configure</span>
                        <span className='text-3xl'> the Bike</span>
                    </div>
                    <div className='mt-4'>
                        {configurationOptions.map(tabHeader => {
                            return <button className='p-4 mx-1 text-lg font-bold bg-orange-300 rounded-xl' id={tabHeader.id} onClick={() => selectedTabHandler(tabHeader)}>{tabHeader.label}</button>
                        })}
                    </div>
                    <div className='mt-4'>
                        <div className='text-lg font-bold'>{selectedTab.label}</div>
                        {configurationOptions.find(tabHeader => tabHeader.id === selectedTab.id)?.children.map(tabContent => {
                            return <button className='p-4 mx-1 mt-2 bg-orange-200 rounded-xl' id={tabContent.id} onClick={() => tabContentButtonClicked(tabContent, selectedTab.id)}>
                                <div className='flex flex-col'>
                                    <span className='text-lg font-bold'>{tabContent.label}</span>
                                    <span className='text-sm'>{tabContent.price}$</span>
                                </div>
                            </button>
                        })}
                    </div>
                </div>
            </div>
        </>
    );

}

export default Order;
