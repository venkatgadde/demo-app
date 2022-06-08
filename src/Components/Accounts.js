import React, { useState, useEffect } from 'react';
import { useTransfersContext } from '../Context/TransfersContext';
import { useNotificationContext } from '../Context/NotificationContext';
import AccountsChild from './AccountsChild';
import AccountsGrandChild from './AccountsGrandChild';
import AccountsGrandChildTwo from './AccountsGrandChildTwo';

export default function Accounts() {
  const { loading, data, error } = useTransfersContext();
  const { setNotificationContent } = useNotificationContext();
  const [currentUser, setCurrentUser] = useState(data[0]);
  const [userComments, setUserComments] = useState([]);

  useEffect(() => {
    setNotificationContent(error);
  }, [error]);

  useEffect(() => {
    setCurrentUser(data[0])
  }, [data]);

  const onFromItemHandler = (e) => {
    if (e.target.value === '2') {
      const fromError = {
        type: 'warning',
        message: 'Hey, that is not possible.'
      }
      setNotificationContent(fromError);
    }
    fetchCurrentUserDetails(e.target.value);
  }

  const onToItemHandler = (e) => {
    fetchToUserComments(e.target.value);
  }

  const fetchCurrentUserDetails = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    setCurrentUser(data);
  }

  const fetchToUserComments = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    const data = await response.json();
    setUserComments(data);
  }

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  if (error) {
    return <div>Oops! Not looking great!</div>
  }

  return (
    <div>
      <p>
        <label className='d-block'>From</label>
        <select onChange={onFromItemHandler}>
          {
            data.map(item => {
              return <option key={item.id} value={item.id}>{item.name}</option>
            })
          }
        </select>
      </p>

      <p>
        <label className='d-block'>To</label>
        <select onChange={onToItemHandler}>
          {
            data.map(item => {
              return <option key={item.id} value={item.id}>{item.username}</option>
            })
          }
        </select>
      </p>

      <AccountsChild
        childone={<AccountsGrandChild currentUser={currentUser} />}
        childtwo={<AccountsGrandChildTwo userComments={userComments[0]} />}
      />

    </div>
  )
}
