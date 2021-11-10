import Navbar from "./navbar";
import {
  useColorMode,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";
import AddSiteModal from "./AddSiteModal";

function DashboardShell({ children, siteCount }) {
  const { colorMode } = useColorMode();
  return (
    <>
      <Navbar />
      <Flex
        backgroundColor={colorMode === "light" ? "gray.100" : "gray.700"}
        p={8}
        height="100vh"
      >
        <Flex w="100%" mx="auto" direction="column" maxWidth="80%">
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex justifyContent="space-between">
            <Heading mb={4}>My Sites</Heading>
            {siteCount > 0 && <AddSiteModal> + Add Site</AddSiteModal>}
          </Flex>
          {children}
        </Flex>
      </Flex>
    </>
  );
}

export default DashboardShell;
