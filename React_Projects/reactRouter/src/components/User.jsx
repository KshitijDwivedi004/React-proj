import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userId}=useParams()
  return (
    <div className='bg-slate-500 text-white h-10 rounded-lg text-center pt-2'>
        User : {userId}
    </div>
  )
}

export default User