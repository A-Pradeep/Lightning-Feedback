import DashboardShell from "./DashboardShell";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

function FreePlanState() {
  return (
    <DashboardShell>
      <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
        <Heading> Get Feedback on your side</Heading>
        <Text>Start today, then grow with us 🌱</Text>
        <Button>Upgrade to Starter</Button>
      </Box>
    </DashboardShell>
  );
}

export default FreePlanState;
