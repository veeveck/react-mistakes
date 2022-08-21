import React, { useState } from 'react'

const M2 = () => {
    const [user,setUser]=useState({});//white screen problem
  return (
    <div>
       {/* <span>Username is : {user.name}</span> */}
       {/* or  */}
        <span>Username is :{user?.name}</span>
    </div>
  )
}

export default M2