import { Image } from '@chakra-ui/react'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Input,
  useColorModeValue,
  Button,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'



const FantasyCard= (props) => {
    
    return ( 
        <Center py={6} >
        <Box
          maxW={'500px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Box
            h={'260px'}
            
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
              src={
                'https://images.unsplash.com/photo-1508682641856-78948a748357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FzdGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
              }
              layout={'fill'}
              pos={'relative'}
              w={'500px'}
              h={'260px'}
            />
          </Box>
          <Stack>
            {/* <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              Explore fantasy books!
            </Heading> */}
          </Stack>
          <Stack justifyContent = 'right' mt={2} direction={'row'} spacing={4} align={'right'}>
          </Stack>
          <Button  align ='right' variant="ghost"
              colorScheme="gray" size="sm"
              onClick={(e) => {
                e.preventDefault();
                window.location.href='/fantasy';
                }}>
                Click here to see Fantasy reviews!
            </Button> 
        </Box>
      </Center>
    )
  }
  
  export default FantasyCard