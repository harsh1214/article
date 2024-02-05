import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

export default function Header() {
    return (
        <div className='border-b sticky top-0 left-0 z-50 bg-white w-full'>
            <div className='container mx-auto flex flex-row items-center justify-between py-5 px-5 gap-5'>
                <Link href="/" className='w-96 h-14 relative flex items-center'>
                    <Image src="/nav.png" alt="Image" width="192" height="52" className='h-auto hidden md:block' />
                    <Image src="/nav.png" alt="Image" width="140" height="52" className='h-auto md:hidden block' />
                </Link>
                {/* <div className='w-full flex flex-row items-center justify-center relative'>
                    <div className='max-w-lg w-full m-auto relative'>
                        <Input type="text" placeholder='Search' className='w-full focus:border-slate-700' />
                        <Link href="#" className='absolute right-0 top-0 p-2 rounded-lg'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z" fill="currentColor"></path></svg>
                        </Link>
                    </div>
                </div> */}
                <div className='w-48 flex items-center justify-end'>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className="rounded-full" size="lg">
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </div>
    )
}
