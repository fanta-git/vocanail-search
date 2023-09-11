import { REPOSITORY_URL, SITE_NAME } from "@/consts/page";
import { Box, Container, HStack, Heading, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Header() {
  const textShadow = `
     2px  2px 1px #ffffff,
    -2px  2px 1px #ffffff,
     2px -2px 1px #ffffff,
    -2px -2px 1px #ffffff,
     2px  0px 1px #ffffff,
     0px  2px 1px #ffffff,
    -2px  0px 1px #ffffff,
     0px -2px 1px #ffffff;
  `;

  return (
    <Box color={"#000000"} bgColor={"#EAD76C"} textShadow={textShadow}>
      <Container maxW="container.lg">
        <HStack h={14}>
          <Heading as='h1' fontSize="2xl" cursor="pointer">
            <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
              {SITE_NAME}
            </Link>
          </Heading>
          <Spacer />
          <Link as={NextLink} href={REPOSITORY_URL} _hover={{ color: "green.900" }}>
            GitHub
          </Link>
        </HStack>
      </Container>
    </Box>
  )
}
