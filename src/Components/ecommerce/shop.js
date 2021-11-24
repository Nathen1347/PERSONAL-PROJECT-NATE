import React from 'react';
import './shop.css'
import IncomeChart from '../Charts.js/incomeChart';
function Shop(){
    return(
        <div className='shop'>
            <h1>Merch Coming Soon</h1>
            <div className='graph'>
            <IncomeChart />
                </div>
        </div>
    )
}

export default Shop;