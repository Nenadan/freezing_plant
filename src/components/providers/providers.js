import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Provider from './provider/provider';

import '../providers/providers.css';
import user from '../../assets/add-user.png'

var Providers = ()=>{

    const [getData, setData] = useState({
        renderAddUser: false,
        showHide : "hide-create-user",
        name: "",
        lastName: "",
        email: "",
        phone: "",
        providerData: [],
        renderUserData: "Hello"

    })

    useEffect(()=>{

        axios.get('http://localhost:5000/providers').then(response => 
        setData({
        ...getData,
        providerData: response.data
    })
    )
    }, [])


    var updateProviders = () =>{
        axios.get('http://localhost:5000/providers').then(response => 
        setData({
        ...getData,
        providerData: response.data
            })
        )
    }

    var renderAddUserFunction = () =>{
        if(getData.renderAddUser===false){
            setData({
                ...getData,
                renderAddUser: true,
                showHide: "show-create-user"
            })
        }else{
            setData({
                ...getData,
                renderAddUser:false,
                showHide: "hide-create-user"
            })
        }
        
    }
    
    var addProvider = (name, lastName, phone, email) => {
        var today = new Date()
        var date = today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear()

        console.log(name + lastName + phone + email + " " +date)
        axios.post(`http://localhost:5000/add/${name}/${lastName}/${phone}/${email}/${date}`).then(response=>console.log(response));

        updateProviders();
    }

    var deleteUser = (position) =>{
        
       if(window.confirm("Are you sure you want to delete provider?")===true){
            axios.post(`http://localhost:5000/deleteprovider/${position}`).then(response => console.log(response.data))
       }
       updateProviders()
        
    }



    
    var renderNewProviders = ""

    getData.providerData.length>0? renderNewProviders = getData.providerData.map((provider, index)=>(
        <Provider ID={provider.ID}  Name = {provider.Name} LastName={provider.LastName} Phone = {provider.Phone} Email={provider.Email} RegisterDate = {provider.RegisterDate} key={index} deleteUser={()=>deleteUser(provider.ID)}/>
    )): renderNewProviders=""




    return(
        <div className="providers-main">
            <div className="overview-row">
                <div className="overview-container">
                    <h3>{getData.providerData.length}</h3>
                    <h5>Number of providers</h5>
                </div>
                <div className="overview-container">
                    <h3>Number of providers</h3>
                </div>
                <div className="overview-container">
                    <h3>2</h3>
                    <h5>Number of locations</h5>
                </div>
            </div>
            <div className="btn-add-div">
                <button className="btn btn-success ml-auto" style={{marginRight:"20px"}} onClick={()=>renderAddUserFunction()}><img src={user} height="30px"/> Create new provider</button>
            </div>
            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Last name</th>
                        <th>Phone number</th>
                        <th>E-mail adress</th>
                        <th>Register date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                  {renderNewProviders!==""?renderNewProviders:null}
                </tbody>
            </table>
            
            <div className={"add-provider " + getData.showHide}>
                <div><button className="turn-off-add-provider btn" onClick={()=>setData({...getData, renderAddUser: false, showHide: "hide-create-user"})}>X</button> </div>
                <form>
                    <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="email" className="form-control" id="name" aria-describedby="emailHelp" onChange={(e)=>setData({...getData, name:e.target.value})} placeholder="Enter name"></input>
                    <label htmlFor="LastName">Last name</label>
                    <input type="email" className="form-control" id="LastName" aria-describedby="emailHelp" onChange={(e)=>setData({...getData, lastName:e.target.value})} placeholder="Enter last name"></input>
                    <label htmlFor="phone">Phone number</label>
                    <input type="number" className="form-control" id="phone" aria-describedby="emailHelp" onChange={(e)=>setData({...getData, phone:e.target.value})} placeholder="Enter phone"></input>
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e)=>setData({...getData, email:e.target.value})} placeholder="Enter email"></input>
                    </div>
                    <button className="btn btn-success create-provider" onClick={()=>addProvider(getData.name, getData.lastName, getData.phone, getData.email)} >Add provider</button>
                </form>
            </div>
        </div>
    )
}

export default Providers;
