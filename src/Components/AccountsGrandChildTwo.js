import React from 'react'

export default function AccountsGrandChildTwo({ userComments }) {

  return (
    <div className='mt-5'>
      AccountsGrandChildTwo
      <div>User comments: {userComments?.body}</div>
    </div>
  )
}
