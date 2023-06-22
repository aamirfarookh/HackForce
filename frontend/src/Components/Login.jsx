import React, { useState } from 'react'
import { Box, Input, Button, Heading } from "@chakra-ui/react"
export default function Login() {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const handleinput=()=>{
        const payload={email,password}
        console.log(payload)
    }
    return (
        <Box h="100vh" backgroundImage={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c2a1c2a-3796-432c-b00c-ce42bdbe5e44/d4tgoc9-31e89077-3ec6-49c0-82e8-d0b534c02a71.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZjMmExYzJhLTM3OTYtNDMyYy1iMDBjLWNlNDJiZGJlNWU0NFwvZDR0Z29jOS0zMWU4OTA3Ny0zZWM2LTQ5YzAtODJlOC1kMGI1MzRjMDJhNzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GOab5-CPgWgaYsSSphlhrFzE-XP-M0mFZVUno16Jddc'} pt='80px'>
           
            <Box borderRadius={'10px'}  w='30%' m='auto' p='30px' boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}>

            <Heading pb={'80px'}>Login</Heading>
                {/* <Input mb={'10px'} focusBorderColor='none' _hover={'none'}/> */}
                <Input
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                    bg='white'
                    color='teal'
                    placeholder='Email'
                    _placeholder={{ color: 'inherit',bg:'white' }}
                    mb='20px'
                />
                <br></br>
                <Input
                   value={password}
                   onChange={(e)=>setpassword(e.target.value)}
                   bg='white'
                   color='teal'
                   placeholder='Password'
                   _placeholder={{ color: 'inherit',bg:'white' }}
                   mb='20px'
                />
                <br></br>
                <Button onClick={handleinput} backgroundColor={'green'} color={'white'} _hover={'none'} w="100%">Login</Button>
                <br></br>
            </Box>
        </Box>
    )
}
