import React from 'react'
import { Flex, Spacer, Center, Text, Square, Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <>
      <Flex color='white'>
        <Center w='100px' bg='green.500'>
          <Text>Box 1</Text>
        </Center>
        <Square bg='blue.500' size='150px'>
          <Text>Box 2</Text>
        </Square>
        <Box flex='1' bg='tomato'>
          <Text>Box 3</Text>
        </Box>
      </Flex>

      <div style={{ display: "flex", }}>
        <div>text</div>
        <div>image</div>
      </div>
      <div>lower brand names</div>
      <div>why should i vaccine</div>
      <div>
        <div>card</div>
        <div>card</div>
        <div>card</div>
        <div>card</div>
      </div>

    </>
  )
}

export default Home