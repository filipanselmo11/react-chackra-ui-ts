import { CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  Heading,
  VisuallyHidden,
  VisuallyHiddenInput,
  Box,
} from "@chakra-ui/react";
import * as React from "react";

export const Example3 = () => {
    return (
        <VisuallyHidden
            defaultChecked
            onChange={(event) => {
                console.log('EVENT ', event.target)
            }}/>
    )
}