import React from 'react'
import { TransfersContextProvider } from '../Context/TransfersContext'
import Accounts from '../Components/Accounts'

export default function Transfers() {
  return (
    <TransfersContextProvider>
      <Accounts />
    </TransfersContextProvider>
  )
}
