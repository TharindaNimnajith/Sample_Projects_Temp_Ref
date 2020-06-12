import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import SiteLoading from './components/siteloading/SiteLoading';
import Header from './components/header/Header';
import HomePage from './components/homepage/HomePage';

import AOS from 'aos'

import SeniorMembers from './components/members/SeniorMembers';
import FormerSeniorMembers from './components/members/FormarSeniorMembers';
import CurrentInstructors from './components/members/CurrentInstructors';
import Footer from './components/footer/Footer';
import NewsFeed from './components/newsfeed/NewsFeed';
import AdminPanel from './components/admin/AdminPanel';
import Login from './components/admin/login/Login';
import CompleteNews from './components/newsfeed/CompleteNews';
import GalleryPage from './components/gallery/GalleryPage';

class App extends React.Component {

  componentDidMount() {
    AOS.init();
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }



  render() {
    if (this.state.loading) {
      return <SiteLoading />
    } else {
      return (
        <div className="App">
          <Header />
          <div style={{ marginTop: '65px' }}>
            <BrowserRouter>
              <Switch>
                <Route path={"/"} exact component={HomePage} />
                <Route path={"/gallery"} exact component={GalleryPage} />
                <Route path={"/coaches"} exact component={CurrentInstructors} />
                <Route path={"/seniormembers"} exact component={SeniorMembers} />
                <Route path={"/formerseniormembers"} exact component={FormerSeniorMembers} />
                <Route path={"/news"} exact component={NewsFeed} />
                <Route path={"/n/:id"} component={CompleteNews} />

                <Route path={"/admin"} exact component={AdminPanel} />
                <Route path={"/admin-login"} exact component={Login} />
              </Switch>
            </BrowserRouter>
            <Footer />
          </div>

        </div>
      );
    }

  }
}

export default App;
