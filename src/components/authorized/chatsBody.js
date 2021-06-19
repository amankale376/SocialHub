import React from 'react';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { fade, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
 const useStyles = makeStyles((theme)=>({
    grow: {
        flexGrow: 1,
      },
root: {
    marginTop:'5rem',
    height:'auto',
    width:'100%',
},
uname:{
    marginLeft:'2rem',

 // eslint-disable-next-line
    ['@media (max-width: 720px)']:{
       fontSize:'medium',
       paddingTop:'.5rem',
       marginLeft:'1.3rem',
       fontWeight:'bold',
    },
},
search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.20),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.30),
    },
    marginRight: theme.spacing(2),
    marginLeft: '0rem',
    width: '90%',
     // eslint-disable-next-line
    ["@media (max-width: 720px)"]:{
        width:'90%',
        marginRight:'1rem',
        marginLeft:'1rem',
    },
  },
  searchIcon: {
    padding: theme.spacing(1, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',

  },
  inputRoot: {
    color: 'White',
  },
  
First:{
    width:'100%',
    display:'flex', 
    justifyContent:'center',
    paddingTop:'1rem',
    paddingBottom:'1rem',
},
chats:{
marginTop:'0rem',
    width:'100%',
    display:'flex', 
    paddingLeft:'0',
    paddingRight:'0',
    justifyContent:'center',
    paddingTop:'.5rem',
    paddingBottom:'.5rem', 

},
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
},
 }));

function ChatsBody(){
    const classes = useStyles();
return <>
<div className={classes.root}>
<Container maxWidth="md">
<Paper elivation='2' className={classes.root}>

    <div className={classes.First}>
    <Grid container spacing={3}>
<Grid item xs={12} sm={6}>
<Typography
    className={classes.uname}
variant="h6"
    >   Username
    </Typography>
        </Grid>
        <Grid item sm={1}>
        <Divider orientation="vertical"  />
        </Grid>
        
        <Grid item xs={12} sm={5}>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search People"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Grid>
</Grid>
    </div>
   <Divider/>
   <div className={classes.chats}>
              <Typography variant='h6' >
                  person 1
              </Typography>   
   </div>
   <Divider light='true'/>
</Paper>
</Container>
</div>

</>
}

export default ChatsBody;