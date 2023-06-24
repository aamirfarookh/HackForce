import { Box, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { PhoneIcon } from '@chakra-ui/icons'
import { BsFillMicFill } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";
import OpenDrawer from './Opendrawer';

const Dashboard = () => {
  const [promptInput, setPromptInput] = useState('');
  const [responsesDiv, setResponsesDiv] = useState('');
   console.log(responsesDiv)
  
  const fetchPrompt = async () => {
    try {
      const response = await fetch('http://localhost:4500/startprompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: promptInput
        })
      });
      const data = await response.json();
      console.log(data.res)
      setPromptInput('')
      // setResponsesDiv(data.res)
      if (data.status === 200) {
        const newData = (
          <div>
            <h3>{promptInput}</h3>
            <hr />
            <p>{data.res}</p>
            <hr />
          </div>
        );
        setResponsesDiv(prevResponsesDiv => prevResponsesDiv + newData);
        setResponsesDiv(data.res)
        
      } else {
        alert('Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box bg='#64B5F6' height={'100vh'}  w='100%' display={'flex'}> 
    {/* sidebar */}
    <Box h='auto ' w='20%' textAlign={'left'}>
      <OpenDrawer/>
    </Box>
      <Box display={{ base: "block", sm: "block", md: "block", lg: "block", xl: "flex", "2xl": "flex" }} w='70%' h='600px' m='20px auto' justifyContent={'space-between'}>

        <Box  borderRadius={'10px'} boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}  width={{ base: "100%", sm: "90%", md: "80%", lg: "70%", xl: "60%", "2xl": "60%" }} h='700px' border='1px solid #563d7c' bg='whitesmoke'>
          <Text borderTopRadius={'10px'} bg='#FD2654' color='white'>Chat box</Text>
     {/* {responsesDiv && <Box border='1px solid red' h='250px' w='100%' padding={'10px'} overflow={'hidden'} overflowY={'scroll'}>
            {responsesDiv}
       </Box>}   */}
       <Box display={responsesDiv ? "block" :"none"} h='250px' w='100%' overflow={'hidden'} overflowY={'scroll'} textOverflow={'none'} fontSize={'18px'} p='10px'>
            {responsesDiv}
       </Box>
          <Box  w='100%' h='95%' position={'relative'}>
            <Box style={{ position: "absolute", bottom: 0 }} w='100%' p='0px 10px'>
              <Stack mt={responsesDiv?'-292px':'20px'} border='1px solid red' borderRadius={'10px'} spacing={4}  boxShadow={'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;'} pr='5px'>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children='$'
                  />
                  <Input value={promptInput} onChange={(e)=>setPromptInput(e.target.value)} borderRadius={'10px'} placeholder='Send a message' focusBorderColor='none' />
                  <InputRightElement w='10%'>
                    <BsFillMicFill color='gray.300' fontSize={'20px'}/>
                    <Box ml='15px'>
                    <VscSend onClick={fetchPrompt} mr='10px' fontSize={'20px'}/>
                    </Box>
                  </InputRightElement >
                </InputGroup>
              </Stack>

            </Box>

          </Box>
        </Box>
        <Box mt='20px' bg='white' borderRadius={'10px'} boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'} width={{ base: "100%", sm: "90%", md: "80%", lg: "70%", xl: "30%", "2xl": "30%" }}h='550px' border='1px solid black'>
          <Text borderTopRadius={'10px'} bg='#563d7c' color='white'>Feedback</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard