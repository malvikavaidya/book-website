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

function RomanceCard() {


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
                'https://media.istockphoto.com/photos/young-couple-watching-the-perseid-meteor-shower-and-the-milky-way-picture-id1266944400?k=20&m=1266944400&s=612x612&w=0&h=FFavI8J6cwRA0rOIAnNwA83caAydzZUyQfyJwCNvKU0='
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
                window.location.href='/romance';
                }}>
                Click here to see Romance reviews!
            </Button> 
        </Box>
      </Center>
    )
  }
  
  export default RomanceCard