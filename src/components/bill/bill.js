import React, { useEffect, useState } from 'react';



import '../bill/bill.css';

var Bill = () =>{

    const [getData, setData] = useState({
        selectedProvider: [],
        TypeOfGood: "",
        Amount: 0,
        Crates: 0,
        Price: 0,
        GrossAmount: 0,
        TotalValue: 0,
        allBills: ""
    })

    useEffect(()=>{
        localStorage.getItem('AllBills')===null ? localStorage.setItem('AllBills', JSON.stringify([])) : console.log('hello')
        

    },[])


    var listOfProviders = JSON.parse(localStorage.getItem('providers'))
    var renderProviderList =  listOfProviders !==null ? listOfProviders.map((provider, index)=>(
        <option key={index} value={index} dataset={provider} >{provider.Name} {provider.LastName}</option>
    )):""
    
    var createNewBill = (Name, LastName, Phone, Email, TypeOfGood, Amount, Crates, Price, ID, providerID) =>{
        var CalculateAmount = Amount-(Crates*0.5)
        var Value = Price*Amount
        var newBill = {
            Name,
            LastName,
            Phone,
            Email,
            TypeOfGood,
            Amount,
            Crates,
            Price,
            GrossAmount:CalculateAmount,
            TotalValue: Value,
            ID,
            providerID
        }
        var array = JSON.parse(localStorage.getItem('AllBills'))
        array.push(newBill);
        localStorage.setItem('AllBills', JSON.stringify(array));
        console.log(array)
    }

    var CalculateAmount = (Amount, Price, Crates) =>{
        var GrossAmount = Amount-(0.5*Crates)
        var Value = GrossAmount*Price;
        setData({
            ...getData,
            GrossAmount: GrossAmount,
            TotalValue: Value,
        })
    }
    var billsLength = ""
    localStorage.getItem('AllBills')!==null?billsLength = JSON.parse(localStorage.getItem('AllBills')):
    console.log(billsLength.length)

    return(
        <div>
            <div className="bill-form">
                <h3>Create new bill</h3>
                <hr/>
                <form className='form-group'>
                    <div className="provider-info">
                        <label htmlFor="provider" >Select provider </label>
                    <select id="provider" onChange={(e)=>{
                        setData({
                            ...getData,
                            selectedProvider: listOfProviders[parseInt(e.target.value)]
                        })
                        console.log(parseInt(getData.selectedProvider.Name))
                    }}>
                        {renderProviderList}
                    </select>
                        <div>
                            <div className="row">
                                <div className="col-2">
                                    <h5>ID: </h5>
                                </div>
                                <div className="col-4">
                                    <h3>{getData.selectedProvider.ID}</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <h5>Name: </h5>
                                </div>
                                <div className="col-4">
                                    <h3>{getData.selectedProvider.Name}</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <h5>Last name: </h5>
                                </div>
                                <div className="col-4">
                                    <h3>{getData.selectedProvider.LastName}</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <h5>Phone: </h5>
                                </div>
                                <div className="col-4">
                                    <h3>{getData.selectedProvider.Phone}</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <h5>Email: </h5>
                                </div>
                                <div className="col-4">
                                    <h3>{getData.selectedProvider.Email}</h3>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            <div className="row">
                                <div className="col-2">
                                    <h5>Type of good: </h5>
                                </div>
                                <div className="col-4">
                                    <input className="form-control" type="text" onChange={(e)=>setData({...getData, TypeOfGood: e.target.value})}></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <h5>Amount (kg): </h5>
                                </div>
                                <div className="col-4">
                                    <input  className="form-control" type="number" onChange={(e)=>setData({...getData, Amount: e.target.value})}></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <h5>Crates: </h5>
                                </div>
                                <div className="col-4">
                                    <input className="form-control" type="number" onChange={(e)=>setData({...getData, Crates: e.target.value})}></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <h5>Price: </h5>
                                </div>
                                <div className="col-4">
                                    <input className="form-control" type="text" onChange={(e)=>setData({...getData, Price: e.target.value})}></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <h5>Gross amount: </h5>
                                </div>
                                <div className="col-4">
                                    <h3>{getData.GrossAmount}</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <h5>Value: </h5>
                                </div>
                                <div className="col-4">
                                    <h3>{getData.TotalValue}</h3>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </form>
                <hr/>
                <div className=".btn-add-div">
                    <button className="btn btn-warning" style={{marginRight: "20px"}} onClick={()=>CalculateAmount(getData.Amount, getData.Price, getData.Crates)}>Calculate</button>
                    <button className="btn btn-success" onClick={()=>{createNewBill(getData.selectedProvider.Name, getData.selectedProvider.LastName, getData.selectedProvider.Phone, getData.selectedProvider.Email, getData.TypeOfGood, getData.Amount, getData.Crates, getData.Price, billsLength.length+1, getData.selectedProvider.ID )}}>Create bill</button>    
                </div>
            </div>
            
        </div>
    )
}
export default Bill;