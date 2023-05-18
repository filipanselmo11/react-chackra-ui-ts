import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import * as React from 'react'

export const Label = () => {
    return (
        <CircularProgress value={40} color='green'>
            <CircularProgressLabel>
                40%
            </CircularProgressLabel>
        </CircularProgress>
    )
}