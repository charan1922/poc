import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'
import './style.scss'

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { Router, Route, Switch } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// import Index from './routes/index'
// import rootReducer from '../src/reducer/index'
// const store = createStore(rootReducer);
// const history = createBrowserHistory()
// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Router history={history}>
//           <Switch>
//               <Route path="/" component={Index} />
//           </Switch>
//         </Router>

//       </Provider>
//     );
//   }
// }

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          formatter: function (value, { seriesIndex, dataPointIndex, w }) {
            return ''

          },

        },
        yaxis: {
          labels: {
            show: true,
            style: {
              fontSize: '18px',
              fontWeight: 'bold',
            },
            background: {
              show: true,
              borderWidth: '10px',
              borderColor: 'gray',
              borderStyle: 'solid'
            }
          },
          // min: new Date('2019-03-01').getTime(),
          // max: new Date('2019-03-14').getTime()
        },

        xaxis: {
          position: "top",
          type: 'datetime',
          // max: new Date().toString(),
          tickAmount: 6,
        },
        legend: {
          show: false
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            colorStops: [
              {
                offset: 0,
                color: "#EB656F",
                opacity: 1
              },
              {
                offset: 20,
                color: "#FAD375",
                opacity: 1
              },
              {
                offset: 60,
                color: "#61DBC3",
                opacity: 1
              },
              {
                offset: 100,
                color: "#95DA74",
                opacity: 1
              }
            ]
          }
        },
      },
      dataLabels: {
        style: {
          fontSize: '12px',
          fontWeight: 'bold',
        },
      },

      series: [{
        name: 'Research ',
        data: [{
          x: 'Ranjith Ravi',
          y: [new Date('2018-11-01').getTime(), new Date('2019-05-30').getTime()]
        }, {
          x: 'sabyasachi Kulia',
          y: [new Date('2019-02-01').getTime(), new Date('2019-05-15').getTime()]

        }, {
          x: 'Rohit Shetty',
          y: [new Date('2018-12-01').getTime(), new Date('2019-03-31').getTime()]
        }]
      },
      {
        name: 'Design',
        data: [{
          x: 'Ranjith Ravi',
          y: [new Date('2019-04-01').getTime(), new Date('2019-09-30').getTime()]
        }, {
          x: 'sabyasachi Kulia',
          y: [new Date('2019-05-01').getTime(), new Date('2019-07-31').getTime()]

        }, {
          x: 'Rohit Shetty',
          y: [new Date('2019-07-01').getTime(), new Date('2019-09-30').getTime()]
        }]
      },

      {
        name: 'Development',
        data: [{
          x: 'Ranjith Ravi',
          y: [new Date('2019-10-01').getTime(), new Date('2020-01-31').getTime()]
        }, {
          x: 'sabyasachi Kulia',
          y: [new Date('2019-12-01').getTime(), new Date('2020-01-15').getTime()]

        }, {
          x: 'Rohit Shetty',
          y: [new Date('2019-10-01').getTime(), new Date('2019-12-31').getTime()]
        }]
      },

      {
        name: 'Governance',
        data: [{
          x: 'Ranjith Ravi',
          y: [new Date('2020-02-15').getTime(), new Date('2020-07-31').getTime()]
        }, {
          x: 'sabyasachi Kulia',
          y: [new Date('2020-02-15').getTime(), new Date('2020-03-15').getTime()]

        }, {
          x: 'Rohit Shetty',
          y: [new Date('2020-04-01').getTime(), new Date('2020-07-31').getTime()]
        }]
      },
      
      ],
    }
  }

  render() {
    return (
      <>
        <div class="cards">
          <div class="card-1" style={{ borderBottom: "10px solid #00bb7a" }}>
            <div class="number">
              01
</div>
            <div class="name">
              <h4>Research</h4>
              <p class="date">23 Nov 2018 - 28 May 2019</p>
            </div>
            <div class="icon">
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
          </div>
          <div class="card-1" style={{ borderBottom: "10px solid #008ffb" }}>
            <div class="number">
              02
</div>
            <div class="name">
              <h4>Design</h4>
              <p class="date">01 Apr 2019 - 28 sep 2019</p>
            </div>
            <div class="icon">
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
          </div>
          <div class="card-1" style={{ borderBottom: "10px solid #feb019" }}>
            <div class="number">
              03
</div>
            <div class="name">
              <h4>Development</h4>
              <p class="date">02 oct 2018 - 15 Feb 2020</p>
            </div>
            <div class="icon">
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
          </div>
          <div class="card-1" style={{ borderBottom: "10px solid #ff4560" }}>
            <div class="number">
              04
</div>
            <div class="name">
              <h4>Governance</h4>
              <p class="date">01 Mar 2018 - 30 Jul 2019</p>
            </div>
            <div class="icon">
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
          </div>
        </div>


        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar" height="700" />
        </div>
      </>
    );
  }
}

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(BarChart), domContainer);

export default App;
