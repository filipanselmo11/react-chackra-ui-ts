import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import * as React from 'react'

export const Size = () => {
    return (
        <CircularProgress
            value={30}
            size={120}
            color='orange'
        />
    )
}