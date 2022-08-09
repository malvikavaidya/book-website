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
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
              src={
                'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              layout={'fill'}
            />
          </Box>
          <Stack>
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}>
              Blog
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              Explore fantasy books!
            </Heading>
            <Text color={'gray.500'}>
              Explore fantasy books!
            </Text>
          </Stack>
          <Stack justifyContent = 'right' mt={6} direction={'row'} spacing={4} align={'right'}>
            {/* <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}></Text>
              <Text color={'gray.500'}>Feb 08, 2021 </Text>
            </Stack> */}    
               
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