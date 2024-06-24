import React from 'react'
import { useState ,useEffect} from 'react'
import { useRef } from 'react'
import {NavLink,useParams} from 'react-router-dom'
function Fetch() {
    const [msg,setmsg]=useState('');
    const input=(event)=>{
        setmsg(event.target.value)
       console.log(event.target.value)
    }
    const {userid}=useParams(msg);
    let [data,setdata]=useState([]);
    useEffect(()=>{
      fetch(`https://api.github.com/users/${userid}`)
      .then(res=>res.json())
      .then((data)=>setdata(data))
      .catch((err)=>console.log(err))
    },[userid,msg]);
    const ref=useRef(null)
  return (
    <>
    <form action={"fetch/user/"+msg} method=''>
<div className='text-3xl font-bold m-3'>
    <h2>Enter the platform to search the user</h2>
    User:<input type="text" name="" id="" className='m-3 bg-gray-200 rounded p-2 text-blue-400' value={msg} onChange={input}/>
    <h2>{msg}</h2>
    <NavLink to={"User/"+msg} className="text-gray-800  bg-orange-600 hover:bg-orange-50 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
            Check
        </NavLink>
</div>
</form>
<h1 className=' text-3xl p-3 font-bold'>User : {userid}
      <h1>Name : {data.name===null?"Name not specified":data.name}</h1>
    <header >Bio : {data.bio!==null?data.bio:"Biodata not specified"}</header>  
    </h1>
    <div className='flex flex-row' >
    <img src={data.avatar_url} alt=""/>
     <h2 className='m-2 text-2xl font-light text-orange-700 '>Public Repos :{data.public_repos} <br />
     Followers : {data.followers}
     <br />
     Following: {data.following}
     <br />
     <a href={"https://github.com/"+userid} className='text-xl text-blue-900 underline'>Github Link</a>
      </h2>
    </div>
</>
  )
}

export default Fetch
