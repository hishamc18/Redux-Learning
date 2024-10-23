import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './UserSlice';

function FetchMain() {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users)
    const userStatus = useSelector((state) => state.users.status)
    const error = useSelector((state) => state.users.error)


    useEffect(() => {
        if(userStatus == 'idle'){
            dispatch(fetchUsers())
        }
    },[userStatus, dispatch])

    let content;


    if(userStatus == 'loading'){
        <div>Loading....</div>
    }
    else if(userStatus == 'succeeded'){
        content = users.map((user) => 
        <div key={user.id}>{user.name}</div>)
    }
    else if(userStatus == 'failed'){
        content = <div>{error}</div>
    }

  return (
    <div>
      <h2>User Details</h2>
      {content}
    </div>
  )
}

export default FetchMain


