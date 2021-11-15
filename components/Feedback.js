import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

const Feedback = ({ author, text, createdAt }) => (
  <Box borderRadius={4} maxWidth="700px" w="full">
    <Heading size="sm" as="h3" mb={0} fontWeight="medium">
      {author}
    </Heading>
    <Text mb={4} fontSize="xs">
      {format(parseISO(createdAt), "PPpp")}
    </Text>
    <Text>{text}</Text>
    <Divider borderColor="gray.200" backgroundColor="gray.200" mt={8} mb={8} />
  </Box>
);

export default Feedback;
