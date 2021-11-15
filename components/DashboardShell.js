import Navbar from "./navbar";
import { useColorMode, Flex } from "@chakra-ui/react";

function DashboardShell({ children, siteCount }) {
  const { colorMode } = useColorMode();
  return (
    <>
      <Navbar />
      <Flex
        backgroundColor={colorMode === "light" ? "gray.100" : "gray.700"}
        p={8}
      >
        <Flex w="100%" mx="auto" direction="column" maxWidth="80%">
          {children}
        </Flex>
      </Flex>
    </>
  );
}

export default DashboardShell;
