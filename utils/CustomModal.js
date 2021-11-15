import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";

import { IconButton } from "@chakra-ui/button";
import { DeleteIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/tooltip";

function CustomModal({ onDeleteConfirm }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip hasArrow label="Delete Feedback" placement="right">
        <IconButton
          aria-label="Delete Feedback"
          icon={<DeleteIcon />}
          variant="ghost"
          onClick={onOpen}
        />
      </Tooltip>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Feedback ?</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            Do you really want to delete this feedback? This process cannot be
            undone.
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              colorScheme="red"
              ml={3}
              onClick={() => {
                onClose();
                onDeleteConfirm();
              }}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModal;
