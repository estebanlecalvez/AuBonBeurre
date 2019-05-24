import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import axios from 'axios';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
    this.getAllData();
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  getAllData() {
    axios.get('http://localhost:8081/getAllData', { crossdomain: true })
      .then(response => console.log(response))
  }

  render() {
    return (
      <div className="chart" style={{ postition: "absolute" }}>
        {/* <div style={{ width: 600 }}>
          <Bar
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: "Largest Cities In " + this.props.location,
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
        </div> */}
        <div style={{ width: 600 }}>
          <Line
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: "Température cuve",
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
        </div>
        {/* <div style={{ width: 600 }}>
          <Pie
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: "Largest Cities In " + this.props.location,
                fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
        </div> */}
      </div>
    );
  }
}

export default Chart;
