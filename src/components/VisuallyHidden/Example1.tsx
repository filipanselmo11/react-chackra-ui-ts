import { CheckIcon } from '@chakra-ui/icons'
import { Button, VisuallyHidden, VisuallyHiddenInput } from '@chakra-ui/react'
import * as React from 'react'

export const Example1 = () => {
    return(
        // Basic
        <Button>
            <VisuallyHidden>Checkmark</VisuallyHidden>
            <CheckIcon/>
        </Button>
    )
}