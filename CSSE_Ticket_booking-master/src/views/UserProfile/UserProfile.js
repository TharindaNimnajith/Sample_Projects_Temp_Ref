import React from "react";
// @material-ui/core components
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import axios from 'axios';
import avatar from "assets/img/faces/marc.jpg";
import HistoryTable from "../../components/HistoryTable/HistoryTable";
import InputCreditCard from "../../components/CreditCard/InputCreditCard";


class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showUpdate: false,
            user: null,
            showRecharge: false
        }
    }

    componentDidMount() {
        this.getUser();

    }

    componentWillMount() {
        this.getUser();

    }

    onRechargeShow = () => {
        this.setState({
            showRecharge: !this.state.showRecharge
        })

    };

    showUpdateProfile = () => {

        this.setState({
            showUpdate: !this.state.showUpdate
        });
    };

    getSmartCard = () => {
        axios({
            method: 'get',
            url: 'http://localhost:8081/api/v1/smartCards/userId/' + this.state.user.id,

        }).then(res => {

            console.log(res.data)
            this.setState({
                smartCard: res.data
            });

        }).catch(err => {
            console.log(err);
            alert(err)

        })
    };

    getUser = () => {
        const jwt = localStorage.getItem('csse_we_32');
        if (!jwt) {
            this.setState({
                user: null
            });
            return;
        }

        axios({
            method: 'post',
            url: 'http://localhost:8081/api/v1/users/getUserByToken',
            header: {
                authorization: 'Bearer ' + jwt,
            },
            data: {
                "jwttoken": jwt.toString(),
            }

        }).then(res => {

            this.setState({
                user: res.data,
                isLoggedIn: true
            });

        }).catch(err => {
            console.log(err);
            window.location.replace('/login');

        }).finally(a => {
            if (this.state.user.id) {
                this.onRefreshBalance();
            }
        })
    };

    onRefreshBalance = () => {
        this.getSmartCard();
    };


    render() {

        let historyTableColumns = [
            {title: 'Date/Time', field: 'date'},
            {title: 'From', field: 'from'},
            {title: 'To', field: 'to'},
            {title: 'Bus Number', field: 'bus'},
            {title: 'Price', field: 'price', type: 'numeric'},
            {title: 'Buttons', field: 'btn', render: rowData => <input type="button" value={'Button'}/>}
        ];
        let historyTableData = [
            {date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price: 'Rs.452.30'},
            {date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price: 'Rs.452.30'},
            {date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price: 'Rs.452.30'},
            {date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price: 'Rs.452.30'},
            {date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price: 'Rs.452.30'},
            {date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price: 'Rs.452.30'},
            {date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price: 'Rs.452.30'},
            {date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price: 'Rs.452.30'},
            {date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price: 'Rs.452.30'},
            {date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price: 'Rs.452.30'},
            {date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price: 'Rs.452.30'},
            {date: '2019-09-31 11.00AM', from: 'Kaduwela', to: 'Malabe', bus: 'ND-3125', price: 'Rs.452.30'},

        ];


        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={8}>
                        {this.state.showUpdate && (
                            <Card>
                                <CardHeader color="primary">
                                    <h2>Edit Profile</h2>
                                    <p>Complete your profile</p>
                                </CardHeader>
                                <CardBody>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={5}>
                                            <CustomInput
                                                labelText="Full Name"
                                                id="fullName"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    value: this.state.user.userFullName,
                                                }}
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <CustomInput
                                                labelText="Username"
                                                id="username"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    value: this.state.user.username,
                                                }}
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={4}>
                                            <CustomInput
                                                labelText="Email address"
                                                id="email"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    value: this.state.user.email,
                                                }}
                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={5}>
                                            <CustomInput
                                                labelText="National ID Card Number"
                                                id="nic"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    value: this.state.user.nic,
                                                }}
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <CustomInput
                                                labelText="Contact Number"
                                                id="contact"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    value: this.state.user.contactNo,
                                                }}
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={4}>
                                            <CustomInput
                                                labelText="Type"
                                                id="type"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    value: 'Passenger',
                                                }}
                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={4}>
                                            <CustomInput
                                                labelText="Card Number"
                                                id="creditCardNo"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    value: this.state.user.creditCardNo,
                                                }}
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={4}>
                                            <CustomInput
                                                labelText="Expire Date"
                                                id="expire"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    value: this.state.user.expireDate,
                                                }}
                                            />
                                        </GridItem>

                                    </GridContainer>

                                </CardBody>
                                <CardFooter>
                                    <Button color="primary">Update Profile</Button>
                                </CardFooter>
                            </Card>
                        )}
                        <Card>
                            <CardBody>
                                <HistoryTable columns={historyTableColumns} data={historyTableData}/>
                            </CardBody>
                        </Card>
                        {this.state.showRecharge && (
                            <Card>
                                <CardBody>
                                    <InputCreditCard user={this.state.user} card={this.state.smartCard} updatebalance={this.updateRemainingAmount}/>
                                </CardBody>
                            </Card>
                        )}


                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card profile>
                            <CardAvatar profile>
                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                    <img src={avatar} alt="ABC"/>
                                </a>
                            </CardAvatar>
                            <CardBody profile>
                                <h6>PASSENGER</h6>
                                <h2>{this.state.user != null && this.state.user.userFullName}</h2>

                                <Button color="primary" round onClick={() => {
                                    this.showUpdateProfile();
                                }}>
                                    {this.state.showUpdate ? 'Hide Profile update' : 'Update Profile'}
                                </Button>
                            </CardBody>
                        </Card>
                        <Card profile>
                            <CardBody profile>
                                <h2>Account Balance</h2>
                                <h1 style={{
                                    color: "red",
                                    fontStyle: "strong"
                                }}>Rs.{this.state.smartCard != null ? this.state.smartCard.amount : '0'}.00</h1>
                                <Button color="primary" round onClick={() => {
                                    this.onRefreshBalance();
                                }}>
                                    Refresh Balance
                                </Button>
                                <br/>
                                <Button color="primary" round onClick={() => {
                                    this.onRechargeShow();
                                }}>
                                    {this.state.showRecharge ? 'Hide Recharge Tab' : 'Recharge Account'}
                                </Button>
                            </CardBody>
                        </Card>

                    </GridItem>
                </GridContainer>
            </div>
        );
    }

    updateRemainingAmount = (smCard) => {
        console.log('here',smCard)
        this.setState({
            smartCard : smCard
        })
    }
}

export default UserProfile;

// export default function UserProfile() {
//   const classes = useStyles();
//
// }
