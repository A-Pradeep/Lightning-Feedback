import { UseAuth } from "@/lib/auth";
import { deleteFeedback } from "@/lib/db";
import CustomModal from "@/utils/CustomModal";
import { Switch } from "@chakra-ui/switch";
import { useToast } from "@chakra-ui/toast";
import { mutate } from "swr";

const { Box, Code } = require("@chakra-ui/layout");
const { Td, Table, Tr, Th } = require("./Table");

const FeedbackTable = ({ allfeedback }) => {
  const toast = useToast();
  const auth = UseAuth();

  const handleDeleteConfirm = (id) => {
    deleteFeedback(id);
    mutate(
      ["/api/feedback", auth.user.token],
      async (data) => {
        return {
          feedback: data.feedback.filter((feedback) => feedback.id !== id),
        };
      },
      false
    );
    showToast();
  };

  const showToast = () => {
    toast({
      title: "Feedback Deleted.",
      description: "Feedback has been deleted to the site.",
      position: "top-right",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th></Th>
        </Tr>
      </thead>
      <tbody>
        {allfeedback.map((feedback) => (
          <Box as="tr" key={feedback.id}>
            <Td fontWeight="medium">{feedback.siteName}</Td>
            <Td>{feedback.text}</Td>
            <Td>
              <Code>{"/"}</Code>
            </Td>
            <Td>
              <Switch
                colorScheme="teal"
                defaultChecked={feedback.status === "active" ? true : false}
              />
            </Td>
            <Td>
              <CustomModal
                onDeleteConfirm={() => {
                  handleDeleteConfirm(feedback.id);
                }}
              />
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
