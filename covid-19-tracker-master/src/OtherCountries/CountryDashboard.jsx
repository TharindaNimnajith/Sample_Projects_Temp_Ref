import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

// My stuff
import DashboardCard from '../Dashboard/DashboardCard';


class CountryDashboard extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.countryCode)
    }

   


    render() {
        const dashboardData = this.props.dashboardData;
        return (

            <div>
                <React.Fragment>


                    <div className="border border-dark" style={{ padding: '10px' }}>
                        <br />
                        <div>
                            <div className="row text-center">
                                <div className="col">
                                    <img alt="" width="80px" src={`https://www.countryflags.io/${this.props.countryCode}/flat/64.png`} />
                                </div>

                            </div>
                            <div className="row text-center">
                                <div className="col"><h3>{this.props.type}</h3></div>

                            </div>

                            <br />

                        </div>

                        <Grid container spacing={1}>
                            <Grid item xs>
                                <DashboardCard
                                    count={dashboardData.todayCases}
                                    colorLevel={'primary'}
                                    lastUpdated={dashboardData.update_date_time}
                                    cardTitle="Newly Reported Patients"
                                    tooltip="Count of newly reported cases in Sri Lanka"
                                />
                            </Grid>
                            <Grid item xs>
                                <DashboardCard
                                    count={dashboardData.cases}
                                    colorLevel={'danger'}
                                    lastUpdated={dashboardData.update_date_time}
                                    cardTitle="Total Reported Patients"
                                />
                            </Grid>
                            <Grid item xs>
                                <DashboardCard
                                    count={dashboardData.recovered}
                                    colorLevel="success"
                                    lastUpdated={dashboardData.update_date_time}
                                    cardTitle="Total Recovered Patients"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>

                            <Grid item xs>
                                <DashboardCard
                                    count={dashboardData.todayDeaths}
                                    colorLevel={'info'}
                                    lastUpdated={dashboardData.update_date_time}
                                    cardTitle="Newly Reported Deaths"
                                />
                            </Grid>
                            <Grid item xs>
                                <DashboardCard
                                    count={dashboardData.deaths}
                                    colorLevel={'warning'}
                                    lastUpdated={dashboardData.update_date_time}
                                    cardTitle="Total Reported Deaths"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs>
                                <DashboardCard
                                    count={dashboardData.active}
                                    colorLevel={'dark'}
                                    lastUpdated={dashboardData.update_date_time}
                                    cardTitle="Total Suspicious Patients in Hospitals"
                                />
                            </Grid>
                        </Grid>
                    </div>


                </React.Fragment>
            </div>
        );
    }
}

export default CountryDashboard;
