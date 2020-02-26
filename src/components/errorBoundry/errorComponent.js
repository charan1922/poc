
import React, { Component } from 'react';


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null
    };
  }
  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error: error,
      info: info
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        // <div>
        //   <h1>Oops, something went wrong :(</h1>
        //   <h5>Please refresh the page to get back into your session.</h5>
        //   {/* <p>The error: {this.state.error.toString()}</p>
        //   <p>Where it occured: {this.state.info.componentStack}</p> */}
        // </div>
        <>
          <div className="wrapper" >
            <div className="shareleft"></div>
            <div className="sharebottom"></div>
            <div className="message-box ">
              <div className="error-page">
                <p>We are sorry,<br />there is currently a problem with the website.</p>
                <div className="buttons-con ">
                  <div className="action-link-wrap">
                    {/* <Link to="/platform/web/login" className="btn btn-danger">Login</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;