import React, { useState } from 'react';
import '../charts/charts.css'
import {Bar,Line, Pie } from 'react-chartjs-2';


var Charts = () =>{




    var bills = JSON.parse(localStorage.getItem('AllBills'))
    console.log(bills)
    var names = [];
    var values = []
    for(var i=0; i<bills.length;i++){
        names.push(bills[i].Name);
        values.push(bills[i].Amount)
    }


    const [getData, setData] = useState({
        chartData:{
            labels: names,
            datasets:[
                {
                    label: 'Amount',
                    data: values,
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)'
                    ]
                }
            ]
        }
    })



  
    

    return(
        <div id="charts" style={{height:"300px"}}>
            <Bar height={50} widht={50}data ={getData.chartData}/>
        </div>
    )
}

export default Charts;