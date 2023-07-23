import { Box, Container, Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Box as="footer"  py="16" bg="gray.800" color="white">
        <Container maxW="container.lg">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>&copy; {new Date().getFullYear()} Vaccino</Text>
            <Box>
              <Link mx="2" href="#">Home</Link>
              <Link mx="2" href="#">About</Link>
              <Link mx="2" href="#">Contact</Link>
              {/* Add more links here */}
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  )
}

export default Footer