import React from 'react';
import './HeaderStyles.css';
import Avatar from 'react-avatar';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import axios from "axios";
import NavBarNotification from "./NavBarNotification";
import ReactDOM from "react-dom";


class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isLoggedIn: false,
            notificationsAvailable : true
        };
        this.available = this.available.bind(this);

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount() {
        this.getUser();
    }

    profilePopup = e => {
        window.location.replace('/student/userProfile');
    }

    logoutOnClick = e => {
        localStorage.removeItem('af_auth_token');
        this.setState({
            isLoggedIn: false,
            user: ''
        })
        window.location.replace('/')
    }

    getUser = () => {
        const jwt = localStorage.getItem('af_auth_token');
        if (!jwt) {
            this.setState({
                user: null
            });
            return;
        }

        axios({
            method: 'post',
            url: '/api/auth/getauthuser',
            headers: {
                jwt_token: jwt
            },
            data: {}

        }).then(res => {
            this.setState({
                user: res.data.user,
                isLoggedIn: true
            })

        }).catch(err => {


        })
    }
    available(){

        ReactDOM.unmountComponentAtNode(document.getElementById('notification'));

    }

    render() {
        return (

            <Navbar className="nav_styles" expand="lg" color="primary" light>
                <NavbarBrand href="/" className="navbar-brand" style={{color: 'white'}}>School Management
                    System</NavbarBrand>

                <NavbarToggler onClick={this.toggle} className="navbar-dark" style={{color: 'white'}}/>
                <Collapse isOpen={this.state.isOpen} navbar>

                    <Nav className="" navbar>

                        <NavItem>
                            <NavLink href='/lecturer/' style={{color: 'white'}}
                                     className="nav_link_styles">Instructors</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/student/' style={{color: 'white'}}
                                     className="nav_link_styles">Students</NavLink>
                        </NavItem>
                    </Nav>

                    {/*logged in state*/}
                    {this.state.isLoggedIn &&
                    <Nav className="ml-auto" navbar>


                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret style={{color: 'white'}}>
                                Logged In as {this.state.user.firstName + " " + this.state.user.lastName}
                                <Avatar style={{marginLeft: '20px'}} size="50" round={true}
                                        name={this.state.user.firstName + " " + this.state.user.lastName}
                                        src={this.state.user.profilePic}/>


                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem onClick={this.profilePopup}>
                                    Profile

                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem onClick={this.logoutOnClick}>
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavBarNotification   userType={this.state.user.userType} available={this.available}/>
                    </Nav>

                    }

                    {!this.state.isLoggedIn &&

                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/createUser" className="nav_link_styles"
                                     style={{color: 'white'}}>SignUp</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login" className="nav_link_styles" style={{color: 'white'}}>Login</NavLink>
                        </NavItem>
                    </Nav>
                    }


                </Collapse>
            </Navbar>

        );
    }
}

export default Header;
