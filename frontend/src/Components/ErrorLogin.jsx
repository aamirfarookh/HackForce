import { Alert, AlertIcon, Stack } from '@chakra-ui/react'
import React from 'react'

const ErrorLogin = () => {
    return (
        <div>
            <Stack spacing={3}>
                <Alert status='error'>
                    <AlertIcon />
                    Incorrect Password !
                </Alert>
            </Stack>
        </div>
    )
}

export default ErrorLogin