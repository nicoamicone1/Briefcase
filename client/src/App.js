import * as React from 'react'
import './App.css';
import {Box} from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Collapse from './components/Collapse'


function App() {
  return (
    <Box sx={{display:'flex',flexDirection:'column',maxWidth:'100%',m:{xs:0},p:{xs:0}}}> 
    
    <Box sx={{display:'flex',width:'100%'}}>
      <Box sx={{bgcolor:'black',width:'60%',p:5,boxShadow:'white 0px -30px 30px -30px inset;'}}>
          <Collapse/>
      </Box>
      <Box sx={{bgcolor:'#ffff00',width:'40%'}}>

      </Box>
    </Box>
  </Box>
  );
}
export default App;
