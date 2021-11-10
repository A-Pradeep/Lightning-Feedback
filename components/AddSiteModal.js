import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  useColorMode,
  Text,
  useToast,
} from "@chakra-ui/react";
import { createSite } from "@/lib/db";
import { UseAuth } from "@/lib/auth";
import { mutate } from "swr";

function AddSiteModal({ children }) {
  const toast = useToast();
  const auth = UseAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const { colorMode } = useColorMode();
  const initialRef = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onCreateSite = ({ siteName, url }) => {
    setLoading(true);
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      siteName,
      url,
    };
    createSite(newSite);
    setLoading(false);
    onClose();
    showToast();
    mutate(
      ["/api/sites", auth.user.token],
      async (data) => {
        return { sites: [...data.sites, newSite] };
      },
      false
    );
    reset();
  };

  const showToast = () => {
    toast({
      title: "Site created.",
      description: "New site has been added to your account.",
      position: "top-right",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      <Button
        maxW="200px"
        fontWeight="medium"
        backgroundColor="gray.800"
        color="white"
        _hover={{
          backgroundColor: "gray.300",
          color: "gray.800",
        }}
        onClick={onOpen}
        _active={{
          transform: "scale(0.95)",
        }}
      >
        {children}
      </Button>

      <Modal
        blockScrollOnMount={true}
        closeOnOverlayClick={false}
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="My Site"
                ref={initialRef}
                {...register("siteName", { required: true, maxLength: 20 })}
              />
              {errors.site && (
                <Text color="red" fontSize="sm">
                  This field is required
                </Text>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                ref={initialRef}
                {...register("url", { required: true })}
              />
              {errors.url && (
                <Text color="red" fontSize="sm">
                  This field is required
                </Text>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              backgroundColor={colorMode === "light" ? "#99FFFE" : "white"}
              color="gray.800"
              mr={3}
              type="submit"
              isLoading={loading}
              loadingText="Creating Site..."
            >
              Create
            </Button>
            <Button
              type="button"
              onClick={() => {
                reset({
                  keepErrors: true,
                  keepDirty: true,
                  keepIsSubmitted: false,
                  keepTouched: false,
                  keepIsValid: false,
                  keepSubmitCount: false,
                });
                onClose();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddSiteModal;
