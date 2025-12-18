import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Logo from "../public/Logo.png";

export default function Header() {
  return (
    <section className='flex flex-col justify-center items-center'>
      <Link href="/">
        <Image src={Logo} alt="Logo" width={200} height={100} />
      </Link>
      <h1 className="text-black font-bold pb-5 sm:pb-16 pt-5 text-center">
        Software and web development solutions for small businesses.
      </h1>
    </section>
  )
}
