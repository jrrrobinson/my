import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

// Declare your Component here
class EmployeesPanel extends Component{

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
    }).catch((err)=>{
        //NOT FOUND
    });
    }

    render(){
        return (
            <div className="panel panel-default">
            <div className="panel-heading">
            <h3 className="panel-title">Employees</h3>
            </div>
            <div className="panel-body">
            <div className="table-responsive overview-table">
                <table className="table table-striped table-bordered">
                <tbody>
                    {this.state.employees.map((object, index) => {
                        return (
                            <tr>
                                <td key={index}>{object.FirstName} {object.LastName} </td>
                                <td key={index}>{object.Position && <p>{object.Position.PositionName}</p>}</td>
                            </tr>
                        );
                    })}
                </tbody>
                </table>
            </div>
            <Link to="/employees" className="btn btn-primary form-control">View All Employees Data</Link>
            </div>
            </div>
        );
    }
}

// export the component by name
export default EmployeesPanel; 

