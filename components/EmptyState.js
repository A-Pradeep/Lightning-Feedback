import { Flex, Heading, Text, Button, useColorMode } from "@chakra-ui/react";
import AddSiteModal from "./AddSiteModal";

function EmptyState() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      width="100%"
      backgroundColor={colorMode === "light" ? "white" : "gray.500"}
      borderRadius="8px"
      p={16}
      direction="column"
      align="center"
    >
      <Heading mb={4}> You haven't added any sites</Heading>
      <Text mb={8}>Welcome 👋🏼 Let's get started</Text>

      <AddSiteModal>Add your first site</AddSiteModal>
    </Flex>
  );
}

export default EmptyState;
