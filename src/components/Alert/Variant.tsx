import { Alert, AlertIcon, AlertTitle, AlertDescription, Stack } from "@chakra-ui/react";
  
import * as React from "react";

export const Variant = () => {
    return (
        <Stack spacing={3}>
        <Alert status="success" variant='subtle'>
            <AlertIcon/>
            Data uploaded to the server. Fire On
        </Alert>
        <Alert status="success" variant='solid'>
            <AlertIcon/>
            Data uploaded to the server. Fire On
        </Alert>
        <Alert status="success" variant='left-accent'>
            <AlertIcon/>
            Data uploaded to the server. Fire On
        </Alert>
        <Alert status="success" variant='top-accent'>
            <AlertIcon/>
            Data uploaded to the server. Fire On
        </Alert>
        
    </Stack>
    )
}