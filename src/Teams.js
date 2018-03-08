import React, { Component } from 'react';
import axios from 'axios';
import MainContainer from './MainContainer';

// Declare your Component here
class Teams extends Component{

    constructor() {
        super();
        this.state = { 
            teams: [] 
        }
    }

    componentDidMount() {
        //Fetch
        axios.get("https://tranquil-earth-54392.herokuapp.com/teams").then((res) => {
            //Success
            this.setState({ 
                teams: res.data, 
            });
    }).catch((err)=>{ });
    }

    render(){
        return (
            <MainContainer sidebar='Teams'>            
            <h1 className="page-header">Teams</h1>
                <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th className="col-md-2">Name</th>
                        <th className="col-md-5">Projects</th>
                        <th className="col-md-2">Employees</th>
                        <th className="col-md-3">TeamLead</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.teams.map((object, index) => {
                        return (
                            <tr>
                                <td key={index}>{object.TeamName}</td>

                                <td key={index}>
                                    {object.Projects && 
                                    <ul>
                                        <li>{object.Projects[0].ProjectName}</li>
                                        <li>{object.Projects[1].ProjectName}</li>
                                    </ul>}
                                </td>

                                <td key={index}>{object.Employees.length} Employees</td>
                                <td key={index}>{object.TeamLead && <p>{object.TeamLead.FirstName} {object.TeamLead.LastName}</p>}</td>
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
export default Teams; 

