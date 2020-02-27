import React, { Component } from 'react';
import Contant from './contants/index'

import './style/style.css'


class Dmc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            regist: false,
            login: false,
            data: [],
            name: '',
            password: '',
            email: '',
            auth: ''
        }
    }


    linkRegist = () => {
        this.setState({
            regist: true, login: false
        })
    }
    linkLogin = () => {
        this.setState({
            login: true, regist: false
        })
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        const {name,password,email}=this.state;
        if(name == ''){
       alert('enter name')
    }else if(password == ''){
        alert('enter password')
     }else if(email == ''){
        alert('enter email')
     }else{
        var data = {
            name: this.state.name,
            password: this.state.password,
            email: this.state.email
        }
        console.log(data)
        fetch("http://localhost:8080/new", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).catch(function (err) {
            console.log(err)
        });
    
    }
    
    }
    handleAuth = (event) => {
        event.preventDefault()
        var data = {
            name: this.state.name,
            password: this.state.password,
        }
        console.log(data)
        fetch("http://localhost:8080/auth", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(auth => this.setState({ auth }))
            .catch(function (err) {
                console.log(err)
            });
            
    }
    render() {
    if(this.state.auth === "true") {
        this.props.history.push({pathname: "/contants"})
    }
        return (
            <>
                <div class="login-page">
                    <div class="form">
                        {this.state.regist && !this.state.login && <form class="login-form" onSubmit={this.handleSubmit} autoComplete="off">
                            <input type="text" autoComplete="off" onChange={this.handleChange} placeholder="username" name='name' />
                            <input type="password" autoComplete="off" onChange={this.handleChange} placeholder="password" name='password' />
                            <input type="text" autoComplete="off" onChange={this.handleChange} placeholder="email" name='email' />
                            <button type="submit" className="btn btn-success" value="post" onClick={this.handleLogin}>Create</button>
                            <p class="message">Already registered? <a href="#" onClick={this.linkLogin}>Sign In</a></p>
                        </form>}
                        {!this.state.regist && <form class="login-form" onSubmit={this.handleAuth}>
                            <input type="text" onChange={this.handleChange} placeholder="username" name='name' value={this.state.name} />
                            <input type="password" onChange={this.handleChange} placeholder="password" name='password' value={this.state.password} />
                            <button type="submit" className="btn btn-success" value="post" onClick={this.handleLogin}>login</button>
                            <p class="message">Not registered? <a href="#" onClick={this.linkRegist}>Create an account</a></p>
                        </form>}
                    </div>
                    {this.state.auth}
                </div>
                <div>{this.state.msg}</div>
            </>
        )
    }

}
export default Dmc