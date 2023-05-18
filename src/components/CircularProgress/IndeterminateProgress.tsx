import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import * as React from 'react'

export const IndeterminateProgress = () => {
    return (
        <CircularProgress isIndeterminate color='green.300' />
    )
}