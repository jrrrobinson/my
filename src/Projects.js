import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import MainContainer from './MainContainer';

// Declare your Component here
class Projects extends Component{

    constructor() {
        super();
        this.state = { 
            projects: [] 
        }
    }

    componentDidMount() {
        //Fetch
        axios.get("https://tranquil-earth-54392.herokuapp.com/projects").then((res) => {
            //Success
            this.setState({ 
                projects: res.data, 
            });
    }).catch((err)=>{ });
    }

    render(){
        return (
            <MainContainer sidebar='Projects'>            
            <h1 className="page-header">Projects</h1>
                <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th className="col-md-2">Name</th>
                        <th className="col-md-7">Description</th>
                        <th className="col-md-2">Start Date</th>
                        <th className="col-md-1">End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.projects.map((object, index) => {
                        return (
                            <tr>
                                <td key={index}>{object.ProjectName}</td>
                                <td key={index}>{object.ProjectDescription}</td>
                                <td key={index}>{moment(object.ProjectStartDate).format("MMMM Do, YYYY")}</td>
                                <td key={index}>{object.ProjectEndDate}</td>
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
export default Projects; 

