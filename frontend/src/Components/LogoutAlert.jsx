import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

import React from 'react'

const LogoutAlert = () => {
  return (
    <div w='20%' m='auto'>

<Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='70px'
  w='100%'
  borderRadius={'2px'}
>
  <AlertIcon  boxSize='40px' mr={0} />
  <AlertTitle mt={0.5} mb={1} fontSize='lg'>
    Logout successfull!!
  </AlertTitle>
</Alert>
    </div>
  )
}

export default LogoutAlert
