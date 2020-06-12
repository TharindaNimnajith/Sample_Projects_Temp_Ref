import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class AllInOne extends Component {


    render() {

        const options = {
            responsive: true,
            legend: {
                display: true,
                labels: {
                    fontColor: "black",
                    fontSize: 10
                }
            },
            title: {
                display: true,
                text: 'All (Cases, Recoveries, Deaths) in One Graph',
                fontColor: 'black',
                fontSize: 16
            },
            tooltips: {
                mode: 'label',
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    color: 'rgba(255,255,255,1)',
                    gridLines: {
                        display: true,
                        color: 'rgba(179, 177, 175,0.5)'
                    },
                    ticks: {
                        fontColor: 'rgba(179, 177, 175,1)'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Date',
                        fontColor: 'rgba(179, 177, 175)'
                    }
                }],
                yAxes: [{
                    display: true,
                    color: 'rgba(255,255,255,1)',
                    gridLines: {
                        display: true,
                        color: 'rgba(179, 177, 175,0.5)'
                    },
                    ticks: {
                        fontColor: 'rgba(179, 177, 175,1)'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value',
                        fontColor: 'rgba(179, 177, 175,1)'
                    }
                }]
            }

        }

        const data = {
            labels: this.props.labels,
            datasets: [
                {
                    label: 'Number of Reported Cases over the date',
                    fill: false,
                    lineTension: 0.4,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(204, 14, 4,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(204, 14, 4,1)',
                    pointBackgroundColor: 'rgba(204, 14, 4,1)',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(204, 14, 4,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    color: 'rgba(255,255,255,1)',
                    data: this.props.cases,

                },
                {
                    label: 'Number of Deaths over the date',
                    fill: false,
                    lineTension: 0.4,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(61, 59, 59,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(61, 59, 59,1)',
                    pointBackgroundColor: 'rgba(61, 59, 59,1)',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(61, 59, 59,1)',
                    pointHoverBorderColor: 'rgba(61, 59, 59,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    color: 'rgba(255,255,255,1)',
                    data: this.props.deaths,

                },
                {
                    label: 'Number of Recovered Patients over the date',
                    fill: false,
                    lineTension: 0.4,
                    backgroundColor: 'rgba(6, 153, 50,1)',
                    borderColor: 'rgba(6, 153, 50,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(6, 153, 50,1)',
                    pointBackgroundColor: 'rgba(6, 153, 50,1)',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(6, 153, 50,1)',
                    pointHoverBorderColor: 'rgba(6, 153, 50,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    color: 'rgba(255,255,255,1)',
                    data: this.props.recovered,

                }
            ],
        };


        return (
            <div>
                <div className="small-box bg-light text-light">

                    <Line data={data} options={options} />
                </div>
            </div >
        );
    }
}

export default AllInOne;