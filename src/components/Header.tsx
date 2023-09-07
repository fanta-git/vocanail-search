import { REPOSITORY_URL, SITE_NAME } from "@/consts/page";
import { Box, Container, HStack, Heading, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Header() {
  return (
    <Box color={"green.600"} bgColor={"gray.200"}>
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
