'use client'
import Logo from '@/public/logo.svg'
import Image from "next/image"
import { Typewriter, Cursor } from 'react-simple-typewriter';
import ButtonsProvider from './components/ButtonsProvider';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  const { data: session } = useSession()

  if(session){
    redirect('/dashboard/notes')
  }
  return (
    <section className='w-full h-screen flex items-center justify-center flex-col gap-2'>
      <Image width={100} height={100} alt='Logo' src={Logo} className='mb-4 object-contain' />
      <h1 className='text-4xl md:text-6xl font-black mb-2 text-center uppercase flex items-center'>
        <Typewriter typeSpeed={50} words={['Bienvenue']} loop={1} />
        <span><Cursor></Cursor></span>
      </h1>
      <p className="my-2 text-center">Baseline</p>
      <ButtonsProvider></ButtonsProvider>
    </section>
  );
}
