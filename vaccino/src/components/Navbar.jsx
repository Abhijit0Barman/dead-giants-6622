import { NavLink } from "react-router-dom"
import { Flex, Spacer, Center, Text, Square, Box, Heading, Image } from '@chakra-ui/react'
import brandLogo from "../photos/VACCINO.jpg"

const links = [
    { label: "HOME", to: "/" },
    { label: "DATABASE", to: "/database" },
    { label: "EDUCATION", to: "/education" },
    { label: "REGULATION", to: "/regulation" },
    { label: "LOGIN", to: "/login" },
    { label: "MAIN", to: "/main" },
]


function Navbar() {

    return (<>
        <Box bg="teal.500" px={4} py={3} >
            <Flex alignItems="center" maxWidth="800px" mx="auto">
                <Heading color="white" size="md">
                    <Image
                        borderRadius='full'
                        boxSize='60px'
                        src='https://github.com/Abhijit0Barman/dead-giants-6622/blob/main/vaccino/src/photos/VACCINO.jpg?raw=true'
                        alt='Dan'
                    />
                </Heading>
                <Spacer />
                <Box>
                    {links.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            children={l.label}
                            // style={({ isActive }) => isActive ? activeStyle : defaultStyle}
                            style={({ isActive }) => isActive ? { color: 'red' } : { color: 'black' }}
                        />
                    ))}
                </Box>
            </Flex>
        </Box>
    </>)
}

export default Navbar