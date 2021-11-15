import Head from "next/head";
import { UseAuth } from "@/lib/auth";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { CompanyLogo, GithubLogo, GoogleLogo } from "@/lib/logoIcon";

export default function Home() {
  const auth = UseAuth();

  return (
    <div>
      {/* Page Heading */}
      <Head>
        <title>⚡️ Lightning Feedback</title>
        <meta name="description" content="Created by PS" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if(document.cookie && document.cookie.includes('lightning-feedback-auth')){
              window.location.href="/dashboard"
            }
          `,
          }}
        />
      </Head>

      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
      >
        <CompanyLogo boxSize={24} />
        <Stack direction="column" spacing={"8"}>
          <Button
            onClick={() => auth.signInWithGithub()}
            backgroundColor="gray.900"
            color="white"
            leftIcon={<GithubLogo boxSize="10" mt="2" />}
            _hover={{ backgroundColor: "gray.700" }}
            _active={{
              backgroundColor: "gray.800",
              transform: "scale(0.95)",
            }}
            variant="ghost"
          >
            Sign In with Github
          </Button>
          <Button
            onClick={() => auth.signInWithGoogle()}
            backgroundColor="white"
            color="gray.900"
            leftIcon={<GoogleLogo boxSize="9" mt="4" />}
            _hover={{ bg: "gray.100" }}
            _active={{
              bg: "gray.100",
              transform: "scale(0.95)",
            }}
            variant="ghost"
          >
            Sign In with Google
          </Button>
        </Stack>
      </Flex>
    </div>
  );
}
