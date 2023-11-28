import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInputs from "./SearchInputs";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="66px" />
      <SearchInputs />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
