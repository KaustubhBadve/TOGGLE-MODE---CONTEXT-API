import React from 'react'
import { Stack, HStack, VStack,Box, Avatar, Switch, FormLabel, FormControl, Progress } from '@chakra-ui/react'
import style from "./Sidestack.module.css"
import { useContext } from 'react'
import { Thmcontext } from '../context/Themecontext'


const Sidestack = () => {

  const {toggle,thm,isLight} = useContext(Thmcontext)
  return (
    <div className={style.main}>

<VStack className={style.Hstack} spacing='24px'>
 
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <br /><br /><br />

            <div><i className="fa-solid fa-signal"></i></div>

            <div><i className="fa-solid fa-gear"></i></div>

            <div><i className="fa-solid fa-copy"></i></div>

            <div><i className="fa-solid fa-basket-shopping"></i></div>

            <div><i className="fa-solid fa-right-from-bracket"></i></div>

            <div><i className="fa-brands fa-facebook-messenger"></i></div>

            <footer><button className={style.btnround}>+</button></footer>
            
</VStack>











<VStack className={style.stack2} spacing='24px'>
 
<HStack className={style.subhstack} spacing='24px'>
    <div>
  <Box fontSize="40px" w='270px' h='50px'display="flex" alignItems="center" >
    My Dashboard
  </Box></div>
  
  <div>
 <Box w='180px' fontSize="30px" h='50px' display="flex" alignItems="center" >
    
  <FormControl display='flex' alignItems='center' >
  <FormLabel htmlFor='email-alerts'  fontSize="20px" mb='0'>
    {isLight ? "Dark Mode" : "Light Mode"}
  </FormLabel>
  <Switch onChange={toggle} id='email-alerts' size="lg"/>

</FormControl> 


  </Box></div>
  
</HStack>    


<div className={style.activeuser}>
    <div>Active Users</div>
    <div>For August 2020 <span><i className="fa-solid fa-angle-down"></i></span></div>
</div>

<div className={style.people}>
<div className={style.nrupul}>
    <div>
    <Avatar name="Kent Dodds" src='https://bit.ly/dan-abramov' />
    </div>
    <div>
        <div>Nrupul Dev</div>
        <div>Banglore,India</div>
    </div>
    <div className={style.dots}><span><i className="fa-solid fa-ellipsis"></i> </span></div>
</div>

<div className={style.range}><Progress value={80} /></div>
<div className={style.nrupull}>
    <div>Professional Level 15</div>
    <div>4723 Points</div>
</div>


</div>



<div className={style.people}>
<div className={style.nrupul}>
    <div>
    <Avatar name="Kent Dodds" src='https://bit.ly/ryan-florence' />
    </div>
    <div>
        <div>Elon Tusk</div>
        <div>California,USA</div>
    </div>
    <div className={style.dots}><span><i className="fa-solid fa-ellipsis"></i> </span></div>
</div>

<div className={style.range}><Progress value={50} /></div>
<div className={style.nrupull}>
    <div>Professional Level 15</div>
    <div>2339 Points</div>
</div>


</div>







<div className={style.people}>
<div className={style.nrupul}>
    <div>
    <Avatar name="Kent Dodds" src='https://bit.ly/code-beast' />
    </div>
    <div>
        <div>Sandhya</div>
        <div>Banglore,India</div>
    </div>
    <div className={style.dots}><span><i className="fa-solid fa-ellipsis"></i> </span></div>
</div>

<div className={style.range}><Progress value={30} /></div>
<div className={style.nrupull}>
    <div>Professional Level 15</div>
    <div>1884 Points</div>
</div>


</div>




</VStack>
    </div>
  )
}

export default Sidestack