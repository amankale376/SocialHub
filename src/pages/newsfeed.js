import React from 'react';
import Feed from '../components/authorized/feed';
import NavTop from '../components/authorized/navTop';
import NavBottom from '../components/authorized/navBottom';
function NewsFeed(){
    return <>
    <NavTop/>
    <Feed/>
    <NavBottom/>
    </>
}

export default NewsFeed;