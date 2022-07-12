import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../authentication/authInit";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    // async function onRegister() {
        try{
            await signInWithEmailAndPassword(auth, email, password);
        }catch(error){
            console.log(error);
            return;
        } 
//   }
    // onRegister(); 
    console.log("am i reaching")
    navigate("/add_review");
  };

  return (
    <div>
        <Flex justifyContent='center' marginTop='100px'>

        
   <form>
        <Input
          placeholder="email"
          type="email"
          variant='filled'
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="password"
          type="password"
          variant='filled'
          marginTop='10px'
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Flex justifyContent='center' marginTop='10px'>
        <Button onClick={handleSubmit}>
            
            Login</Button>
        </Flex>
        </form>
      </Flex>
    </div>
  );
};

export default Login;