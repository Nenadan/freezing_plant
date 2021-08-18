import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Provider from './provider/provider';

import '../providers/providers.css';

var Providers = ()=>{

    const [getData, setData] = useState({
        renderAddUser: false,
        showHide : "hide-create-user",
        name: "",
        lastName: "",
        email: "",
        phone: "",
        providerData: [],
        providerData2: [],
        renderUserData: "Hello"

    })

    useEffect(()=>{
        if(localStorage.getItem('providers')===null){
            localStorage.setItem('providers', JSON.stringify([]))
        }else{
            var storageData =JSON.parse(localStorage.getItem('providers'));
            setData({
                ...getData,
                providerData: storageData,
            })
        }
        axios.get('http://localhost:5000/providers').then(response => 
        setData({
        ...getData,
        providerData2: response.data
    })
    )
    }, [])

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
        var date =today.getDate()+'/'+(today.getMonth()+1)+'/'+ today.getFullYear();


        var newProvider = {"Name": name, "LastName": lastName, "Phone":phone, "Email":email, "RegisterDate": date, ID: getData.providerData.length+1}
        var oldArray = getData.providerData;
        oldArray.push(newProvider)
        setData({
            ...getData,
            providerData: oldArray
        })
        localStorage.setItem('providers', JSON.stringify(getData.providerData))
    }

    var deleteUser = (position) =>{
        
        
       if(window.confirm("Are you sure you want to delete provider?")===true){
            var providerArray = getData.providerData;
            providerArray.splice(position, 1);
            setData({
                ...getData,
                providerData: providerArray
            })
            localStorage.setItem('providers', JSON.stringify(providerArray))
       }
        
    }


    var renderData = getData.providerData.map((user, index)=>(
        <Provider ID={user.ID} Name={user.Name} LastName={user.LastName} Phone={user.Phone} Email={user.Email } RegisterDate={user.RegisterDate} key={index} deleteUser = {()=>deleteUser(index)} />
    ))

    
    var renderNewProviders = ""

    getData.providerData2.length>0? renderNewProviders = getData.providerData2.map((provider, index)=>(
        <Provider ID={provider.ID}  Name = {provider.Name} LastName={provider.LastName} Phone = {provider.Phone} Email={provider.Email} RegisterDate = {provider.RegisterDate} key={index}/>
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
                <button className="btn btn-success ml-auto" style={{marginRight:"20px"}} onClick={()=>renderAddUserFunction()}>Create new provider</button>
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
                  {renderData} 
                  {renderNewProviders}
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
