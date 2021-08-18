import React from 'react';
import Overviewbill from './overviewbill/overviewbill';
import Charts from './charts/charts';


import '../overview/overview.css'

var Overview = () => {

    

    var getbills = JSON.parse(localStorage.getItem('AllBills'));
    var renderBills = ""
    localStorage.getItem('AllBills')!==null? renderBills = getbills.map((bill, index)=>(
        <Overviewbill BillID={bill.ID} key={index} Name={bill.Name} ID={bill.providerID} LastName={bill.LastName} TypeOfGood={bill.TypeOfGood} Amount={bill.Amount} Crates = {bill.Crates} GrossAmount = {bill.GrossAmount} Value = {bill.TotalValue}/>
    )): console.log("no")

    var total = 0;
    
        for(let i=0; i<getbills.length; i++){
            total = total+parseInt(getbills[i].Amount)
        }


    return(
        <div>
            <Charts />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Bill ID</th>
                        <th>Provider ID</th>
                        <th>Name</th>
                        <th>Last name</th>
                        <th>Type of good</th>
                        <th>Amount (kg)</th>
                        <th>Crates</th>
                        <th>Gross amount (kg)</th>
                        <th>Value</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderBills}
                </tbody>
            </table>
            {total}
        </div>
    )
}

export default Overview;