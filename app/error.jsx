'use client' // Error components must be Client Components

import Image from 'next/image'


export default function Error({ error, reset }) {

    return (
        <>
            <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                <div className="w-full xl:w-1/2 relative pb-12">
                    <div className="relative">
                        <div className="absolute">
                            <div className="">
                                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                    Something went wrong!
                                </h1>
                                <p className="my-2 text-gray-800">
                                    {error?.message}
                                </p>
                                <button
                                    onClick={
                                        // Attempt to recover by trying to re-render the segment
                                        () => reset()
                                    }
                                    className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                                    Take me there!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image width={400} height={400} alt="error" src="https://i.ibb.co/ck1SGFJ/Group.png" />
                </div>
            </div>
        </>

    )
}