"use client"

import Image from 'next/image';
import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function Page() {

    // var typed = new Typed('#sandesh-name', {
    //     strings: ["Sandesh Sarang", "Sandesh Sarang"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     backDelay: 2000,
    //     smartBackspace: false,
    //     loop: true
    // });

    useEffect(() => {
        const typed = new Typed("#sandesh-name", {
            strings: ["Sandesh Sarang", "Sandesh Sarang"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <Image src="/kaleyra.webp" alt='image' width="170" height="41" className="object-contain z-20 top-28 md:right-2/4 md:-translate-x-6 md:fixed absolute right-5 md:p-0 p-3" />
                <div className='md:grid md:grid-cols-2 flex flex-col-reverse justify-start relative'>
                    <div></div>
                    <div className="w-full">
                        <div className='articles-text-container px-5 py-10 pt-5 md:px-20 md:py-12'>
                            <h1 className="text-4xl md:text-5xl font-bold md:py-10 py-3 md:h-44 h-16" id='sandesh-name'></h1>
                            <h1 className='text-xl mb-2 mt-4 font-bold'>Crafting Seamless Customer Journeys: The Power of Hyper-Personalization</h1>
                            <p className='text-justify '>Unlocking the power of hyper-personalization enables companies to demonstrate a deeper understanding of user preferences and gain a competitive edge. According to a McKinsey report, organizations that offer personalized customer experiences can increase their revenue by 40%. Hyper-personalization goes beyond traditional personalization strategies. A Gartner study reveals that organizations risk losing 38 percent of their existing customer base because of poor personalization strategies. From customized promotions and product recommendations to real-time communication, companies can benefit from creating individualized experiences for each customer</p>
                            <h1 className='text-xl mb-2 mt-4 font-bold'>The Impact of Customer Expectations</h1>
                            <p className='text-justify '>Today&apos;s customers expect seamless interactions that resonate with their individual needs. There are multiple paths to purchase in the modern customer&apos;s decision-making journey. An influx of new channels has shifted customer expectations and created new opportunities for business leaders. It&apos;s essential to extend personalization across all channels, devices, and touchpoints to provide a cohesive customer experience. </p>
                            <p className='text-justify '>Ericsson forecasts that the number of smartphone subscriptions worldwide will surpass 7 billion by 2028. Companies must level up their CX approach and meet customers where they are. Hyper-personalization takes into account real-time context in addition to demographic information. Advanced strategies such as CPaaS and omnichannel engagement can ensure that data is synchronized across platforms for high-impact experiences. </p>
                            <h1 className='text-xl mb-2 mt-4 font-bold'>The Synergy of Customer-Centricity and Hyper-Personalization</h1>
                            <p className='text-justify '>Implementing hyper-personalization requires a strategic and coordinated effort across various aspects of the organization. It requires seamless collaboration across teams and integration between different systems to enable a unified view of customer data. Technological innovations such as Artificial Intelligence (AI) play a crucial role in achieving hyper-personalization by enabling businesses to analyze large data sets, identify regular patterns, and deliver highly tailored experiences to individual users. </p>
                            <h1 className='text-xl mb-2 mt-4 font-bold'>Customer Engagement at Every Stage</h1>
                            <p className='text-justify '>According to Forrester&apos;s survey, companies primarily focus on personalization only in the pre-purchase and at-purchase stages. It highlights that customers can be more receptive to personalization in the post-purchase stages, with 47% saying they enjoyed personalized experiences after they bought a product/service.</p>
                            <p className='text-justify '>By mapping the entire customer journey, companies can understand what customers want at each stage. Assess the data you need and determine the technology and strategy required for highly tailored customer experiences.</p>
                            <h1 className='text-xl mb-2 mt-4 font-bold'>The Power of Automation</h1>
                            <p className='text-justify '>Responding to changing customer perceptions requires drawing insights from customer data at the most granular level. Automation powered by AI algorithms enables hyper-personalization because AI can analyze vast datasets and create customer segments based on behaviors and demographics. AI-powered chatbots ensure a seamless and responsive approach to individualized customer journeys. </p>
                            <p className='text-justify '>Automated behavioral analysis informs personalized strategies, ensuring timely and contextually relevant interactions. It also intelligently empowers businesses to deliver targeted and relevant information, fostering a deeper connection with customers. </p>
                            <h1 className='text-xl mb-2 mt-4 font-bold'>Multiple Communication Channels</h1>
                            <p className='text-justify '>Offering a range of communication options signifies a commitment to accommodating your customer base&apos;s varied needs and preferences. Engaging customers across multiple channels such as SMS, Voice, Video, WhatsApp, email, and live chat helps provide a personalized, customer-centric support experience. Companies can leverage Communication Platform as a Service (CPaaS) since it provides the flexibility to easily integrate new channels or modify existing ones, ensuring that businesses can cater to diverse audiences.</p>
                            <p className='text-justify '>Customers can choose to interact on the channel that best suits the nature of their inquiry. Direct conversation on WhatsApp may be more effective for urgent matters, while video calls may be better for addressing complex issues that require visual interactions.</p>
                            <p className='text-justify '>Partnering with a global communications leader like Kaleyra, companies can effortlessly incorporate communication capabilities such as SMS messaging, rich messaging and WhatsApp, video, push notifications, e-mail, voice services, and chatbots. Acquired recently by Tata Communications, a global digital ecosystem enabler, our combined expertise is set to redefine the future of communications via our intelligent suite of customer interaction solutions.</p>
                            <h1 className='text-xl mb-2 mt-4 font-bold'>Real-Time Engagement</h1>
                            <p className='text-justify '>Customers place a high value on businesses that can provide quick and relevant assistance. Real-time engagement is crucial for achieving hyper-personalization, allowing businesses to respond promptly to customer needs. </p>
                            <p className='text-justify '>Companies can use live chat, instant messaging, and chatbots to interact in real-time, providing information and offering support at the precise moment a customer needs it. In addition to improving customer satisfaction, real-time engagement is pivotal in influencing purchase decisions. Furthermore, real-time engagement enables businesses to adapt and tailor their interactions dynamically. </p>
                            <h1 className='text-xl mb-2 mt-4 font-bold'>The Future Landscape of Hyper-Personalization</h1>
                            <p className='text-justify '>As technology continues to advance, the potential for hyper-personalization will only grow. Sophisticated algorithms will take center stage, providing more accurate predictions of customer behaviors. Business leaders will emphasize more on real-time data analysis for instantaneous insights. Amidst the rapid evolution of technology, ensuring the ethical use of customer data and privacy considerations will become more critical than ever, demanding a delicate balance between hyper-personalization and safeguarding privacy rights.</p>
                            <p className='text-justify '>Conversational interfaces, AI-driven technologies, and other innovations will help build lasting customer connections. Businesses that are agile and refine their strategies will be at the forefront of delivering unparalleled customer experiences through hyper-personalization</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-end items-center sticky articles-image-container articles-text-container'>
                        <Image src="/keleyra-icon.png" alt='image' width="500" height="500" className="z-10 fixed kaleyara-icon" />
                        <Image src="/sandesh-sarang.webp" alt='image' width="600" height="800" className="articles-image relative z-20" />
                    </div>
                </div>
            </div>
        </div>
    )
}
