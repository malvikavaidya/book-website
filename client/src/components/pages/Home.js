//imports
import background from '../../images/book-bed-coffee.jpeg'
import {Dimensions, StyleSheet} from 'react-native';

function Home() {


    return ( 
      <div>   
           <div style={{ backgroundImage: `url(${background})`, width: '100vw', height: '100vh'}}>
            {/* <Typography  align = "center" fontFamily='Helvetica Neue' fontWeight="light" fontSize='3.30rem' paddingTop='245px'>
                Welcome to Malvika's Book Reviews
            </Typography> */}
            </div>        
      </div>
    )
  }
  
  export default Home;