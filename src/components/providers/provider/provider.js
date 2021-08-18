import React from 'react';

import '../provider/provider.css';

var Provider = (props) =>{
    


    return(
        <tr>
            <td>{props.ID}</td>
            <td>{props.Name}</td>
            <td>{props.LastName}</td>
            <td>{props.Phone}</td>
            <td>{props.Email}</td>
            <td>{props.RegisterDate}</td>
            <td><button className="btn btn-primary">Edit</button><button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={props.deleteUser}>Delete</button></td>
        </tr>
    )
}

export default Provider;