const { Box } = require("@chakra-ui/layout");
const { Skeleton } = require("@chakra-ui/skeleton");
const { Td, Table, Tr, Th } = require("../Table");

const SkeletonRow = ({ width }) => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" w={width} my={4}></Skeleton>
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4}></Skeleton>
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4}></Skeleton>
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4}></Skeleton>
    </Td>
  </Box>
);

const SiteTableSkeleton = () => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th></Th>
        </Tr>
      </thead>
      <tbody>
        <SkeletonRow width="75px" />
        <SkeletonRow width="125px" />
        <SkeletonRow width="50px" />
        <SkeletonRow width="100px" />
        <SkeletonRow width="75px" />
      </tbody>
    </Table>
  );
};

export default SiteTableSkeleton;
