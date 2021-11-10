import Head from "next/head";
import { UseAuth } from "@/lib/auth";
import { Button, Flex, Link } from "@chakra-ui/react";
import { CompanyLogo } from "@/lib/logoIcon";

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
        <Button m={4} size="sm" onClick={() => auth.signInWithGithub()}>
          sign in
        </Button>
      </Flex>
    </div>
  );
}
