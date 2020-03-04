import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import Dmc from '../components/small-app/index'
// import Contant from '../components/small-app/contants/index'
import Example from '../components/calander/calander'

class Index extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            <div>
                <Switch>
                <Route exact path="/" component={Example} />
                {/* <Route path="/contants" component={Contant}/> */}
                </Switch>
            </div>
        )
    }
}
export default Index