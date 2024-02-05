import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Main() {
    return (
        <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-no-repeat pt-10 relative overflow-hidden w-full'>
            <div className="top-circle gs-gradient absolute rounded-full -right-36 -top-80 md:-right-36 md:-top-60"></div>
            <div className="top-circle-2 gs-gradient absolute rounded-full -right-6 -bottom-10 blur-sm sm:block hidden"></div>
            {/* <Image src="/kaleyra.webp" alt='kaleyra' width="160" height="38" className="absolute block md:hidden left-6 top-6" /> */}
            <div className='container mx-auto px-5'>
                <div className='md:grid-cols-3 md:mt-0 mt-10 relative z-10 md:grid flex flex-col'>
                    <div className="col-span-2 flex flex-col items-start justify-center">
                        <div className='mb-10 text-5xl'>
                            <p className='font-bold flex flow-row items-center justify-start'>Sandesh Sarang <Link className="md:block hidden ms-4 mt-2" href="https://www.linkedin.com/in/sandesh-sarang-0288819/"><Image alt="linkedin" width="28" height="28" src="/icons/linkedin.svg" /></Link></p>
                            <p className="text-2xl mt-2">Managing Director – APAC & ME</p>
                            <Image src="/kaleyra.webp" alt='kaleyra' width="160" height="38" className="mt-4" />
                        </div>
                        <div className='lg:max-w-xl max-w-md pe-5 lg:pe-0 w-full hidden md:block'>
                            <Link href="/crafting-seamless-customer-journeys" className="text-2xl font-bold">Crafting Seamless Customer Journeys: The Power of Hyper-Personalization</Link>
                            <p className='mt-5 select-none text-justify'>Unlocking the power of hyper-personalization enables companies to demonstrate a deeper understanding of user preferences and gain a competitive edge. According to a McKinsey report, organizations that offer personalized customer experiences can increase their revenue by 40%.</p>
                            <Link className="text-blue-700 mt-4 block" href="/crafting-seamless-customer-journeys">Read More...</Link>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col items-center justify-start relative'>
                        {/* <Image src="/kaleyra.webp" alt='kaleyra' width="160" height="38" className="absolute md:block hidden left-0 -top-3" /> */}
                        <div className="relative speaker-img flex flex-col items-center justify-end">
                            {/* <div className='w-48 border-white bg-red-500 h-52 border-4'></div> */}
                            <Image src="/sandesh-sarang.png" alt="image" fill className="object-contain object-center p-1" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full block md:hidden bg-white px-5 py-10'>
                <Link href="/crafting-seamless-customer-journeys" className="text-2xl font-bold">Crafting Seamless Customer Journeys: The Power of Hyper-Personalization</Link>
                <p className='mt-5 select-none text-justify'>Unlocking the power of hyper-personalization enables companies to demonstrate a deeper understanding of user preferences and gain a competitive edge. According to a McKinsey report, organizations that offer personalized customer experiences can increase their revenue by 40%.</p>
                <Link className="text-blue-700 mt-4 block" href="/crafting-seamless-customer-journeys">Read More...</Link>
            </div>
        </section>
    )
}


{/* <section className='bg-primary-50 bg-dotted-pattern bg-contain pt-10 relative overflow-hidden'>
            <div className="top-circle gs-gradient absolute rounded-full -right-36 -top-80 md:-right-36 md:-top-60"></div>
            <div className="top-circle-2 gs-gradient absolute rounded-full -right-6 -bottom-10 blur-sm sm:block hidden"></div>
            <Image src="/kaleyra.webp" alt='kaleyra' width="160" height="38" className="absolute block md:hidden left-6 top-6" />
            <div className='container mx-auto'>
                <div className='hidden grid-cols-3 md:mt-0 mt-20 relative z-10 md:grid'>
                    <div className="col-span-2 flex flex-col items-start justify-center">
                        <div className='mb-8 text-5xl'><p className='font-bold'>Sandesh Sarang</p><p className="text-2xl mt-2">Managing Director – APAC & ME</p></div>
                        <div className='max-w-xl w-full'>
                            <Link href="/" className="text-2xl font-bold">Crafting Seamless Customer Journeys: The Power of Hyper-Personalization</Link>
                            <p className='mt-5 select-none text-justify'>Unlocking the power of hyper-personalization enables companies to demonstrate a deeper understanding of user preferences and gain a competitive edge. According to a McKinsey report, organizations that offer personalized customer experiences can increase their revenue by 40%.</p>
                            <Link className="text-blue-700 mt-4 block" href="/">Read More...</Link>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col items-center justify-start relative'>
                        <Image src="/kaleyra.webp" alt='kaleyra' width="160" height="38" className="absolute md:block hidden left-0 -top-3" />
                        <div className="relative speaker-img flex flex-col items-center justify-end">
                            <Image src="/sandesh-sarang.png" alt="image" fill className="object-contain object-center p-1" />
                        </div>
                    </div>
                </div>
                <div className='grid md:hidden grid-cols-3 mt-20 relative z-10'>
                    <div className="col-span-2 flex flex-col items-start justify-center">
                        <div className='mb-32 text-4xl'><p className='font-bold'>Sandesh Sarang</p><p className="text-2xl mt-2">Managing Director – APAC & ME</p></div>
                    </div>
                    <div className='col-span-1 flex flex-col items-center justify-start relative'>
                        <Image src="/kaleyra.webp" alt='kaleyra' width="160" height="38" className="absolute md:block hidden left-0 -top-3" />
                        <div className="relative speaker-img flex flex-col items-center justify-end">
                            <Image src="/sandesh-sarang.png" alt="image" fill className="object-contain object-center p-1" />
                        </div>
                    </div>
                </div>
                <div className='max-w-xl w-full md:hidden block'>
                    <Link href="/" className="text-2xl font-bold">Crafting Seamless Customer Journeys: The Power of Hyper-Personalization</Link>
                    <p className='mt-5 select-none text-justify'>Unlocking the power of hyper-personalization enables companies to demonstrate a deeper understanding of user preferences and gain a competitive edge. According to a McKinsey report, organizations that offer personalized customer experiences can increase their revenue by 40%.</p>
                    <Link className="text-blue-700 mt-4 block" href="/">Read More...</Link>
                </div>
            </div>
        </section> */}