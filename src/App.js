import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";
import axios from 'axios';

class App extends Component {
  informations = [];
  bactSalls = [];

  constructor() {
    super();
    this.state = {
      chartData: {},
      poidCuve: {}
    };
    // this.getAllData();
    this.finByNumUnite(1);
  }

  // getAllData() {
  //   axios.get('http://localhost:8081/getAllData', {crossdomain: true })
  //   .then(response => {
  //     this.informations = response.data.datas;
  //     console.log(this.informations)
  //   })
  // }

  finByNumUnite(numUnite){
    axios.get('http://localhost:8081/findOneBy', {params: {'numUnite': numUnite}, crossdomain: true })
    .then(response => {
      this.informations = response.data.datas;
      console.log(this.informations)
    }).then( () => this.pushBacteriaList())
  }

  pushBacteriaList(){
    for(var i= 0; i < this.informations.length; i++)
      {
          this.bactSalls.push(this.informations[i].bacterieSallmonelle);
      }

      console.log(this.bactSalls)
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9"
        ],
        datasets: [
          {
            label: "bacterieSallmonelle",
            data: this.bactSalls,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      // }, poidCuve: {
      //   labels: [
      //     "1",
      //     "2",
      //     "3",
      //     "4",
      //     "5",
      //     "6",
      //     "7",
      //     "8",
      //     "9",
      //     "10"
      //   ],
      //   datasets: [ {
      //     label: "Poids du lait en cuve",
      //     data: this.bactSalls,
      //     backgroundColor: [
      //       "rgba(255, 99, 132, 0.6)",
      //       "rgba(54, 162, 235, 0.6)",
      //       "rgba(255, 206, 86, 0.6)",
      //       "rgba(75, 192, 192, 0.6)",
      //       "rgba(153, 102, 255, 0.6)",
      //       "rgba(255, 159, 64, 0.6)",
      //       "rgba(255, 99, 132, 0.6)"
      //     ]
      //   }]
      // }, mesurePh: {
      //   labels: [
      //     "1",
      //     "2",
      //     "3",
      //     "4",
      //     "5",
      //     "6",
      //     "7",
      //     "8",
      //     "9",
      //     "10"
      //   ],
      //   datasets: [
      //     {
      //       label: "mesurePh",
      //       data: [6.8, 6.9, 7.0, 6.8, 7.2, 7.1, 7.0, 6.8, 7.1, 6.8],
      //       backgroundColor: [
      //         "rgba(255, 99, 132, 0.6)",
      //         "rgba(54, 162, 235, 0.6)",
      //         "rgba(255, 206, 86, 0.6)",
      //         "rgba(75, 192, 192, 0.6)",
      //         "rgba(153, 102, 255, 0.6)",
      //         "rgba(255, 159, 64, 0.6)",
      //         "rgba(255, 99, 132, 0.6)"
      //       ]
      //     }
      //   ]
      }
    });
  }

  render() {
    return (
      <div>
        <Chart
          chartData={this.state.chartData}
          location="Massachusetts"
          legendPosition="bottom"
        />

        {/* <Chart
          chartData={this.state.poidCuve}
          location="Massachusetts"
          legendPosition="bottom"
        />

        <Chart
          chartData={this.state.mesurePh}
          location="Massachusetts"
          legendPosition="bottom"
        /> */}
      </div>
    );
  }
}

export default App;
