import { Box, Text } from "@chakra-ui/layout";

export const Th = (props) => (
  <Text
    as="th"
    textTransform="uppercase"
    fontSize="xs"
    color="gray.500"
    fontWeight="medium"
    borderRadius={8}
    px={4}
    {...props}
  />
);

export const Td = (props) => (
  <Box
    as="td"
    color="gray.900"
    p={4}
    borderTop="1px solid"
    borderTopColor="gray.100"
    {...props}
  />
);

export const Tr = (props) => (
  <Box
    as="tr"
    backgroundColor="gray.50"
    borderRadius={8}
    borderBottomColor="gray.200"
    height="40px"
    {...props}
  />
);

export const Table = (props) => {
  return (
    <Box
      as="table"
      textAlign="left"
      backgroundColor="white"
      mx={0}
      borderRadius={8}
      borderBottom={0}
      boxShadow="0px 4px 10px rgba(0,0,0,0.5)"
      {...props}
    />
  );
};
