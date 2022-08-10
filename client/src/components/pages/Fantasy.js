//imports
import { auth } from "../authentication/authInit.js";
import axios from 'axios';
import BookCard from "../cards/BookCard.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Fantasy.css";
import {
    useColorMode,
    Switch,
    Flex,
    Button,
    IconButton,
    Text,
    Box,
    Input, 
    Grid,
    GridItem
  } from '@chakra-ui/react'
function Fantasy() {

  

  const[fantasyReviews, setFantasyReviews] = React.useState([]);

  const fetchFantasyReviews = () =>{
    const headers = {
      'Content-Type': "application/json;charset=UTF-8",
  }
    console.log("Fetch Fantasy Reviews")
    axios.post('/get_reviews',{
      Genre: "fantasy"
  },{
      headers: headers
  }
    ).then((response)=>{
        setFantasyReviews(response.data);
    }).catch((error)=>{
        console.error(error);
    })
    return;
}

  React.useEffect(()=>{ //run fetches on load one time
    fetchFantasyReviews();
},[])


const allFantasyReviews = 
  <Grid templateColumns='repeat(4,1fr)' gap={4} marginTop='95px'>
    {fantasyReviews.map((review)=>{
      return(
        <GridItem>
        <BookCard key= {review.title} 
        title={review.title}
        author={review.author}
        summary={review.summary}
        rating={review.rating}
        review={review.review}
        photolink={review.photolink}
        amazonlink={review.amazonlink}
        genre={review.genre}  
        />

        </GridItem>
      )
    })}
    
  </Grid>
  return (

    <div class='split page' style={{ width: '100vw', height: '100vh'}} >
      {allFantasyReviews}
    </div>

   
  )}
  
  export default Fantasy;