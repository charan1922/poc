import React from 'react';
class People extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name:'',
            password:'',
            email:''
        };
    }
    handleshow = () => {
        fetch('http://localhost:8080/api')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        this.setState({[name]:value})
    }

    handleSubmit=(event)=> {
        event.preventDefault()
        var data = {
            name: this.state.name,
            password: this.state.password,
            email: this.state.email
        }
        console.log(data)
        fetch("http://localhost:8080/new", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            // eslint-disable-next-line eqeqeq
            if(data == "success"){
               this.setState({msg: "Thanks for registering"});  
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    render() {
        return (
            <>
                <input type='button' value='show all' onClick={this.handleshow} />
                {this.state.data.map(item => (

                    <table border='1px' style={{ borderCollapse: "collapse" }}><tr><td>{item.id}</td><td>{item.name}</td><td>{item.email}</td><td>{item.password}
                    </td></tr></table>
                ))}


                <form onSubmit={this.handleSubmit}>
                    <label>Name:<input type="text" onChange={this.handleChange} name='name' value={this.state.name} /></label><br />
                    <label style={{ padding: '12px' }}>email:<input type="text" onChange={this.handleChange} name='email' value={this.state.email} /></label>    
                    <label style={{ padding: '12px' }}>password:<input type="text" onChange={this.handleChange} name='password' value={this.state.password} /></label>       <input type="submit" className="btn btn-success" value="post" />
                    <br />
                </form>

            </>
        );
    }
}

export default People;
