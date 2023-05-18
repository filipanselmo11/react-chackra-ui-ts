import * as React from "react";
import { Progress, Stack } from "@chakra-ui/react";

export const ProgressSizes = () => {
  return (
    <Stack spacing={5}>
      <Progress colorScheme="green" size="sm" value={20} />
      <Progress colorScheme="green" size="md" value={20} />
      <Progress colorScheme="green" size="lg" value={20} />
      <Progress colorScheme="green" height={32} value={20} />
    </Stack>
  );
};
