import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class GraphOfCases extends Component {


    render() {

        const options = {
            responsive: true,
            legend: {
                display:false,
                labels: {
                    fontColor: "white",
                    fontSize: 10
                }
            },
            title: {
                display: true,
                text: 'Number of Cases Reported over the Date',
                fontColor: 'white',
                fontSize : 16
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
                        color: 'rgba(255,255,255,0.5)'
                    },
                    ticks: {
                        fontColor: 'rgba(255,255,255,1)'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Date',
                        fontColor: 'rgba(255,255,255,1)'
                    }
                }],
                yAxes: [{
                    display: true,
                    color: 'rgba(255,255,255,1)',
                    gridLines: {
                        display: true,
                        color: 'rgba(255,255,255,0.5)'
                    },
                    ticks: {
                        fontColor: 'rgba(255,255,255,1)'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value',
                        fontColor: 'rgba(255,255,255,1)'
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
                    lineTension: 0.3,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: 'rgba(255,255,255,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(255,255,255,1)',
                    pointBackgroundColor: 'rgba(255,255,255,1)',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(255,255,255,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    color: 'rgba(255,255,255,1)',
                    data: this.props.cases,

                }
            ],
        };


        return (
            <div>
                <div className="small-box bg-primary text-light">

                    <Line data={data} options={options} />
                </div>
            </div >
        );
    }
}

export default GraphOfCases;