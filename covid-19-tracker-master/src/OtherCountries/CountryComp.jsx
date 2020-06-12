import React, { Component } from 'react';
import Select from 'react-select';
import CountryDashboard from './CountryDashboard'

class CountryComp extends Component {

    componentDidMount() {
        fetch('https://corona.lmao.ninja/countries')
            .then(response => response.json())
            .then(response => {

                if (response.length > 0) {
                    this.setState({
                        countries: response
                    })
                    const countryNames = [];

                    for (let i = 0; i < this.state.countries.length; i++) {

                        countryNames.push(
                            {
                                label: this.state.countries[i].country,
                                value: this.state.countries[i].country
                            });
                    }

                    this.setState({
                        countryNames: countryNames
                    })
                  

                }
            })
            .catch((error) => console.log('Something went wrong...', error));


    }

    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            countryNames: [],
            selectedCountry: null,
            countryCode: null
        }
    }

    selectChangeHandle = (val) => {
        for (var i = 0; i < this.state.countries.length; i++) {
            if (this.state.countries[i].country === val.value) {
                this.setState({
                    selectedCountry: this.state.countries[i]
                })
                fetch(`https://restcountries.eu/rest/v2/name/${this.state.countries[i].country}`)
                    .then(response => response.json())
                    .then(response => {
                        this.setState({
                            countryCode: response[0].alpha2Code
                        })
                    })
                    .catch((error) => console.log('Something went wrong...', error));
            }
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <div data-toggle="tooltip" data-placement="top" title={'a'} className={`small-box bg-white   `}>
                            <div className="inner text-center">
                                <h6 className="text-center">Source</h6>
                                <p className="text-center"> The values displayed here are collected and distributed publicly by <a href="https://corona.lmao.ninja">https://corona.lmao.ninja</a></p>
                            </div>

                            <p className="small-box-footer text-danger">Consider these values as approximate values</p>
                        </div>
                    </div>
                </div>

                <Select options={this.state.countryNames}
                    onChange={opt => this.selectChangeHandle(opt)}  />

                {
                    (this.state.selectedCountry != null) && (
                        <div>
                            <br />
                            <CountryDashboard countryCode={this.state.countryCode} type={this.state.selectedCountry.country} dashboardData={this.state.selectedCountry} />
                        </div>
                    )
                }

            </div>
        );
    }
}

export default CountryComp;