import * as React from 'react'
import './App.css';
import {Box, Typography,Divider, Button, CardMedia,IconButton} from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const skills=[{img:'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_official_icon_130509.png',name:'JavaScript'},
{img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',name:'React'},
{img:'https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png',name:'Redux'},
{img:'https://mui.com/static/logo.png',name:'MUI'},
{img:'https://cdn-icons-png.flaticon.com/512/25/25231.png',name:'GitFlow'},
{img:'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg',name:'Node JS'}]
function App() {
  return (
    <Box sx={{display:'flex',flexDirection:'column',maxWidth:'100%',m:{xs:0},p:{xs:0}}}>

    {/* NAVBAR  */}
    <Box sx={{display:'flex',justifyContent:'center',width:'100%',bgcolor:'#292929',p:1,pb:2}}>
      <Button variant='h3' sx={{mt:1}}>
        <Typography sx={{fontSize:{xs:'2vw',md:'1vw'},fontWeigth:20,color:'white'}}>Inicio</Typography>
      </Button>
      <Button variant='h3' sx={{mt:1}}>
        <Typography sx={{fontSize:{xs:'2vw',md:'1vw'},fontWeigth:20,color:'white'}}>Sobre mi</Typography>
      </Button>
      <Button variant='h3' sx={{mt:1}}>
        <Typography sx={{fontSize:{xs:'2vw',md:'1vw'},fontWeigth:20,color:'white'}}>Skills</Typography>
      </Button>
      <Button variant='h3' sx={{mt:1}}>
        <Typography sx={{fontSize:{xs:'2vw',md:'1vw'},fontWeigth:20,color:'white'}}>Proyectos</Typography>
      </Button>
      <Button variant='h3' sx={{mt:1}}>
        <Typography sx={{fontSize:{xs:'2vw',md:'1vw'},fontWeigth:20,color:'white'}}>Contacto</Typography>
      </Button>
    </Box>
    {/* IMAGEN Y NOMBRE */}
    <Box sx={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 50px 36px -28px inset;',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Typography sx={{color:'#b103fc',fontFamily:'Now-Bold',fontSize:'3vw'}}> Daniel Nicolás Amicone</Typography>
      <Typography sx={{color:'black',fontFamily:'Now-Bold',fontSize:'2.5vw'}}> Desarrollador Front-End</Typography>
      <Divider flexItem sx={{bgcolor:'#b103fc',height:2,marginX:'10%',borderRadius:3}}/>
      <Box sx={{boxShadow:'rgba(0, 0, 0, 0.35) 0px 30px 10px -30px inset;',width:'80%',display:'flex',justifyContent:'center'}}>
      <IconButton size="large">
      <LinkedInIcon fontSize="inherit" sx={{color:'#b103fc'}} />
      </IconButton>
      <IconButton size="large">
      <GitHubIcon fontSize="inherit" sx={{color:'#b103fc'}} />
      </IconButton>
      </Box>
      </Box>
      <Box>
      <CardMedia
      component="img"
      src='https://sdk.bitmoji.com/render/panel/20054902-175190234_13-s4-v1.png?transparent=1&palette=1&scale=2'
      sx={{height:{xs:150,sm:300,md:400},objectFit:'contain'}}
      />
      </Box>
    </Box>

    

    <Box sx={{display:'flex'}}>
    <Box sx={{width:'20%',display:'flex',bgcolor:'#b103fc',minHeight:300,alignItems:'center',justifyContent:'center',boxShadow:'#292929 3px 3px 6px 0px inset'}}>
    <Typography sx={{color:'white',fontFamily:'Now-Bold',fontSize:'2vw'}}>Acerca de</Typography>
    </Box>
    <Box sx={{width:'80%',bgcolor:'#292929',p:3,display:'flex',flexDirection:'column',justifyContent:'center'}}>
      <Typography sx={{color:'white',fontFamily:'Arial',fontSize:{xs:12,sm:13,md:17}}}>Soy Desarrollador Full Stack con inclinación al Front-End con la capacidad de trabajar en equipos para realizar proyectos web teniendo en cuenta siempre que sean escalables y modularizados.
      </Typography>
      <Typography sx={{color:'white',fontFamily:'Arial',fontSize:{xs:12,sm:13,md:17}}}>Fascinado por la lógica, disfruto de buscar soluciones a distintos problemas y sobre todo estar atento al cambio, aprender de mi entorno laboral y compartir conocimientos con mis compañeros.
      </Typography>
      <Typography sx={{color:'white',fontFamily:'Arial',fontSize:{xs:12,sm:13,md:17}}}>Mi experiencia se basa en lo académico, estudié 2 años de Ingeniería en Sistemas, donde obtuve bases en algoritmia y manejo de estructuras de datos. Actualmente, me encuentro cursando el bootcamp Soy Henry, en donde aprendí muchos conocimientos técnicos y habilidades blandas para trabajar en grandes equipos.
      </Typography>
    </Box>
    </Box>

    <Box sx={{display:'flex'}}>
    <Box sx={{width:'80%',bgcolor:'white',p:3,boxShadow:'#292929 3px 3px 6px 0px inset',display:'flex',justifyContent:'space-between'}}>
      {skills.map((e)=>(
        <Box key={e.name} sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginX:{xs:1,sm:2,md:3}}}>
          <CardMedia
          component="img"
          src={e.img}
          sx={{height:{xs:100,sm:150,md:250},objectFit:'contain'}}
          />
          <Typography sx={{color:'black',fontFamily:'Now-Bold',fontSize:{xs:11,sm:13,md:17}}}>{e.name}</Typography>
        </Box>
      ))}
    </Box>
    <Box sx={{width:'20%',display:'flex',bgcolor:'#b103fc',minHeight:200,alignItems:'center',justifyContent:'center',boxShadow:'#292929 -3px 3px 6px 0px inset'}}>
    <Typography sx={{color:'white',fontFamily:'Now-Bold',fontSize:'2vw'}}>Skills</Typography>
    </Box>
    </Box>

    </Box>
  );
}
export default App;
