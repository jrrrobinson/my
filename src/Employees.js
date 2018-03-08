import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import MainContainer from './MainContainer';

// Declare your Component here
class Employees extends Component{

    constructor() {
        super();
        this.state = { 
            employees: [] 
        }
    }

    componentDidMount() {
        //Fetch
        axios.get("https://tranquil-earth-54392.herokuapp.com/employees").then((res) => {
            //Success
            this.setState({ 
                employees: res.data, 
            });
    }).catch((err)=>{ });
    }

    render(){
        return (
            <MainContainer sidebar='Employees'>            
            <h1 className="page-header">Employees</h1>
                <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th className="col-md-4">Full Name &amp; Position</th>
                        <th className="col-md-3">Address</th>
                        <th className="col-md-2">Phone Number</th>
                        <th className="col-md-2">Hire Date</th>
                        <th className="col-md-1">Salary Bonus</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map((object, index) => {
                        return (
                            <tr>
                                <td key={index}>{object.FirstName} {object.LastName} - {object.Position && object.Position.PositionName}</td>
                                <td key={index}>{object.AddressStreet} <br/> {object.AddressCity}, {object.AddressState} {object.AddressZip}</td>
                                <td key={index}>{object.PhoneNum} <br/> ext: {object.Extension}</td>
                                <td key={index}>{moment(object.HireDate).format("MMMM Do, YYYY")}</td>
                                <td key={index}>$ {object.SalaryBonus}</td>
                            </tr>
                        );
                    })}
                </tbody>
                </table>
        </MainContainer>
        );
    }
}

// export the component by name
export default Employees; 

