import { NextComponentType, NextPage } from "next";
import { Box, Center, Heading } from "@chakra-ui/react";

const Header: NextComponentType = () => {
  return (
    <Box bg='' w='100%' h='120' borderBottom='2px solid grey'>
      <Center h='100%'>
        <Heading>
          Pocket Book
        </Heading>
      </Center>
    </Box>
  )
}

export default Header