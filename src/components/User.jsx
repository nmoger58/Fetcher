import React from 'react'
import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
function User() {
    const {userid}=useParams();
    let [data,setdata]=useState([]);
    useEffect(()=>{
      fetch(`https://api.github.com/users/${userid}`)
      .then(res=>res.json())
      .then((data)=>
       setdata(data))
      .catch((err)=>console.log(err))
    },[]);
  return (
    <>
  
    <h1 className=' text-3xl p-3 font-bold'>User : {data.login}
      <h1>Name :{data.name===null?"Name not specified":data.name}</h1>
    <header >Bio : {data.bio!==null?data.bio:"Biodata not specified"}</header>  
    </h1>
    <div className='flex flex-row' >
    <img src={data.avatar_url} alt="" />
     <h2 className='m-2 text-2xl font-light text-orange-700'>Public Repos :{data.public_repos} <br />
     Followers : {data.followers}
     <br />
     Following: {data.following}
      </h2>
    </div>
    </>
  )
}

export default User