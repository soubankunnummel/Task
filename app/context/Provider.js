'use client'
import React, { useState } from 'react'
import { AppContext } from './myContext'


export default function Provider({children}) {
    const [text,setText] = useState('')
    const [status, setStatus] = useState(false)
  return (
   <AppContext.Provider value={{text,setText, status, setStatus }}>
    {children}
   </AppContext.Provider>
  )
}
