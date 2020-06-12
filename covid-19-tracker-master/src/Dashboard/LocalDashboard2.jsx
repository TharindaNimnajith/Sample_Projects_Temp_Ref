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
              count={dashboardData.global_new_cases}
              colorLevel={'primary'}
              lastUpdated={dashboardData.update_date_time}
              cardTitle="Newly Reported Patients"
            />
          </Grid>
          <Grid item xs>
            <DashboardCard
              count={dashboardData.global_total_cases}
              colorLevel={'danger'}
              lastUpdated={dashboardData.update_date_time}
              cardTitle="Total Reported Patients"
            />
          </Grid>
          <Grid item xs>
            <DashboardCard
              count={dashboardData.global_recovered}
              colorLevel="success"
              lastUpdated={dashboardData.update_date_time}
              cardTitle="Recovered Patients"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs>
            <DashboardCard
              count={dashboardData.global_deaths}
              colorLevel={'warning'}
              lastUpdated={dashboardData.update_date_time}
              cardTitle="Reported Deaths"
            />
          </Grid>


        </Grid>
        <Grid container spacing={1}>

          <Grid item xs>
            <DashboardCard
              count={dashboardData.global_new_deaths}
              colorLevel={'info'}
              lastUpdated={dashboardData.update_date_time}
              cardTitle="Newly Reported Deaths"
            />
          </Grid>

        </Grid>
      </div>


    </React.Fragment >
  );
}

export default LocalDashboard;
