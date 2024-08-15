"use client"

import Image from 'next/image'

const CircleImage = () => {
    return (
        <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/circles.png" width="300" height="300" className="fixed right-0  top-96 mt-32 " alt="Particles " />
        </div>

    );
}

export default CircleImage;