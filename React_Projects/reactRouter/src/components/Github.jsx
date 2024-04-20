import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData();
    console.log(data);

    // const[data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/KshitijDwivedi004')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 text-white bg-slate-500 p-4 text-3xl'>
        Github Followers: {data.followers + 100}
        <img className='rounded-lg' width={300} src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github
export const gitHubInfoLoader =async ()=>{
    const data = await fetch('https://api.github.com/users/KshitijDwivedi004')
    return data.json();
}