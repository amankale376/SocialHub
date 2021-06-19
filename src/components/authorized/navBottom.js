import React from 'react';
import { Flex } from "@chakra-ui/react"
import HomeIcon from '@material-ui/icons/Home'; 
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
const NavBottom = ()=>{
    return <>
    <div className="BottomNav">
    <Flex color="white" bgColor="#022E57" justify="center" wrap="nowrap" 
    direction="row" position="fixed" bottom="0" width="100%"
    >
      <div className="BottomNavIcon">
          <IconButton style={{color:"white"}}><HomeIcon fontSize="large"/></IconButton></div>
      <div className="BottomNavIcon">
      <IconButton style={{color:"white"}}>  <NotificationsNoneIcon fontSize="large"/> </IconButton></div>
      <div className="BottomNavIcon">
      <IconButton style={{color:"white"}}><AddIcon fontSize="large"/>  </IconButton></div>
      <div className="BottomNavIcon">
      <IconButton style={{color:"white"}}>  <ChatIcon fontSize="large"/>  </IconButton></div>
       </Flex>
    </div>
    </>
}

export default NavBottom;