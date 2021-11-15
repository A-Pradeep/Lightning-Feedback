import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";
import AddSiteModal from "./AddSiteModal";

function SiteTableHeader() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Sites</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent="space-between">
        <Heading mb={4}>My Sites</Heading>
        <AddSiteModal> + Add Site</AddSiteModal>
      </Flex>
    </>
  );
}

export default SiteTableHeader;
