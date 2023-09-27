import * as fonts from '../fonts/fonts'

export default function Home() {
  return (
    <main className="min-h-screen m-auto">
      <div className='mx-6 self-center m-2'>
        <button class="bg-[#43523A] hover:bg-[#43523A] text-white font-bold py-2 px-4 rounded-full animate-pulse flex space-evenly items-center gap-2">
          <div className='w-3 h-3 '>
            <img src='./whatsapp.png'></img>
          </div>
          <div className=''>
            <p class="text-xs">Hablame a Wp!</p>
          </div>
        </button>
      </div>

      
      <div className='mx-6 m-2/'>
        <img src='./asd2.png'></img>
      </div>
    </main>
  )
}
