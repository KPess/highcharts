import React from 'react';
import './App.css';
import tempData from './TempData.json'
//HighChart Modules
import ReactHighcharts from "react-highcharts";


//HighCharts settings, type and data

/* var dates = []

for (var date in tempData) {
  if date === []
} */
let dates = []
dates = Array.from(new Set(tempData.map(({ date }) => date)))

const config = {
    xAxis: {
      title: 'Date' 
    },
    chart: {
      type: 'areasplinerange'
    },
    title: {
      text: 'Daily Average Temperature'
    },
    series: [
      {
        name: 'Average Temp',
        data: {dates}
      }
    ]
  };

console.log(tempData)
console.log(dates)
class App extends React.Component {
  render() {
    return (
    <div>
     <h1>Highcharts with Reactjs</h1>
     <ReactHighcharts config={config}></ReactHighcharts>
    </div>
   )
 };
}
export default App;