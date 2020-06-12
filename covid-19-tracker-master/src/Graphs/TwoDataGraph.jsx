import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class TwoDataGraph extends Component {

    render() {

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                labels: {
                    fontColor: "black",
                    fontSize: 10
                }
            },
            title: {
                display: true,
                text: this.props.chartTitle,
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
            labels: this.props.dates,
            datasets: [
                {
                    label: this.props.label1,
                    fill: false,
                    lineTension: 0.4,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: this.props.color1,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: this.props.color1,
                    pointBackgroundColor: this.props.color1,
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: this.props.color1,
                    pointHoverBorderColor: this.props.color1,
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    color: 'rgba(255,255,255,1)',
                    data: this.props.data1,

                },
                {
                    label: this.props.label2,
                    fill: false,
                    lineTension: 0.4,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderColor: this.props.color2,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: this.props.color2,
                    pointBackgroundColor: this.props.color2,
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: this.props.color2,
                    pointHoverBorderColor: this.props.color2,
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    color: 'rgba(255,255,255,1)',
                    data: this.props.data2,

                }
            ],
        };


        return (
            <div>
                <div className="small-box bg-light text-light" style={{ height: '50vh' }}>

                    <Line data={data} options={options} />
                </div>
            </div >
        );
    }

}

export default TwoDataGraph;