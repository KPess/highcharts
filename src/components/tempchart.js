import tempData from "../TempData.json"
import React from 'react'
import ReactHighcharts from "react-highcharts"

const config = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: {tempData}
      }
    ]
  };

class Chart extends React.Component {
  render() {
    return (
    <div>
     <h1>Highcharts with Reactjs</h1>
     <ReactHighcharts config={config}></ReactHighcharts>
    </div>
   )
 };
}
export default Chart;