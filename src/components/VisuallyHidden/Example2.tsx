import { CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  Heading,
  VisuallyHidden,
  VisuallyHiddenInput,
  Box,
} from "@chakra-ui/react";
import * as React from "react";

export const Example2 = () => {
  return (
    // Title and Description
    <Box>
      <Heading>Title and description</Heading>
      <VisuallyHidden>This will be hidden</VisuallyHidden>
    </Box>
  );
};
