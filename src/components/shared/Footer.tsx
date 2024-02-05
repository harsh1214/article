import Link from 'next/link';
import React from 'react';
import { Separator } from '../ui/separator';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className='bg-slate-100 py-5 mt-auto w-full'>
            <div className="container px-5 m-auto flex flex-col items-center justify-center gap-4">
                <div className='flex flex-row items-center justify-center gap-3'>
                    <Link href="https://gainskillsmedia.com/pages/privacy-&-policy">Privacy Policy</Link>
                    <Separator orientation="vertical" className="h-6 bg-slate-600" />
                    <Link href="https://gainskillsmedia.com/pages/refund-policy-and-t&c">Refund and Terms & Condition</Link>
                </div>
                <div className='flex flex-row items-center justify-center gap-5 flex-wrap w-full'>
                    <div className='flex flex-row items-center justify-center gap-3 flex-wrap'>
                        <p className='text-3xl'>&#169;</p>
                        <p>All Copyrights Reserved by</p>
                        <Link href="https://gainskillsmedia.com">GainSkills Business Media Pvt Ltd</Link>
                        <p>2024</p>
                    </div>
                    <p>-</p>
                    <div className='flex flex-row gap-2 items-center justify-center'>
                        <Link target='_blank' href="https://www.linkedin.com/company/gain-skills-business-media/"><Image src="/icons/linkedin.svg" alt="social-icon" width={24} height={24} /></Link>
                        <Link target='_blank' href="https://www.instagram.com/gainskillsmedia/"><Image src="/icons/instagram.svg" alt="social-icon" width={24} height={24} /></Link>
                        <Link target='_blank' href="https://www.facebook.com/Gain-Skills-Business-Media-Pvt-Ltd-104212602631585"><Image src="/icons/facebook.svg" alt="social-icon" width={24} height={24} /></Link>
                        <Link target='_blank' href="https://www.youtube.com/@GainSkillsMedia"><Image src="/icons/youtube.svg" alt="social-icon" width={24} height={24} /></Link>
                        <Link target='_blank' href="https://twitter.com/gainskillsmedia"><Image src="/icons/twitter.svg" alt="social-icon" width={24} height={24} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}