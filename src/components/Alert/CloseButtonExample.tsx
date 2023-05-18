import { Alert, AlertIcon, AlertTitle, AlertDescription, Stack, useDisclosure, Box, CloseButton, Button } from "@chakra-ui/react";
  
import * as React from "react";

export const CloseButtonExample = () => {
    const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: true })
    return isVisible ? (
        <Alert status='success'>
            <AlertIcon/>
            <Box>
                <AlertTitle>
                    Success
                </AlertTitle>
                <AlertDescription>
                Your application has been received. We will review your application
          and respond within the next 48 hours
                </AlertDescription>
            </Box>
            <CloseButton
                alignSelf='flex-start'
                position='relative'
                right={-1}
                top={-1}
                onClick={onClose}
            />
        </Alert>
    ) : (
        <Button onClick={onOpen}>
            Show Alert
        </Button>
    )
}