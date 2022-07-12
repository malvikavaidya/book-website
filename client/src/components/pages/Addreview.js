import { auth } from "../authentication/authInit.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    useColorMode,
    Switch,
    Flex,
    Button,
    IconButton,
    Text,
    Box,
    Input
  } from '@chakra-ui/react'
function Addreview() {
  const navigate = useNavigate();
  React.useEffect(()=>{
    if(auth.currentUser === null){
        navigate("/login_review");
    }
  })

    return ( 
      <div> 
          
            <Flex justifyContent='center' marginTop='95px'>
            <Text>
              Book Title: 
            </Text>
            <Input variant='filled' placeholder='Book title input box' width='30%'/>
            </Flex>

            <Flex justifyContent='center' marginTop='20px'>
            
            <Text>
              Author: 
            </Text>
            <Input variant='filled'  width='33%'  placeholder='Author input box'/>
            </Flex>

          <Flex justifyContent='center' marginTop='20px'>
            <Text>
              Summary: 
            </Text>
           
            <Input variant='filled' width='50%' minH='unset' h='8rem' placeholder='Summary input box' />
          </Flex>

          <Flex justifyContent='center' marginTop='20px'>
            <Text>
              Rating: 
            </Text>
            <Input variant='filled'  width='33%'  placeholder='Rating input box'/>
          </Flex>

          <Flex justifyContent='center'marginTop='20px'>
            <Text>
              Review: 
            </Text>
        
            <Input variant='filled' width='50%' minH='unset' h='15rem' placeholder='Review input box' />
            </Flex>

            <Flex justifyContent='center'marginTop='20px'>
            <Text>
              Photo Link: 
            </Text>
          
            <Input variant='filled'  width='33%'  placeholder='Photo link input box'/>
          </Flex>
          <Flex justifyContent='center'marginTop='20px'>
            <Text>
              Amazon Link: 
            </Text>
            <Input variant='filled'  width='33%'  placeholder='Amazon link input box'/>

          </Flex>
          <Flex justifyContent='center'marginTop='30px'>
            <Button>
                Add Book Review!
            </Button> 
          </Flex>
                   
      </div>
    )
  }
  
  export default Addreview