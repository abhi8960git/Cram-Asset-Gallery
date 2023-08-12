import Image from 'next/image';
import { Orbitron } from 'next/font/google'; // Importing Orbitron font
import Card from '@/components/Card';


const orbitron = Orbitron({ subsets: ['latin'] });

export default function Home() {
  return (
  <>
    <main
      className={`flex min-h-screen flex-col items-center m-0 ${orbitron.className}`}
    >
      <h2 className={`${orbitron.className} uppercase text-8xl font-[500] text-white pt-10 text_gradient `}>Cram World</h2> 

      <h2 className={`${orbitron.className} uppercase text-3xl font-[500] text-white pt-3`}>Asset's Collection</h2> 




  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mt-[100px] '>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>

    </main>

  
  </>

    
  );
}
