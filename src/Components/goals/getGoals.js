import React, { Component } from 'react';
import axios from 'axios';
import './goals.css';

class DisplayGoals extends Component{
    constructor(){
        super()
        this.state = {
            goals: []
        }
    }
    componentDidMount = () => {
        axios.get('/api/goal')
        .then((response)=>{console.log(response)
        this.setState({goals: response.data})})
    }
    render(){
        const {goals} = this.state;
        return(
            <div>
                <h1>MY GOALS</h1>
                {
                    goals.length ?
                    goals.map(goal => <div key={goal.id} className='added-goals'>{goal.id}</div>) :
                    null
                }
            </div>
        )
    }
}

export default DisplayGoals;