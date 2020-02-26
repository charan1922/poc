import React,{Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ErrorBoundary from './components/errorBoundry/errorComponent';
import Index from './routes/index'


import rootReducer from '../src/reducer/index'

const store = createStore(rootReducer);
const history = createBrowserHistory()




class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <ErrorBoundary>
              <Route path="/" component={Index} />
            </ErrorBoundary>
          </Switch>
        </Router>

      </Provider>
    );
  }
}

export default App;
