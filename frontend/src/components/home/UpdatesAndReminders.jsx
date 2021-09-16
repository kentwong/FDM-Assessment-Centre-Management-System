import React, { Component } from 'react';
import AssessmentCentreService from '../../services/AssessmentCentreService';


class UpdatesAndReminders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            assesmentCentres: [],
            stuff: []
        }

    }

    componentDidMount() {
        AssessmentCentreService.getAssessmentCentres().then((res) => {

            this.setState({ assesmentCentres: res.data })
            console.log(res.data);
        })
    }

    changeACs() {
        this.setState({ stuff: "hi" });
        console.log(this.state.stuff);
    }



    render() {
        if (localStorage.getItem('role') == "ACCoordinator") {
            return (
                <div>
                    <h2 className='text-center' >Updates And Reminders</h2>
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Next Assesment Centre:</h5>
                                <small><a href="/view">View</a></small>
                            </div>
                            <p class="mb-1">
                                {this.state.stuff}
                                {this.state.assesmentCentres.start}
                                4 Candidates
                                </p>
                            <small>And some small print.</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                                <small class="text-muted">3 days ago</small>
                            </div>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                            <small class="text-muted">And some muted small print.</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                                <small class="text-muted">3 days ago</small>
                            </div>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                            <small class="text-muted">And some muted small print.</small>
                        </a>
                    </div>
                    
                </div>
            );
        }

        if (localStorage.getItem('role') == "recruiter") {
            return (
                <div>
                    <h2 className='text-center' >Updates And Reminders</h2>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            A list item
                            <span class="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            A second list item
                            <span class="badge bg-primary rounded-pill">2</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            A third list item
                            <span class="badge bg-primary rounded-pill">1</span>
                        </li>
                    </ul>
                </div>
            );

        }

    }
}

export default UpdatesAndReminders;