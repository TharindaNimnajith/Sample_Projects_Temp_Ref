import React, { Component } from 'react';
import Select from 'react-select';
import GraphOfCases from './GraphOfCases'
import GraphOfDeaths from './GraphOfDeaths'
import GraphOfRecover from './GraphOfRecover'
import AllInOne from './AllInOne'
import {
    Paper
} from '@material-ui/core';

class GraphComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: null,
            countryNames: [],
            selectedCountry: null,
        }
    }

    componentDidMount() {
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




    setData = (country) => {

        let labels = [];
        let deaths = [];
        let recovered = [];
        let cases = [];

        console.log('con', country)

        country.map((con) => {
            labels.push(con.date);
            deaths.push(con.deaths);
            recovered.push(con.recovered);
            cases.push(con.confirmed);
        })

        this.setState({
            labels: labels,
            deaths: deaths,
            recovered: recovered,
            cases: cases
        })
    }

    getCountryValues = (country) => {
        this.setState({
            selectedCountry: country.value
        })
        this.setData(this.state.countries[country.value]);
    }

    selectChangeHandle = (val) => {

        this.getCountryValues(val);
        this.fetchCountryCode(val.value)

    }

    fetchCountryCode = (i) => {
        if (i === 'India') {
            this.setState({
                countryName: i,
                countryCode: 'IN'
            });
        } else {
            fetch(`https://restcountries.eu/rest/v2/name/${i}`)
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        countryName: i,
                        countryCode: response[0].alpha2Code
                    });
                })
                .catch((error) => console.log('Something went wrong...', error));
        }
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

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <div data-toggle="tooltip" data-placement="top" title={'a'} className={`small-box bg-white   `}>
                            <div className="inner text-center">
                                <h6 className="text-center">Source</h6>
                                <p className="text-center"> The values displayed here are collected and distributed publicly by <a href="https://pomber.github.io/covid19">https://pomber.github.io/covid19</a></p>
                            </div>

                            <p className="small-box-footer text-danger">Consider these values as approximate values</p>
                        </div>
                    </div>
                </div>

                <Select options={this.state.countryNames}
                    onChange={opt => this.selectChangeHandle(opt)} />

                <Paper style={{ marginTop: 20 }} />
                {
                    (this.state.countryCode != null) && (

                        <div className="small-box bg-light">
                            <div className="row text-center">
                                <div className="col">
                                    <img alt="" width="80px" src={`https://www.countryflags.io/${this.state.countryCode}/flat/64.png`} />
                                </div>

                            </div>
                            <div className="row text-center">
                                <div className="col"><h3>{this.state.countryName}</h3></div>

                            </div>

                            <br />

                        </div>


                    )

                }


                {

                    (this.state.selectedCountry != null) && (
                        <div>
                            <br />
                            {/* <AllInOne countryCode={this.state.countryCode} labels={this.state.labels} cases={this.state.cases} deaths={this.state.deaths} recovered={this.state.recovered} />
                            <Paper style={{ marginTop: 20 }} /> */}
                            <GraphOfCases DcountryCode={this.state.countryCode} labels={this.state.labels} cases={this.state.cases} />
                            <Paper style={{ marginTop: 20 }} />
                            <GraphOfDeaths countryCode={this.state.countryCode} labels={this.state.labels} cases={this.state.deaths} />
                            <Paper style={{ marginTop: 20 }} />
                            <GraphOfRecover countryCode={this.state.countryCode} labels={this.state.labels} cases={this.state.recovered} />
                        </div>
                    )
                }

            </div>
        );
    }
}

export default GraphComp;