import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

import { Link } from 'react-router-dom';

// Declare your Component here
class ProjectsPanel extends Component{

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
    }).catch((err)=>{
        //NOT FOUND
    });
    }

    render(){
        return (
            <div className="panel panel-default">
            <div className="panel-heading">
            <h3 className="panel-title">Projects</h3>
            </div>
            <div className="panel-body">
            <div className="table-responsive overview-table">
                <table className="table table-striped table-bordered">
                <tbody>
                    {this.state.projects.map((object, index) => {
                        return (
                            <tr>
                                <td key={index}>{object.ProjectName}</td>
                                <td key={index}>Active {moment().diff(moment(object.ProjectStartDate), "Days")} Days</td>
                            </tr>
                        );
                    })}
                </tbody>
                </table>
            </div>
            <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
            </div>
            </div>
        );
    }
}

// export the component by name
export default ProjectsPanel; 

