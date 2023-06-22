import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { Progress } from '@chakra-ui/react'

export default function ProgressPage() {
    return (
        <Box>
            <Stack spacing={5}>
                <Progress colorScheme='green' size='sm' value={40} />
                <Progress colorScheme='green' size='md' value={20} />
                <Progress colorScheme='green' size='lg' value={20} />
                <Progress colorScheme='green' height='32px' value={20} />
            </Stack>
        </Box>
    )
}
