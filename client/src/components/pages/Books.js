//imports
import { Image } from '@chakra-ui/react'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import FantasyCard from "../cards/FantasyCard";
import ThrillerCard from "../cards/ThrillerCard";
import RomanceCard from "../cards/RomanceCard";
import OtherCard from "../cards/OtherCard";

export default function Books() {
  return (
    <div class='split books' style={{ width: '100vw', height: '100vh'}}>

       <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20, marginTop:'95px'}}>
        <div><ThrillerCard></ThrillerCard></div>
        <div><RomanceCard></RomanceCard></div>
       </div>
   
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20, marginTop:'95px'}}>
    <div><FantasyCard></FantasyCard></div>
    <div><OtherCard></OtherCard></div>
  </div> 
  </div>
  );
}