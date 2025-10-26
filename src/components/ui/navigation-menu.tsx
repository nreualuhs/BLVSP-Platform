import { Box, BoxProps, Flex, FlexProps, Link as ChakraLink, LinkProps } from "@chakra-ui/react"
import { Link as ReactLink } from "react-router-dom";

export const NavigationMenu = (props: FlexProps) => {
  const {
    children,
    ...rest
  } = props;

  return <Flex as="nav" align="center" w="100%"
    {...rest}>
    {children}
  </Flex>
}

export const NavigationMenuItem = (props: BoxProps) => {
  const {
    children,
    ...rest
  } = props;

  return <Box {...rest}>
    {children}
  </Box>
}

export const NavigationMenuLink = (props: LinkProps) => {
  const {
    children,
    href,
    ...rest
  } = props;

  return <ChakraLink asChild {...rest}>
    <ReactLink to={props.href ?? "#"}>
      {children}
    </ReactLink>
  </ChakraLink>
}