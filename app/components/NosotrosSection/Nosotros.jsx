import React from 'react'
import ImagePersona from "@/public/Nosotros/ImagenDeEjemploPersona.webp"
import Image from 'next/image'

export default function Nosotros() {
    return (
        <section className="w-full pb-5">
            <div className='w-full bg-[#ecc238] bg-opacity-80 h-40 flex p-1'>
                <div className='w-[50%] flex  max-w-[300px] aspect-[2/3] justify-center'>
                    <Image
                        height={500}
                        width={140}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        src={ImagePersona}
                        alt="ImageAllProduct"
                        className="object-cover rounded-lg"
                    ></Image>
                </div>
                <div className='w-[50%] flex flex-col text-xs font-roboto'>
                    <h1 className='text-rojoprincipal text-xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold pb-2'>Nombre ejemplo</h1>
                    <span className='text-black text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quasi nam quam dolorum neque minus ipsam totam enim ut magnam.</span>
                </div>
            </div>
        </section>
    )
}
