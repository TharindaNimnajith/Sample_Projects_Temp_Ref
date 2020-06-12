import React, { Component } from 'react';
import SeniorMemberData from '../../data/FormerSeniorMembers'
import './SeniorMemberStyles.css'
import FlipCardComp from '../FlipCard/FlipCardComp';
import ModalBox from './modalbox/ModalBox';

class FormerSeniorMembers extends Component {


    constructor(props) {
        super(props);
        this.state = {
            modalOb: null,
            modalVisible: false
        }
    }

    flipCardOnClick = (ob) => {
        this.setState({
            modalOb: ob,
            modalVisible: true
        })

    }
    closeModal = () => {
        this.setState({
            modalVisible: false
        })
    }

    render() {
        return (
            <div>

                {
                    this.state.modalVisible && <ModalBox
                        img={require(`../../images/members/Former Senior members/${this.state.modalOb.number}`)}
                        closeModal={this.closeModal}
                        obj={this.state.modalOb} />
                }

                <div className="container ">

                    <div className="row row-flex">


                        {
                            SeniorMemberData.map((ob, key) => {
                                return (


                                    <div

                                        style={{ marginTop: '10px' }} key={key} className="col-md-4 col-sm-6 col-xs-12">
                                        <div className="content "
                                            onClick={() => this.flipCardOnClick(ob)}>

                                            <FlipCardComp
                                                img={require(`../../images/members/Former Senior members/${ob.number}`)}
                                                path="../../images/members/Former Senior members"
                                                details={ob} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        );
    }
}

export default FormerSeniorMembers;