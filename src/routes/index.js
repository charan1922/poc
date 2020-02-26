import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import Dmc from '../components/small-app/index'

class Index extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            <div>
                <Switch>
                <Route  path="/" component={Dmc} />
                </Switch>
            </div>
        )
    }
}
export default Index