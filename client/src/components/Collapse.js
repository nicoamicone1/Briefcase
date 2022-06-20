import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import { Typography,Divider } from '@mui/material';


export default function SimpleCollapse() {
  const [checked, setChecked] = React.useState(false);

  const Check=()=>{setTimeout(()=>setChecked(()=>true),500)}
  React.useEffect(()=>Check(),[])

  return (
    <Box sx={{ height: '30vw' }}>
      <Box
        sx={{
          '& > :not(style)': {
            display: 'flex',
            justifyContent: 'space-around',
            height: 0,
            width: '100%',
          },
        }}
      >
        <div>
          <Collapse in={checked} collapsedSize='100%' timeout={800} sx={{mt:'7vw'}}>
                <Typography variant='h1' sx={{fontWeigth:20,color:'white',fontSize:'5vw'}}> Daniel Nicolás Amicone</Typography>
                <Typography variant='h1' sx={{fontWeigth:20,color:'white',fontSize:'3vw'}}> Desarrollador Front-End</Typography>
                <Divider flexItem sx={{m:1,bgcolor:'#ffff00',height:5,borderRadius:3,width:'48vw'}}/>
          </Collapse>
        </div>
      </Box>
    </Box>
  );
}
