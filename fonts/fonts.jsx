import { Inconsolata,Merriweather} from 'next/font/google'

 
// define your variable fonts
const inconsolata = Inconsolata({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
  })
  const merriweather = Merriweather({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
    style:'italic'
  })
  const inconsolataVerde = Inconsolata({
    weight: '900',
    subsets: ['latin'],
    display: 'swap',
  })
  const merriweatherBold = Merriweather({
    weight: '900',
    subsets: ['latin'],
    display: 'swap',
    style:'italic'
  })
// define 2 weights of a non-variable font

 
export { inconsolata, merriweather,inconsolataVerde,merriweatherBold}