import React from 'react';

import { Grid } from '@material-ui/core';

// My stuff
import DashboardCard from './DashboardCard';

function LocalDashboard({ dashboardData, image, type }) {
  return (
    <React.Fragment>


      <div className="border border-dark" style={{ padding: '10px' }}>
        <br />
        <div>
          <div className="row text-center">
            <div className="col">
              <img alt="" width="80px" src={image} />
            </div>

          </div>
          <div className="row text-center">
            <div className="col"> <h1 className="text-center">{type}</h1></div>

          </div>
        </div>
        <br />



        <Grid container spacing={1}>
          <Grid item xs>
            <DashboardCard
              count={dashboardData.local_new_cases}
              colorLevel={'primary'}
              lastUpdated={dashboardData.update_date_time}
              cardTitle="Newly Reported Patients"
              tooltip="Count of newly reported cases in Sri Lanka"
            />
          </Grid>
          <Grid item xs>
            <DashboardCard
              count={dashboardData.local_total_cases}
              colorLevel={'danger'}
              lastUpdated={dashboardData.update_date_time}
              cardTitle="Total Reported Patients"
            />
          </Grid>
          <Grid item xs>
            <DashboardCard
              count={dashboardData.local_recovered}
              colorLevel="success"
              lastUpdated={dashboardData.update_date_time}
              cardTitle="Total Recovered Patients"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>

        <Grid item xs>
            <DashboardCard
              count={dashboardData.local_active_cases}
              colorLevel="dark"
              lastUpdated={dashboardData.update_date_time}
              cardTitle="Total Active Cases"
            />
          </Grid>
          <Grid item xs>
            <DashboardCard
              count={dashboardData.local_new_deaths}
              colorLevel={'info'}
              lastUpdated={dashboardData.update_date_time}
              cardTitle="Newly Reported Deaths"
            />
          </Grid>
          <Grid item xs>
            <DashboardCard
              count={dashboardData.local_deaths}
              colorLevel={'warning'}
              lastUpdated={dashboardData.update_date_time}
              cardTitle="Total Reported Deaths"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs>
            <DashboardCard
              count={dashboardData.local_total_number_of_individuals_in_hospitals}
              colorLevel={'dark'}
              lastUpdated={dashboardData.update_date_time}
              cardTitle="Total Suspicious Patients in Hospitals"
            />
          </Grid>
        </Grid>
        
      </div>


    </React.Fragment >
  );
}

export default LocalDashboard;
