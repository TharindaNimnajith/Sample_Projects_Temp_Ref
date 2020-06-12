import React, { Component } from 'react';
import Select from 'react-select';
import {
    Paper
} from '@material-ui/core';
import TwoDataGraph from './TwoDataGraph'

class DataComparison extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: null,
            countryNames: []
        }
    }

    componentDidMount() {
        this.getBaseData();
    }

    getBaseData = () => {
        fetch('https://pomber.github.io/covid19/timeseries.json')
            .then(response => response.json())
            .then(response => {

                if (response) {
                    this.setState({
                        countries: response
                    })

                    this.setCountryNames();
                }
            })
            .catch((error) => console.log('Something went wrong...', error));
    }

    setCountryNames = () => {

        const countryNames = [];
        var p = this.state.countries;
        for (var key in p) {
            if (p.hasOwnProperty(key)) {
                countryNames.push({
                    label: key,
                    value: key
                });
            }
        }
        this.setState({
            countryNames: countryNames
        });
    }

    selectChangeHandle1 = (val) => {

        this.getCountryValues1(val);
        this.fetchCountryCode1(val.value)

    }
    selectChangeHandle2 = (val) => {

        this.getCountryValues2(val);
        this.fetchCountryCode2(val.value)

    }

    getCountryValues1 = (country) => {
        this.setState({
            selectedCountry1: country.value
        })
        this.setData1(this.state.countries[country.value]);
    }

    getCountryValues2 = (country) => {
        this.setState({
            selectedCountry2: country.value
        })
        this.setData2(this.state.countries[country.value]);
    }

    setData1 = (country) => {

        let labels = [];
        let deaths = [];
        let recovered = [];
        let cases = [];



        country.map((con) => {
            labels.push(con.date);
            deaths.push(con.deaths);
            recovered.push(con.recovered);
            cases.push(con.confirmed);
        })

        this.setState({
            labels1: labels,
            deaths1: deaths,
            recovered1: recovered,
            cases1: cases
        })
    }
    setData2 = (country) => {

        let labels = [];
        let deaths = [];
        let recovered = [];
        let cases = [];



        country.map((con) => {
            labels.push(con.date);
            deaths.push(con.deaths);
            recovered.push(con.recovered);
            cases.push(con.confirmed);
        })

        this.setState({
            labels2: labels,
            deaths2: deaths,
            recovered2: recovered,
            cases2: cases
        })
    }

    fetchCountryCode1 = (i) => {

        if (i === 'India') {
            this.setState({
                countryName1: i,
                countryCode1: 'IN'
            });
        } else {
            fetch(`https://restcountries.eu/rest/v2/name/${i}`)
                .then(response => response.json())
                .then(response => {
                    console.log(i, response)
                    this.setState({
                        countryName1: i,
                        countryCode1: response[0].alpha2Code
                    });
                })
                .catch((error) => console.log('Something went wrong...', error));
        }

    }
    fetchCountryCode2 = (i) => {
        if (i === 'India') {
            this.setState({
                countryName2: i,
                countryCode2: 'IN'
            });
        } else {
            fetch(`https://restcountries.eu/rest/v2/name/${i}`)
                .then(response => response.json())
                .then(response => {
                    console.log(i, response)
                    this.setState({
                        countryName2: i,
                        countryCode2: response[0].alpha2Code
                    });
                })
                .catch((error) => console.log('Something went wrong...', error));
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h6 className="text-center">Country 1 </h6>
                        <Select
                            options={this.state.countryNames}
                            onChange={opt => this.selectChangeHandle1(opt)}
                        />
                    </div>
                    <div className="col">
                        <h6 className="text-center">Country 2 </h6>
                        <Select
                            options={this.state.countryNames}
                            onChange={opt => this.selectChangeHandle2(opt)}
                        />
                    </div>
                </div>
                <Paper style={{ marginTop: 20 }} />

                {
                    (this.state.countryCode1 != null && this.state.countryCode2 != null) &&
                    (
                        <div>
                            <div className="small-box bg-light">
                                <div className="row">
                                    <div className="col text-center">
                                        <img alt="" width="80px" src={`https://www.countryflags.io/${this.state.countryCode1}/flat/64.png`} />
                                        <h6 className="text-center">{this.state.countryName1}</h6>

                                    </div>
                                    <div className="col align-middle">

                                        <h6 className="text-center">Compared With</h6>

                                    </div>
                                    <div className="col text-center">
                                        <img alt="" width="80px" src={`https://www.countryflags.io/${this.state.countryCode2}/flat/64.png`} />
                                        <h6 className="text-center">{this.state.countryName2}</h6>

                                    </div>
                                </div>
                            </div>
                            <TwoDataGraph
                                chartTitle="Reported Cases over the date"
                                label1={this.state.countryName1}
                                label2={this.state.countryName2}
                                color1="rgba(204, 14, 4,1)"
                                color2="rgba(6, 153, 50,1)"
                                data1={this.state.cases1}
                                data2={this.state.cases2}
                                dates={this.state.labels1}
                            />

                            <TwoDataGraph
                                chartTitle="Reported Deaths over the date"
                                label1={this.state.countryName1}
                                label2={this.state.countryName2}
                                color1="rgba(204, 14, 4,1)"
                                color2="rgba(6, 153, 50,1)"
                                data1={this.state.deaths1}
                                data2={this.state.deaths2}
                                dates={this.state.labels1}
                            />

                            <TwoDataGraph
                                chartTitle="Reported Recoveries over the date"
                                label1={this.state.countryName1}
                                label2={this.state.countryName2}
                                color1="rgba(204, 14, 4,1)"
                                color2="rgba(6, 153, 50,1)"
                                data1={this.state.recovered1}
                                data2={this.state.recovered2}
                                dates={this.state.labels1}
                            />
                        </div>
                    )
                }



            </div>
        );
    }
}

export default DataComparison;