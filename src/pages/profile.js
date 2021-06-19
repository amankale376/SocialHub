import React from 'react';
import NavBottom from '../components/authorized/navBottom';
import CardProfile from '../components/authorized/cardProfile';
import AllPost from '../components/authorized/allPost';
function Profile(){
return <>
<CardProfile/>
<AllPost/>
    <NavBottom/>
    </>
}
export default Profile;