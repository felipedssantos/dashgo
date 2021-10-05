import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Felipe Dumont</Text>
          <Text color="gray.300">felipedumontt@hotmail.com</Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Felipe Dumont"
        src="https://github.com/felipedssantos.png"
      />
    </Flex>
  );
}
