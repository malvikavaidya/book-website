import FantasyCard from "../cards/FantasyCard";
import ThrillerCard from "../cards/ThrillerCard";
import RomanceCard from "../cards/RomanceCard";
import OtherCard from "../cards/OtherCard";
import "./Books.css";

export default function Books() {
  return (
    <div class='split books' style={{ width: '100vw', height: '100vh'}}>

       <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 10, marginTop:'95px'}}>
        <div><FantasyCard></FantasyCard></div>
        <div><ThrillerCard></ThrillerCard></div>
       </div>
   
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 10, marginTop:'30px'}}>
    <div><RomanceCard></RomanceCard></div>
    <div><OtherCard></OtherCard></div>
  </div> 
  </div>
  );
}