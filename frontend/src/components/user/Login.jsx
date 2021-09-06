import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = this.initialState;

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

    cancel() {
        this.props.history.push('/');
    }

    validateUser = e => {
        e.preventDefault();

        //validate user
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
                        <input type="email" className="form-control" id="emailAddress" value={this.state.emailAddress} onChange={this.handleOnChange} required></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handleOnChange} required></input>
                    </div>

                    <button type="submit" className="btn btn-success me-2">Login</button>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                </form>
            </div>
        );
    }
}



export default Login;