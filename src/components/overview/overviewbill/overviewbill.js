import React from 'react';


var Overviewbill = (props) =>{




    return(
        <tr>
            <td>{props.BillID}</td>
            <td>{props.ID}</td>
            <td>{props.Name}</td>
            <td>{props.LastName}</td>
            <td>{props.TypeOfGood}</td>
            <td>{props.Amount}</td>
            <td>{props.Crates}</td>
            <td>{props.GrossAmount}</td>
            <td>{props.Value}</td>
            <td><button className="btn btn-primary" style={{marginRight:"15px"}}>Edit</button><button className="btn btn-danger">Delete</button></td>
        </tr>
    )
}

export default Overviewbill;