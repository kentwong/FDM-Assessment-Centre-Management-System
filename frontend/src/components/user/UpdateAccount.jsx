import React, { Component } from 'react';
import StaffService from '../../services/StaffService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import ProfileVector from '../../assets/images/profile.jpg';

class UpdateAccount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            email: '',
            firstName: '',
            lastName: '',
            encyptedPassword: '',
            phoneNumber: '',
            success: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    handleOnChange = e => {
        const { id, value } = e.target;
        this.setState({
            [id]: value
        })
    }

    cancel() {
        this.props.history.push('/');
    }

    componentDidMount() {
        StaffService.getStaffById(localStorage.getItem('user')).then(res => {
            let staff = res.data;
            console.log(staff)
            this.setState({
                id: staff.id,
                type: staff.type,
                firstName: staff.firstName,
                lastName: staff.lastName,
                encyptedPassword: '',
                email: staff.email,
                phoneNumber: staff.phoneNumber
            })
        })
        //init tooltip
        Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
            .forEach(tooltipNode => new Tooltip(tooltipNode))
    }

    updateUser = e => {
        e.preventDefault();

        let staff = {
            id: this.state.id,
            type: this.state.type,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            encyptedPassword: this.state.encyptedPassword,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber

        };
        console.log(JSON.stringify((staff)));

        // localStorage.setItem("name", this.state.firstName);

        StaffService.updateStaff(staff).then(res => {
            let counter = 10;
            setInterval(() => {
                counter--;
                counter < 0 ? this.props.history.push('/') :
                    this.setState({ success: `Account has been updated successfully. Redirecting to home page in ${counter} seconds.` })
            }, 1000)
        });
    }

    render() {
        return (
            <div className="custom-container">
                <h2 className="mb-5 text-center">Update Account Details</h2>
                <div className="row">
                    <div className="col-4">
                        <img src={ProfileVector} style={{ "width": "100%" }} alt="Update Account" />
                        {/* <a href='https://www.freepik.com/vectors/people'>People vector created by pch.vector - www.freepik.com</a> */}
                    </div>

                    <div className="col-8 ps-5">
                        <form onSubmit={this.updateUser}>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="firstname" className="form-label">First Name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="firstName" value={this.state.firstName} onChange={this.handleOnChange} required></input>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName" className="form-label">Last Name<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="lastName" value={this.state.lastName} onChange={this.handleOnChange} required></input>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone <span className="text-danger">*</span></label>
                                <input type="tel" className="form-control" id="phoneNumber" value={this.state.phoneNumber} minLength="10" maxLength="10" onChange={this.handleOnChange} required></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Address <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.handleOnChange} required></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="encyptedPassword" className="form-label">Password <span className="text-danger">*</span></label>
                                <button type="button" className="btn-transparent" data-bs-toggle="tooltip" data-bs-placement="right" title="For security reason, please change the password when you update your account.">
                                    <FontAwesomeIcon className="icon-link me-2" icon={faInfoCircle} color="#0d6efd" />
                                </button>
                                <input type="password" className="form-control" id="encyptedPassword" value={this.state.encyptedPassword} onChange={this.handleOnChange} required></input>
                            </div>

                            <button type="submit" className="btn btn-primary me-2 mt-3">Save</button>
                            <button className="btn btn-danger mt-3" onClick={this.cancel.bind(this)}>Cancel</button>
                            {this.state.success && <div className="alert alert-success ms-0 me-auto mt-5" role="alert">
                                {this.state.success}
                            </div>}
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateAccount;