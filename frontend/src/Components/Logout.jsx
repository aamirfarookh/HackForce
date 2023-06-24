import { Box } from '@chakra-ui/react'
import React from 'react'

const Logout = () => {
  
  fetch("http://localhost:8800/user/logout",{
    method:"GET",
    headers:{
        "Content-Type":"Application/json",
        authorization:localStorage.getItem("token")
    }
})
.then((res)=>res.json())
.then((res)=>{
   console.log(res)
})
.catch((err)=>{
  console.log(err)
})

}

export default Logout