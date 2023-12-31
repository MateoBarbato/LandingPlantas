'use client'
import * as fonts from '../fonts/fonts'
// import { useState, useEffect } from 'react';


export default function Mobile() {

  
  return (
    <main className="min-h-screen m-auto">
        <div className='mx-3 self-center text-[#43523a] text-center mt-4 mb-6'>
            <div className='text-4xl mb-2 underline '>
            <h2 className={fonts.merriweatherBold.className}>Proyecto Praderas</h2>
            </div>
            <div className='text-1xl tracking-wider'>
            <h2 className={fonts.merriweather.className}>Ernestina Anchorena - Cristian Mancini</h2>
            </div>            
        </div>
        <div className='mx-3 self-center text-[#43523a] text-center text-1xl underline tracking-wider'>
          <h2 className={fonts.merriweather.className}>Contacto</h2>
        </div>
        <div className='mx-3 self-center m-2 grid grid-cols-2 gap-2 cols-span-1 mb-4'>
          <a href='https://www.instagram.com/ernestinaanchorena2/?igshid=MzRlODBiNWFlZA%3D%3D' target='_blank' className='flex justify-center'>
            <button className="bg-white hover:bg-white text-[#43523a] font-bold py-2 px-4 rounded-full animate-pulse flex space-evenly justify-center items-center gap-2 w-full">
            <div className='w-5 flex content-center'>
              <img src='./ig.png'></img>
            </div>
            <div className='text-xs text-center tracking-tight'>
              <p className={fonts.inconsolata.className}>Ernestina Anchorena</p>
            </div>
          </button>
          </a>
          <a href='https://instagram.com/cristian.mancini71?igshid=MzRlODBiNWFlZA==' target='_blank' className='flex justify-center'>
            <button className="bg-white hover:bg-white text-[#43523a] font-bold py-2 px-4 rounded-full animate-pulse flex space-evenly justify-center items-center gap-2 w-full">
              <div className='w-5'>
                <img src='./ig.png'></img>
              </div>
              <div className='text-xs text-center '>
                <p className={fonts.inconsolata.className}>Cristian Mancini</p>
              </div>
            </button>
          </a>
        </div>
        <div className='mx-3 self-center flex justify-center'>
          <a href='https://wa.me/5491168709540' target='_blank'>
            <button className="bg-white hover:bg-white text-[#43523a] font-bold py-2 px-10 rounded-full animate-pulse flex justify-center space-evenly items-center gap-2">
              <div className='w-6 flex content-center'>
                <img className='' src='./wp.png'></img>
              </div>
              <div className='text-s w-full text-center'>
                <p className={fonts.inconsolata.className}>¡Hablemos!</p>
              </div>
            </button>
          </a>
      </div>

      
      <div className='mx-4 pb-10 my-6 flex justify-center'>
        <img className='self-center' src='./asd.png'></img>
      </div>
    </main>
  )
}
