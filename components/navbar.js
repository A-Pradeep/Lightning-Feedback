import {
  useColorMode,
  Button,
  Flex,
  Link,
  Box,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";

import { CompanyLogo } from "@/lib/logoIcon";
import { UseAuth } from "@/lib/auth";

function Navbar() {
  const { user, signOut } = UseAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Flex justify="space-between" px="7" py="4" alignItems="center">
        <Box display="flex" gridGap="4">
          <CompanyLogo boxSize={6} />
          <Link href="/feedback">Feedback</Link>
          <Link href="/">Sites</Link>
        </Box>
        <Box display="flex" gridGap="4" alignItems="center">
          <Button
            variant="ghost"
            _focus={{ border: "none" }}
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Link>Account</Link>
          <Menu>
            <MenuButton
              display="block"
              as={Avatar}
              size="sm"
              name={user?.name}
              src={user?.photoUrl}
              cursor="pointer"
            ></MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem onClick={signOut}>Signout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </div>
  );
}

export default Navbar;
