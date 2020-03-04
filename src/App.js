import React,{Component} from 'react';
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
  formatter: function(value, { seriesIndex, dataPointIndex, w }) {
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
          background:{
            show: true,
            borderWidth:'10px',
            borderColor:'gray',
            borderStyle:'solid'
          }
          },
          min: new Date('2019-03-01').getTime(),
          max: new Date('2019-03-14').getTime()
        },
        
        xaxis: {
          position: "top",
          type: 'datetime',
          max: new Date('2019-03-14').toString(),
          tickAmount: 6,
        },
        legend: {
          show: false
        },
        fill: {
          type: 'gradient',
          gradient: {
                shade: 'light',
                type: "vertical",
                shadeIntensity: 0,
            }
        }
      },
      dataLabels: {
        style: {
          fontSize: '12px',
          fontWeight: 'bold',
        },
      },
     
      series: [
        {
          name: 'Bob',
          data: [{  
            x:'Design',
            y: [new Date('2019-03-02').getTime(), new Date('2019-03-03').getTime()]
            
          }, {
            x: 'Code',
            y: [new Date('2019-03-02').getTime(), new Date('2019-03-03').getTime()]
            
          }, {
            x: 'Test',
            y: [new Date('2019-03-02').getTime(), new Date('2019-03-03').getTime()]
          }, {
            x: 'Deployment',
            y: [new Date('2019-03-02').getTime(), new Date('2019-03-03').getTime()]
          }]
        }, {
          name: 'Joe',
          data: [{
            x: 'Design',
            y: [new Date('2019-03-01').getTime(), new Date('2019-03-02').getTime()] 
          }, {
            x: 'Code',
            y: [new Date('2019-03-01').getTime(), new Date('2019-03-02').getTime()] 
          }, {
            x: 'Test',
            y: [new Date('2019-03-01').getTime(), new Date('2019-03-02').getTime()] 
          }, {
            x: 'Deployment',
            y: [new Date('2019-03-01').getTime(), new Date('2019-03-02').getTime()] 
          }]
        },
        {
          name: 'Joe',
          data: [{
            x: 'Design',
            y: [new Date('2019-03-03').getTime(), new Date('2019-03-07').getTime()] 
          }, {
            x: 'Code',
            y: [new Date('2019-03-03').getTime(), new Date('2019-03-07').getTime()] 
          }, {
            x: 'Test',
            y: [new Date('2019-03-03').getTime(), new Date('2019-03-07').getTime()] 
          }, {
            x: 'Deployment',
            y: [new Date('2019-03-03').getTime(), new Date('2019-03-07').getTime()] 
            }]
        },
        {
          name: 'Joe',
          data: [{
            x: 'Design',
            y: [new Date('2019-03-07').getTime(), new Date('2019-03-10').getTime()]
          }, {
            x: 'Code',
            y: [new Date('2019-03-07').getTime(), new Date('2019-03-10').getTime()]
          }, {
            x: 'Test',
            y: [new Date('2019-03-07').getTime(), new Date('2019-03-10').getTime()]
          }, {
            x: 'Deployment',
            y: [new Date('2019-03-07').getTime(), new Date('2019-03-10').getTime()]
          }]
        },
      ],
    }
  }

  render() {
    return (
      <>
<div class="cards">
<div class="card-1" style={{borderBottom:  "10px solid #00bb7a"}}>
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
<div class="card-1" style={{borderBottom:  "10px solid #008ffb"}}>
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
<div class="card-1" style={{borderBottom:  "10px solid #feb019"}}>
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
<div class="card-1" style={{borderBottom:  "10px solid #ff4560"}}>
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
