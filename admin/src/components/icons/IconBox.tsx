import React from "react";
import { Flex } from "@chakra-ui/react";

export default function IconBox(props: { [x: string]: any; icon: any; }) {
  const { icon, ...rest } = props;

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"50%"}
      {...rest}>
      {icon}
    </Flex>
  );
}
