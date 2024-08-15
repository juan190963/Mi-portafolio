"use client"

import Image from 'next/image';

import { MotionTransition } from './transition-component';

const AvatarPortfolio = () => {
    return (
        <MotionTransition position='bottom' className="bottom-0 left-0 hidden md:inline-block md:absolute ">
            <Image src="/avatar-works.png" width="300" height="300" className="fixed top-80 right-3/4  w-96 h-96 " alt="Particles " />
        </MotionTransition>

    );
}

export default AvatarPortfolio;