import React, { useState } from 'react'
import { Box, Input, Button, Heading } from "@chakra-ui/react"
export default function Signup() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const handleinput = () => {
        const payload = { name,email, password }
        console.log(payload)
    }
    return (
        <Box h="100vh" backgroundImage={'https://wallpapercave.com/wp/wp4390828.jpg'} pt='80px'>

            <Box borderRadius={'10px'} w='30%' m='auto' p='30px' boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}>

                <Heading pb={'80px'}>Signup</Heading>
                {/* <Input mb={'10px'} focusBorderColor='none' _hover={'none'}/> */}
                <Input
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    bg='white'
                    color='teal'
                    placeholder='Name'
                    _placeholder={{ color: 'inherit', bg: 'white' }}
                    mb='20px'
                />
                <br></br>
                <Input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    bg='white'
                    color='teal'
                    placeholder='Email'
                    _placeholder={{ color: 'inherit', bg: 'white' }}
                    mb='20px'
                />
                <br></br>
                <Input
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    bg='white'
                    color='teal'
                    placeholder='Password'
                    _placeholder={{ color: 'inherit', bg: 'white' }}
                    mb='20px'
                />
                <br></br>
                <Button onClick={handleinput} backgroundColor={'green'} color={'white'} _hover={'none'} w="100%">Signup</Button>
            </Box>
        </Box>
    )
}
