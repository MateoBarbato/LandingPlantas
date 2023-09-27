import * as fonts from '../fonts/fonts'

export default function Home() {
  return (
    <main className="min-h-screen m-auto">
        <div className='mx-3 self-center text-[#43523a] text-4xl text-center mt-4 mb-6'>
            <h2 className={fonts.inconsolataVerde.className}>Proyecto Praderas</h2>
            <h2 className={fonts.inconsolataVerde.className}>Ernestina Anchorena</h2>
        </div>
        <div className='mx-3 self-center m-2 grid grid-cols-2 gap-2 cols-span-1 mb-4'>
          <a href='https://www.instagram.com/ernestinaanchorena2/?igshid=MzRlODBiNWFlZA%3D%3D' target='_blank'>
            <button className="bg-white hover:bg-white text-[#43523a] font-bold py-2 px-4 rounded-full animate-pulse flex space-evenly items-center gap-1">
            <div className='w-5 h-5'>
              <img src='./ig.png'></img>
            </div>
            <div className='text-xs'>
              <p className={fonts.inconsolata.className}>Ernestina Anchorena</p>
            </div>
          </button>
          </a>
          <a href='https://instagram.com/cristian.mancini71?igshid=MzRlODBiNWFlZA==' target='_blank'>
            <button className="bg-white hover:bg-white text-[#43523a] font-bold py-2 px-4 rounded-full animate-pulse flex space-evenly items-center gap-2">
              <div className='w-5 h-5'>
                <img src='./ig.png'></img>
              </div>
              <div className='text-xs'>
                <p className={fonts.inconsolata.className}>Cristian Mancini</p>
              </div>
            </button>
          </a>
        </div>
        <div className='mx-3 self-center flex justify-center'>
          <a href='https://wa.me/5191161745657' target='_blank'>
            <button className="bg-white hover:bg-white text-[#43523a] font-bold py-2 px-10 rounded-full animate-pulse flex space-evenly items-center gap-2">
              <div className='w-5 h-5'>
                <img src='./wp.png'></img>
              </div>
              <div className='text-xs'>
                <p className={fonts.inconsolata.className}>¡Hablemos!</p>
              </div>
            </button>
          </a>
      </div>

      
      <div className='mx-3 my-10 flex justify-center'>
        <img className='self-center' src='./asd2.png'></img>
      </div>
    </main>
  )
}
