import React from 'react'
import TexasIcon from '@/public/icons/TexasBull_2.0.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='flex flex-row justify-between bg-rojoprincipal bg-opacity-70 w-screen h-32'>
        <div className=' flex w-1/2 justify-center items-center'>
            <Image src={TexasIcon} width={Infinity} height={Infinity} className='h-14 w-10'/>
            <h1></h1>
        </div>
        <div className=''>
        </div>
    </footer>
  )
}
