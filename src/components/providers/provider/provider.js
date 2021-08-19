import React from 'react';

import '../provider/provider.css';
import editUser from "../../../assets/edit-user.png";
import deleteUser from '../../../assets/delete-user.png'

var Provider = (props) =>{
    


    return(
        <tr>
            <td>{props.ID}</td>
            <td>{props.Name}</td>
            <td>{props.LastName}</td>
            <td>{props.Phone}</td>
            <td>{props.Email}</td>
            <td>{props.RegisterDate}</td>
            <td><button className="btn btn-primary"><img src={editUser} height="30px"/> Edit</button><button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={props.deleteUser}><img src ={deleteUser} height="30px"/> Delete</button></td>
        </tr>
    )
}

export default Provider;