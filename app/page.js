'use client'
import Mobile from '@/components/mobile'
import Pc from '@/components/pc'
import { useState, useEffect } from 'react';


export default function Home() {

  
  const [mobile, setMobile] = useState(undefined)

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth > 576 ? true : false)
    }

    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [])

  return typeof mobile !== 'undefined' ? (
    mobile ? (
      <Pc></Pc>
      
    ) : (
      <Mobile></Mobile>
    )
  ) : null
}

