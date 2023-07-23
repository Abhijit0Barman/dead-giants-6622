import React from 'react'
import { Flex, Spacer, Center, Text, Button, Square, Accordion, Image, Icon, Box, Heading, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Container, Grid, GridItem } from '@chakra-ui/react'
import Footer from "./Footer"

const Home = () => {
  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box m={`auto`}>
          <Heading>Fight Virus With Vaccines</Heading>
          <Container>
            There are many benefits to a joint design and development system. Not only
            does it bring benefits to the design team, but it also brings benefits to
            engineering teams. It makes sure that our experiences have a consistent look
            and feel, not just in our design specs, but in production
          </Container>
        </Box>
        <Box m={`auto`}>
          <img src="./logo512.png" alt="" />
        </Box>
      </Box>
      {/* ============ */}
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        <Box><img src="./hero.svg" alt="" /></Box>
        <Box><img src="./about.svg" alt="" /></Box>
        <Box><img src="./hero.svg" alt="" /></Box>
        <Box><img src="./about.svg" alt="" /></Box>
      </Grid>
      {/* ============ */}
      <Box display={'flex'} mt={'100px'} >
        <Box ml={'100px'} fontSize={'3xl'}>
          <Heading>why should i Vaccines</Heading>
          <Container>
            There are many benefits to a joint design and development system. Not only
            does it bring benefits to the design team, but it also brings benefits to
            engineering teams. It makes sure that our experiences have a consistent look
            and feel, not just in our design specs, but in production
          </Container>
        </Box>

      </Box>
      {/* ============ */}
      <Flex justifyContent="center" py="8">
        <Box p="4" bg="white" borderRadius="md" boxShadow="md" flex="1" mx="2">
          <Icon as='AiOutlineMail' boxSize="24px" color="blue.500" />
          <Text fontSize="xl" fontWeight="bold" mt="4">
            Minimize the spread of Virus
          </Text>
          <Text mt="2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse dolor aperiam voluptates quisquam vel suscipit reprehenderit excepturi? Reprehenderit, laudantium quidem!
          </Text>
        </Box>
        <Box p="4" bg="white" borderRadius="md" boxShadow="md" flex="1" mx="2">
          <Icon as='AiOutlineMail' boxSize="24px" color="blue.500" />
          <Text fontSize="xl" fontWeight="bold" mt="4">
            Minimize the spread of Virus
          </Text>
          <Text mt="2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse dolor aperiam voluptates quisquam vel suscipit reprehenderit excepturi? Reprehenderit, laudantium quidem!
          </Text>
        </Box>
        <Box p="4" bg="white" borderRadius="md" boxShadow="md" flex="1" mx="2">
          <Icon as='AiOutlineMail' boxSize="24px" color="blue.500" />
          <Text fontSize="xl" fontWeight="bold" mt="4">
            Minimize the spread of Virus
          </Text>
          <Text mt="2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse dolor aperiam voluptates quisquam vel suscipit reprehenderit excepturi? Reprehenderit, laudantium quidem!
          </Text>
        </Box>
        <Box p="4" bg="white" borderRadius="md" boxShadow="md" flex="1" mx="2">
          <Icon as='AiOutlineMail' boxSize="24px" color="blue.500" />
          <Text fontSize="xl" fontWeight="bold" mt="4">
            Minimize the spread of Virus
          </Text>
          <Text mt="2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse dolor aperiam voluptates quisquam vel suscipit reprehenderit excepturi? Reprehenderit, laudantium quidem!
          </Text>
        </Box>
        <Box p="4" bg="white" borderRadius="md" boxShadow="md" flex="1" mx="2">
          <Icon as='AiOutlineMail' boxSize="24px" color="blue.500" />
          <Text fontSize="xl" fontWeight="bold" mt="4">
            Minimize the spread of Virus
          </Text>
          <Text mt="2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse dolor aperiam voluptates quisquam vel suscipit reprehenderit excepturi? Reprehenderit, laudantium quidem!
          </Text>
        </Box>
      </Flex>
      {/* ============ */}
      <Box>
        <Box py="10" bg="gray.100">
          <Container maxW="container.lg">
            <Flex flexDirection={{ base: 'column', lg: 'row' }} alignItems="center">
              {/* Left Side - Image */}
              <Box flex="1">
                <Image src="./Nurse.png" alt="Image" borderRadius="md" />
              </Box>

              {/* Right Side - Accordion */}
              <Box flex="1" mt={{ base: '8', lg: '0' }} ml={{ lg: '8' }}>
                <Heading>
                  Preparation Before Vaccine
                </Heading>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Eat Healthy Food
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sapiente veniam cumque quam voluptatem aliquid mollitia architecto doloribus aliquam dolorum quisquam doloremque reiciendis, iste quae praesentium dolor incidunt commodi odit velit dignissimos. Iusto illo exercitationem ipsum quisquam voluptates odit. Iste, vero neque. Sapiente eum reiciendis vero, delectus voluptas maxime necessitatibus.
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Get Enough Sleep
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto, obcaecati sapiente officiis esse quibusdam suscipit error et neque similique quisquam dolorum iste nihil doloribus, eius alias consequuntur! Eaque corporis molestiae repellat, quo sint voluptatibus laudantium officiis quaerat iusto nemo, eum placeat illo cum quos assumenda amet expedita incidunt! Odit?
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Avoid Strees                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto, obcaecati sapiente officiis esse quibusdam suscipit error et neque similique quisquam dolorum iste nihil doloribus, eius alias consequuntur! Eaque corporis molestiae repellat, quo sint voluptatibus laudantium officiis quaerat iusto nemo, eum placeat illo cum quos assumenda amet expedita incidunt! Odit?
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Avoid Alcohol
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto, obcaecati sapiente officiis esse quibusdam suscipit error et neque similique quisquam dolorum iste nihil doloribus, eius alias consequuntur! Eaque corporis molestiae repellat, quo sint voluptatibus laudantium officiis quaerat iusto nemo, eum placeat illo cum quos assumenda amet expedita incidunt! Odit?
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Excercise or Physical Activity
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto, obcaecati sapiente officiis esse quibusdam suscipit error et neque similique quisquam dolorum iste nihil doloribus, eius alias consequuntur! Eaque corporis molestiae repellat, quo sint voluptatibus laudantium officiis quaerat iusto nemo, eum placeat illo cum quos assumenda amet expedita incidunt! Odit?
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  {/* Add more accordion items as needed */}
                </Accordion>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
      {/* ============ */}
    
    </>
  )
}

export default Home