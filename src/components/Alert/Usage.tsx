import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import * as React from "react";

export const Usage = () => {
    return (
        <Alert status="error">
            <AlertIcon/>
            <AlertTitle>
                Your browser is outdated !
            </AlertTitle>
            <AlertDescription>Your chakra experience may be degraded</AlertDescription>
        </Alert>
    )
}