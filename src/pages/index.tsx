import Main from '@/components/Main'
import { Container, VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container maxW={'container.sm'} marginTop="4" marginBottom="16">
      <VStack>
        <Main />
      </VStack>
    </Container>
  )
}
