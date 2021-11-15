import { format, parseISO } from "date-fns";
import Link from "next/link";

const { Box, Link: CLink } = require("@chakra-ui/layout");
const { Td, Table, Tr, Th } = require("./Table");

const SiteTable = ({ sites }) => {
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
        {sites.map((site) => (
          <Box as="tr" key={site.url}>
            <Td fontWeight="medium">{site.siteName}</Td>
            <Td>{site.url}</Td>
            <Td>
              <Link href="/s/[siteId]" as={`/s/${site.id}`} passHref>
                <CLink color="teal.400" fontWeight="bold">
                  View Feedback
                </CLink>
              </Link>
            </Td>
            <Td>{format(parseISO(site.createdAt), "PPpp")}</Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default SiteTable;
