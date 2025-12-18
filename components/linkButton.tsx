import React from 'react'
import { CallMade } from '@mui/icons-material'
import Link from 'next/link'

export default function LinkButton({text, href}: {text: string, href: string}) {
  return (
    <Link href={href} className='flex items-center'>
      <h2 className='text-black hover:underline'>{text}</h2>
      <CallMade className='text-black' sx={{fontSize: 20}}/>
    </Link>
  )
}
