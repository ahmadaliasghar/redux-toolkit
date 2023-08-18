import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/userSlice'

const ShowAuthor = ({userID}) => {
    const users = useSelector(selectAllUsers);

    const currentUser = users.find(user => user.id === userID)

  return (
    <span>
     By {currentUser ? currentUser.name : 'Unknown author'}
    </span>
  )
}

export default ShowAuthor
