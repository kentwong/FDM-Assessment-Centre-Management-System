import axios from 'axios';
import React, { Component } from 'react';
import StaffService from '../../services/StaffService';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
           emailAddress: '',
           password: '',
           error: ''
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.validateUser = this.validateUser.bind(this);
    }


    initialState = {
        emailAddress: '',
        password: '',
        error: ''
    }

    handleOnChange = e => {
        const { id, value } = e.target;
        this.setState({
            [id]: value
        })
    }

    resetLoginForm = () => {
        this.setState(() => this.initialState);
    }

    validateUser = e => {
        e.preventDefault();

        let LoginDetails = {
            emailAddress: this.state.emailAddress,
            password: this.state.password
        };

        StaffService.sendDetails(LoginDetails).then(res => {
            console.log(JSON.stringify(res));
            if(res.data) {
                localStorage.setItem('user', res.data.staffId);
                localStorage.setItem('role', res.data.role);
                window.location.reload(false);
                
            }
            else {
                this.setState({ error: 'Incorrect username or password'})
            }
        })
    }

    render() {
        return (
            <div className="container">
                <form className="custom-container" onSubmit={this.validateUser}>
                    <h2 className="mb-5">Log In</h2>

                    {this.state.error && <div className="alert alert-danger" role="alert">
                        {this.state.error}
                    </div>}
                    <div className="mb-3">
                        <label htmlFor="emailAddress" className="form-label">Email Address <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" name="emailAddress" id="emailAddress" value={this.state.emailAddress} onChange={this.handleOnChange} required></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" name="password" id="password" value={this.state.password} onChange={this.handleOnChange} required></input>
                    </div>

                    <button type="submit" className="btn btn-success me-2">Login</button>
                   
                </form>
                

            </div>
        );
    }
}



export default Login;