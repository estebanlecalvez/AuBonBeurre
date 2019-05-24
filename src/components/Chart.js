import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
      poidCuve: props.poidCuve
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

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

        <div style={{ width: 600 }}>
          <Line
            data={this.state.poidCuve}
            options={{
              title: {
                display: this.props.displayTitle,
                text: "Poid de la cuve",
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
