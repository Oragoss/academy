import React, { Suspense } from 'react'
import ProductCard from './components/ProductCard/ProductCard'
import Image from "next/image";
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/authOptions'
import egg from "@/public/images/Cute Egg.png"

//Start here: https://members.codewithmosh.com/courses/mastering-next-js-13-with-typescript/lectures/49120547
//TODO: Add this: https://www.youtube.com/watch?v=DCRcFf39SYo
export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
        {/* <h1>Hello{ session ? <span>&nbsp;{session.user?.name}!</span> : "!" }</h1>
        <ProductCard /> */}
        <Image src={egg} alt="Smiling Egg"/>
        {/* This is another option but className is preferred: style={{objectFit: 'cover'}} */}
        <Image 
          src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg" 
          alt="Stock image" 
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px), 50vw, 33vw"
          quality={100}
          priority
        /> 
    </main>
  )
}
