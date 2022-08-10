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



const BookCard = (props) => {
    
    return ( 
        <Center py={6} >
        <Box
          maxW={'280px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Box
            h={'380px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
              src={props.photolink}
              layout={'fill'}
              h={'380px'}
              w={'280px'}
              pos={'relative'}
             
            />
          </Box>
          <Stack>
            <Text
              color={'gray.400'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}>
              {props.author}
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              {props.title}
            </Heading>
            <Text color={'gray.500'}>
              Book Rating: {props.rating}
            </Text>
            <Text color={'gray.500'}>
              Short Summary: {props.summary}
            </Text>
          </Stack>
          <Stack justifyContent = 'center' mt={6} direction={'row'} spacing={4} align={'right'}>
            {/* <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}></Text>
              <Text color={'gray.500'}>Feb 08, 2021 </Text>
            </Stack> */}    
            <Accordion  allowMultiple>
                <AccordionItem>
                  <AccordionButton>
                   <Box flex='1' textAlign='left'>
                        Book Review
                  </Box>
                  <AccordionIcon />
                  </AccordionButton>
    
                  <AccordionPanel pb={4}>
                      Hi this is the actual review
                </AccordionPanel>
              </AccordionItem>
              </Accordion>
               
          </Stack>
        </Box>
      </Center>
    )
  }
  
  export default BookCard