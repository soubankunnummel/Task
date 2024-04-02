'use client'
import React, { useState } from 'react'
import { AppContext } from './myContext'


export default function Provider({children}) {
    const [text,setText] = useState('')
  return (
   <AppContext.Provider value={{text,setText}}>
    {children}
   </AppContext.Provider>
  )
}
