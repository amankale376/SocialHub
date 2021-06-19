import React from "react";
import Profile from "./pages/profile";
import {Route} from 'react-router-dom';
import NewsFeed from "./pages/newsfeed";
import Chats from "./pages/chats";
function App() {
  return <>
   <Route exact path="/feed" component={NewsFeed}/>
   <Route exact path="/chats" component={Chats}/>
   <Route exact path="/profile" component={Profile}/>
  </> 
}

export default App;
