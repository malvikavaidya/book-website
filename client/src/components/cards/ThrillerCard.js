import { Image } from '@chakra-ui/react'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button

} from '@chakra-ui/react';

function ThrillerCard() {


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
                'https://images.unsplash.com/photo-1555440186-7f0a5a6a5537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FyZ295bGV8ZW58MHx8MHx8&w=1000&q=80'
              }
              layout={'fill'}
              h={'260px'}
              w={'500px'}
            />
          </Box>
          <Stack>
          </Stack>
          <Stack mt={2} direction={'row'} spacing={4} align={'center'}>
          </Stack>
          <Button  align ='right' variant="ghost"
              colorScheme="gray" size="sm"
              onClick={(e) => {
                e.preventDefault();
                window.location.href='/thriller';
                }}>
                Click here to see Thriller reviews!
            </Button> 
        </Box>
      </Center>
    )
  }
  
  export default ThrillerCard