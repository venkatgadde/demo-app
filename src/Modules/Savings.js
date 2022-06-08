import React from 'react'
import { SavingsContextProvider } from '../Context/SavingsContext'

export default function Savings() {
  return (
    <SavingsContextProvider>
      Savings
    </SavingsContextProvider>
  )
}
