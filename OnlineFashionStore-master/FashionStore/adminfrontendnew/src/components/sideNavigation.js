import React from 'react';
import logo from "../assets/Fashion_Log2.jpg";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {

    // console.log(this.props.match.params)

    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/dashboard" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-2"/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/item" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-2"/>
                        Item Management
                    </MDBListGroupItem>
                </NavLink>
                {
                    localStorage.getItem("Position") === "Admin" ?
                        <NavLink to={'/usermanage'} activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="user" className="mr-2"/>
                                User Management
                            </MDBListGroupItem>
                        </NavLink>
                     : ''
                }


                <NavLink to="/supplier" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-2"/>
                        Supplier Management
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/stock" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-2"/>
                        Stock Management
                    </MDBListGroupItem>
                </NavLink>

                <NavLink to="/order" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Order Management
                    </MDBListGroupItem>
                </NavLink>

                <NavLink to="/logout" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="sign-out-alt" className="mr-3"/>
                        LogOut
                    </MDBListGroupItem>
                </NavLink>

            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;
