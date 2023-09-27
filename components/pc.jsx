'use client'
import * as fonts from '../fonts/fonts'
// import { useState, useEffect } from 'react';


export default function Pc() {

  
  return (
    <main className="min-h-screen m-auto">
        <div className='mx-3 self-center text-[#43523a] text-center mt-6 mb-6'>
            <div className='text-6xl mb-4 underline '>
            <h2 className={fonts.merriweatherBold.className}>Proyecto Praderas</h2>
            </div>
            <div className='text-4xl tracking-wider'>
            <h2 className={fonts.merriweather.className}>Ernestina Anchorena</h2>
            </div>            
        </div>
        <div className='mx-3 mb-5 self-center text-[#43523a] text-center text-3xl underline tracking-wider'>
          <h2 className={fonts.merriweather.className}>Contacto</h2>
        </div>

        <div className='flex justify-center'>
        <div className='mx-14 self-center grid grid-cols-3 gap-2 cols-span-1 mb-10 w-10/12'>
          <a href='https://www.instagram.com/ernestinaanchorena2/?igshid=MzRlODBiNWFlZA%3D%3D' target='_blank' className='flex justify-center'>
            <button className="bg-white hover:bg-white text-[#43523a] font-bold py-4 rounded-full animate-pulse flex space-evenly justify-center items-center gap-4 w-full">
            <div className='w-8 flex content-center'>
              <img src='./ig.png'></img>
            </div>
            <div className='text-xl text-center tracking-tight'>
              <p className={fonts.inconsolata.className}>Ernestina Anchorena</p>
            </div>
          </button>
          </a>
          <a href='https://instagram.com/cristian.mancini71?igshid=MzRlODBiNWFlZA==' target='_blank' className='flex justify-center'>
            <button className="bg-white hover:bg-white text-[#43523a] font-bold py-4 rounded-full animate-pulse flex space-evenly justify-center items-center gap-4 w-full">
              <div className='w-8'>
                <img src='./ig.png'></img>
              </div>
              <div className='text-xl text-center '>
                <p className={fonts.inconsolata.className}>Cristian Mancini</p>
              </div>
            </button>
          </a>
          <a href='https://wa.me/5491168709540' target='_blank'>
            <button className="bg-white hover:bg-white text-[#43523a] font-bold py-4 rounded-full animate-pulse flex justify-center space-evenly items-center gap-4 w-full">
              <div className='w-8 flex content-center'>
                <img className='' src='./wp.png'></img>
              </div>
              <div className='text-xl text-center'>
                <p className={fonts.inconsolata.className}>¡Hablemos!</p>
              </div>
            </button>
          </a>
        </div>
        </div>
       
        {/* <div className='mx-3 self-center flex justify-center'>
          
      </div> */}

      
      <div className='mx-16 pb-10 my-6 flex justify-center'>
        <img className='self-center w-10/12' src='./asd.png'></img>
      </div>
    </main>
  )
}
