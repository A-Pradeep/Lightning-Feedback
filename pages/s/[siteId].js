import Feedback from "@/components/Feedback";
import { getAllFeedback, getAllSites } from "@/lib/db-admin";
import { Box } from "@chakra-ui/layout";
import { AddIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import { UseAuth } from "@/lib/auth";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { createFeedback } from "@/lib/db";
import Navbar from "@/components/navbar";

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);
  return {
    props: {
      initalFeedback: feedback,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map(({ id }) => ({
    params: {
      siteId: id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

function SiteFeedBack({ initalFeedback }) {
  const auth = UseAuth();
  const router = useRouter();
  const toast = useToast();
  const feedbackInput = useRef();
  const [allFeedback, setAllFeedback] = useState(initalFeedback);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: feedbackInput.current.value,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: "pending",
    };

    createFeedback(newFeedback).then((_) => {
      setAllFeedback([newFeedback, ...allFeedback]);
      feedbackInput.current.value = "";
      toast({
        title: "Feedback Submitted.",
        description: "Your feedback submitted to the site.",
        position: "top-right",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    });
  };

  return (
    <>
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        width="full"
        maxWidth="700px"
        margin="0 auto"
      >
        <Box as="form" onSubmit={handleSubmit}>
          <FormControl my={8}>
            <FormLabel>Comment</FormLabel>
            <Textarea
              ref={feedbackInput}
              type="comment"
              id="comment"
              borderColor="1px solid gray.900"
              placeholder="Wow !"
              cols="5"
              required
            />
            <FormErrorMessage>Error</FormErrorMessage>

            <Button
              type="submit"
              mt={2}
              leftIcon={<AddIcon />}
              border="1px dashed black"
              fontSize="sm"
            >
              Add Comment
            </Button>
          </FormControl>
        </Box>
        {allFeedback.map((feedback) => (
          <Feedback key={feedback.id} {...feedback} />
        ))}
      </Box>
    </>
  );
}

export default SiteFeedBack;
