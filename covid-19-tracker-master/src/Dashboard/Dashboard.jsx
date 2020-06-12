import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// My Stuff
import LocalDashboard from './LocalDashboard';
import LocalDashboard2 from './LocalDashboard2';
import HospitalList from '../Hospital/HospitalList';
import Navbar from '../shared/Navigation/Navbar';
import CountryComp from '../OtherCountries/CountryComp';
import GraphComp from '../Graphs/GraphComp'
import OtherDashboardItems from './OtherDashboardItems'
import NewsPage from '../other/NewsPage'
import SriLankaMap from '../Maps/SriLankaMap'
import DataComparison from '../Graphs/DataComparison'
import {
  Container,
  Paper,
  LinearProgress
} from '@material-ui/core';

function Dashboard() {
  const [stats, setStats] = useState({ dashboard: {}, hospitalData: [] });

  useEffect(() => {
    fetch('https://hpb.health.gov.lk/api/get-current-statistical')
      .then(response => response.json())
      .then(response => {
        if (response.success === true) {
          setStats({
            dashboard: response.data,
            hospitalData: response.data.hospital_data
          });
        }
      })
      .catch(() => console.log('Something went wrong...'));
  }, []);

  const localDasboard = () => {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col">
              <div data-toggle="tooltip" data-placement="top" title={'a'} className={`small-box bg-white   `}>
                <div className="inner text-center">
                  <h6 className="text-center">Source</h6>
                  <img className="img-fluid" src="https://hpb.health.gov.lk/assets/img/logo.png" alt="health ministry" />
                </div>

                <p className="small-box-footer"><a href="https://hpb.health.gov.lk/en/api-documentation">https://hpb.health.gov.lk/en/api-documentation</a> </p>
              </div>
            </div>
          </div>
        </div>
        <Paper style={{ marginTop: 20 }} />
        <LocalDashboard dashboardData={stats.dashboard} type="Sri Lanka" image="https://3.bp.blogspot.com/-ORDc3ICb18o/TeMJkpmgvxI/AAAAAAAABHM/VcIfJpCnwGg/s1600/Animated+Flag+of+Srilanka+Srilankan+Flag+Animation.gif" />
        <Paper style={{ marginTop: 20 }} />
        <LocalDashboard2 dashboardData={stats.dashboard} type="Global" image="https://i.gifer.com/W31X.gif" />
        <Paper style={{ marginTop: 20 }} />
        <OtherDashboardItems />
        <div>
          <div className="row">
            <div className="col">
              <div data-toggle="tooltip" data-placement="top" title={'a'} className={`small-box bg-dark   `}>
                <div className="inner text-center">
                  <h6 className="text-center">
                    Made with &nbsp;
                    <span style={{ color: '#e25555' }}>&#9829;</span>
                     &nbsp; by <a href="https://gihanrcg.github.io/" >Gihan Siriwardhana</a></h6>
                </div>

                <p className="small-box-footer"><a href="https://hpb.health.gov.lk/en/api-documentation">https://hpb.health.gov.lk/en/api-documentation</a> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Container style={{ marginTop: 30 }}>
          <Switch>
            <Route path="/hospitaldetails">

              <div className="row">
                <div className="col">
                  <div data-toggle="tooltip" data-placement="top" title={'a'} className={`small-box bg-white   `}>
                    <div className="inner text-center">
                      <h2 className="text-center">Hospital Patient Details</h2>

                      <h6 className="text-center">Source</h6>
                      <img className="img-fluid" src="https://hpb.health.gov.lk/assets/img/logo.png" alt="Health ministry" />
                      <br /><br />
                      <h6 className="text-center">{`Last updated: ${stats.dashboard.update_date_time}`}</h6>
                    </div>
                  </div>
                </div>
              </div>

              <HospitalList tableData={stats.hospitalData} />
            </Route>
            <Route path="/other">
              <CountryComp />
            </Route>
            <Route path="/graph">
              <GraphComp />
            </Route>
            <Route path="/news">
              <NewsPage />
            </Route>
            <Route path="/map">
              <SriLankaMap />
            </Route>
            <Route path="/compare">
              <DataComparison />
            </Route>
            <Route path="/">
              {stats.hospitalData.length > 0 ? (
                localDasboard()
              ) : (
                  <LinearProgress variant="query" />
                )}
            </Route>

          </Switch>
        </Container>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Dashboard;
