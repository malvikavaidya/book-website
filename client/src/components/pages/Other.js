import { auth } from "../authentication/authInit.js";
import axios from 'axios';
import BookCard from "../cards/BookCard.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Other.css";
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
function Other() {

  const[otherReviews, setOtherReviews] = React.useState([]);

  const fetchOtherReviews = () =>{
    const headers = {
      'Content-Type': "application/json;charset=UTF-8",
  }
    console.log("Fetch Other Reviews")
    axios.post('/get_reviews',{
      Genre: "other"
  },{
      headers: headers
  }
    ).then((response)=>{
        setOtherReviews(response.data);
    }).catch((error)=>{
        console.error(error);
    })
    return;
}

React.useEffect(()=>{ //run fetches on load one time
  fetchOtherReviews();
},[otherReviews])

const allOtherReviews = 
  <Grid templateColumns='repeat(4,1fr)' gap={4} marginTop='95px'>
    {otherReviews.map((review)=>{
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
      {allOtherReviews}
    </div>
    )
  }
  
  export default Other