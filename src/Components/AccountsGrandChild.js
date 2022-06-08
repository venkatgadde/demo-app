import React from 'react'
import { useTransfersContext } from '../Context/TransfersContext'

export default function AccountsGrandChild({ currentUser }) {

  return (
    <div className='mt-5'>
      AccountsGrandChild
      <div>From User Details: {currentUser?.email}</div>
    </div>
  )
}
