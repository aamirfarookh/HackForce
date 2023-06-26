import { Alert, AlertIcon, Stack } from '@chakra-ui/react'
import React from 'react'

const Errorsignup = () => {
    return (
        <div>
            <Stack spacing={3}>
                <Alert status='error'>
                    <AlertIcon />
                    User Already Register!!
                </Alert>
            </Stack>
        </div>
    )
}

export default Errorsignup