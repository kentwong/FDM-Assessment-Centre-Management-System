import React, { Component } from 'react';
import {Inject, ScheduleComponent, Month, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';

class InterviewAccordian extends Component {
    constructor(props) {
        super(props)


    }

    // componentDidMount() {
    //     HomePageRecruiterService.getAssessmentCentreResponsesHome().then((res) => {

    //         this.setState({ candidatesOverviewData: res.data })
    //         console.log(this.state.candidatesOverviewData);
    //     })
    // }

    render() {
        return (
            <div>
                <h2>Here are your Upcoming Assesment Centre(s):</h2>

                <div class="accordion centreMe" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                AC #1
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ScheduleComponent height="390" >
                                    <ViewsDirective>
                                        <ViewDirective option='Month'></ViewDirective>
                                    </ViewsDirective>
                                    <Inject services={[Month]} />
                                </ScheduleComponent>

                                <br />
                                <strong className='centreMe'>x Assigned Applicants</strong>
                                <br /><br />
                                <strong ><a href="/event">View Event</a></strong>
                                <br />
                                <strong ><a className='centreMe' href="/applicants">View Applicants</a></strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                AC #2
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                AC #3
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InterviewAccordian;