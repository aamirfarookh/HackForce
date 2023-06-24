import { ChevronLeftIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    RadioGroup, Text, Box, Image, Flex, Spacer
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

function OpenDrawer() {
    const navigate=useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
   
    const handlelogout=()=>{
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
   if(res.msg=="Logout successfull"){
      localStorage.clear("token")
      navigate("/login")
   }
})
.catch((err)=>{
  console.log(err)
})

    }

    return (
        <>
            <RadioGroup defaultValue={placement} onChange={setPlacement}>
                {/* <Stack direction='row' mb='4'>
            <Radio value='top'>Top</Radio>
            <Radio value='right'>Right</Radio>
            <Radio value='bottom'>Bottom</Radio>
            <Radio value='left'>Left</Radio>
          </Stack> */}
            </RadioGroup>
            <HamburgerIcon ml={2} fontSize={'22px'} color='white' cursor={'pointer'} onClick={onOpen}></HamburgerIcon>
            {/* <Button colorScheme='blue' onClick={onOpen}>
          Open
        </Button> */}
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <Box display={'flex'}>
                        <Box w='85%'>
                            <DrawerHeader borderBottomWidth='1px'>Welcome User</DrawerHeader>
                        </Box>
                        <Box>
                        <ChevronLeftIcon onClick={onClose} fontSize={'26px'} mt='22px' />
                        </Box>
                    </Box>
                    <DrawerBody>
                        {/* <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p> */}
                        <Box>
                            <Link to="/"> <Flex boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'} p={'5px 10px'} mt='2'>
                                <Text mt={"10px"}>Dashbored</Text>
                                <Spacer></Spacer>
                                <Image src="https://tse1.mm.bing.net/th?id=OIP.qhTzE7ydFzi5YT-YWKuyTAHaHa&pid=Api&P=0" w={'12%'} mt={2}></Image>
                            </Flex></Link>
                            <Link to="/"><Flex bg='white' boxShadow={' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'} p={'5px 10px'} mt='4'>
                                <Text mt={"10px"}>Interview</Text>
                                <Spacer></Spacer>
                                <Image src="https://tse2.mm.bing.net/th?id=OIP.8HEnP-vHo_05-T1RBcmdtAHaFd&pid=Api&P=0&h=180" w={'12%'} mt={2}></Image>
                            </Flex></Link>
                            {/* <Link to="/login"><Flex>
              <Text mt={"10px"}>Logout</Text>
              <Spacer></Spacer>
              <Image src="https://tse4.mm.bing.net/th?id=OIP.xS_zX6VNQPlouu_kjL0SAQHaHS&pid=Api&P=0" w={'12%'} mt={2}></Image>
              </Flex></Link> */}
                            <Link to="/progress"> <Flex bg='white' boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'} p={'5px 10px'} mt='4'>
                                <Text mt={"10px"}>progress</Text>
                                <Spacer></Spacer>
                                <Image src="https://tse1.mm.bing.net/th?id=OIP.ygD0GBHLa-DbURw0NIUSIwHaHa&pid=Api&P=0&h=180" w={'12%'} mt={2}></Image>
                            </Flex></Link>
                           <Flex onClick={handlelogout} bg='white' boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'} p={'5px 10px'} mt='4'>
                                <Text mt={"10px"}>Logout</Text>
                                <Spacer></Spacer>
                                <Image src="https://tse4.mm.bing.net/th?id=OIP.xS_zX6VNQPlouu_kjL0SAQHaHS&pid=Api&P=0" w={'12%'} mt={2}></Image>
                            </Flex>
                            {/* <Link to="/payment"> <Flex>
             <Text mt={"10px"}>Payment Page</Text>
             <Spacer></Spacer>
             <Image src="https://tse1.mm.bing.net/th?id=OIP.eeIVGfUdgCeibDgcqo1kYQHaF6&pid=Api&P=0"  w={'12%'} mt={2}></Image>
             </Flex></Link> */}

                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default OpenDrawer