import { Alert, AlertIcon, AlertTitle, AlertDescription, Stack } from "@chakra-ui/react";
  
import * as React from "react";


export const Composition = () => {
    return (
        <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height={200}>
                <AlertIcon boxSize={40} mr={0}/>
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Application submitted
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    Thanks for submitting your app. Our tem will get back to you soon
                </AlertDescription>
            </Alert>
    )
}