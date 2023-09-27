import { Inconsolata,Merriweather_Sans} from 'next/font/google'

 
// define your variable fonts
const inconsolata = Inconsolata({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
  })
  const merriweather_Sans = Merriweather_Sans({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })
  const inconsolataVerde = Inconsolata({
    weight: '900',
    subsets: ['latin'],
    display: 'swap',
  })
  const merriweather_SansBold = Merriweather_Sans({
    weight: '800',
    subsets: ['latin'],
    display: 'swap',
  })
// define 2 weights of a non-variable font

 
export { inconsolata, merriweather_Sans,inconsolataVerde,merriweather_SansBold}