import React, {Component} from 'react';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';
import SideNavigation from './components/sideNavigation';
import Footer from './components/Footer';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import LoginRoutes from "./components/LoginRoutes";

class App extends Component {


    render() {

        if (localStorage.getItem("userLogged") === "userLogged") {
            console.log("JJJJJJJJJ")
            return (

                    <div className="flexible-content">
                        <SideNavigation/>
                        <main id="content" className="p-5">
                            <Routes/>
                        </main>
                        <Footer/>
                    </div>

            );
        } else {
            console.log("KKKKKK")
            return (

                    <LoginRoutes/>

            );
        }
    }
}

export default App;
