import { auth } from "../authentication/authInit.js";
import axios from 'axios';
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
import { getLinearProgressUtilityClass } from "@mui/material";
function Addreview() {
  const navigate = useNavigate();
  React.useEffect(()=>{
    if(auth.currentUser === null){
        navigate("/login_review");
    }
  })
  const [booktitle, setBooktitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [photolink, setPhotolink] = useState("");
  const [amazonlink, setAmazonlink] = useState("");
  const [genre, setGenre] = useState("");

  const handleButtonClick= () => {
    console.log(genre);
    const headers = {
        'Content-Type': "application/json;charset=UTF-8",
    }
    axios.post("/add_review", {
        BookTitle: booktitle,
        Author: author,
        Summary: summary,
        Rating: rating,
        Review: review,
        Photolink: photolink,
        AmazonLink: amazonlink,
        Genre: genre
    },{
        headers: headers
    })  
    .then((response) =>{
        console.log(response);
        setBooktitle("");
        setAuthor("");
        setRating("");
        setReview("");
        setPhotolink("");
        setAmazonlink("");
        setGenre("");
    })
    .catch((error)=>{
        console.log(error.response.data);
    })
};

    return ( 
      <div> 
            <Flex justifyContent='center' marginTop='95px'>
            <Text>
              Book Title: 
            </Text>
            <Input value={booktitle} variant='filled' placeholder='Book title input box' width='30%'
            onChangeCapture={(e)=>setBooktitle(e.target.value)}/>
            </Flex>
            <Flex justifyContent='center' marginTop='20px'>
            <Text>
              Author: 
            </Text>
            <Input value={author} variant='filled'  width='33%'  placeholder='Author input box'
            onChangeCapture={(e)=>setAuthor(e.target.value)}/>
            </Flex>
          <Flex justifyContent='center' marginTop='20px'>
            <Text>
              Summary: 
            </Text>
            <Input value={summary} variant='filled' width='50%' minH='unset' h='8rem' placeholder='Summary input box' 
            onChangeCapture={(e)=>setSummary(e.target.value)}/>
          </Flex>
          <Flex justifyContent='center' marginTop='20px'>
            <Text>
              Rating: 
            </Text>
            <Input value={rating} variant='filled'  width='33%'  placeholder='Rating input box'
            onChangeCapture={(e)=>setRating(e.target.value)}/>
          </Flex>
          <Flex justifyContent='center'marginTop='20px'>
            <Text>
              Review: 
            </Text>
            <Input value={review} variant='filled' width='50%' minH='unset' h='15rem' placeholder='Review input box' 
            onChangeCapture={(e)=>setReview(e.target.value)}/>
            </Flex>
            <Flex justifyContent='center'marginTop='20px'>
            <Text>
              Photo Link: 
            </Text> 
            <Input value={photolink} variant='filled'  width='33%'  placeholder='Photo link input box'
            onChangeCapture={(e)=>setPhotolink(e.target.value)}/>
          </Flex>
          <Flex justifyContent='center'marginTop='20px'>
            <Text>
              Amazon Link: 
            </Text>
            <Input value={amazonlink} variant='filled'  width='33%'  placeholder='Amazon link input box'
            onChangeCapture={(e)=>setAmazonlink(e.target.value)}/>
          </Flex>
          <Flex justifyContent='center'marginTop='20px'>
            <Text>
              Genre: 
            </Text>
            <Input value={genre} variant='filled'  width='33%'  placeholder='Book Genre'
            onChangeCapture={(e)=>setGenre(e.target.value)}/>
          </Flex>
          <Flex justifyContent='center'marginTop='30px'>
            <Button onClick={handleButtonClick}>
                Add Book Review!
            </Button> 
          </Flex>                 
      </div>
    )
  }
  
  export default Addreview