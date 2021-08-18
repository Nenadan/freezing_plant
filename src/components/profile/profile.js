import React from 'react';
import axios from 'axios';

import '../profile/profile.css'

function Profile(){

var sendPostRequest = () =>{
    fetch('http://localhost:5000/deleteproviders/9',{method:"GET"}).then(response=>console.log(response))
}

var deleteProvider = () =>{
    axios.post('http://localhost:5000/hello/10',).then(response=>console.log(response))
}
var insertProvider = ()=>{
    axios.post('http://localhost:5000/add/Milenko/Nikolic/062668546/milenkonikolic@gmail.com/2021-08-18').then(response=>console.log(response))
}


    return(
        <div className="profile">
            <p>Profile Works!</p>
            <button className="btn btn-danger" onClick={()=>insertProvider()}>Click me</button>
        </div>
    )
}
export default Profile;