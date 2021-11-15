import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";

function FeedbackTableHeader() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Feedback</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent="space-between">
        <Heading mb={4}>My Feedback</Heading>
      </Flex>
    </>
  );
}

export default FeedbackTableHeader;
