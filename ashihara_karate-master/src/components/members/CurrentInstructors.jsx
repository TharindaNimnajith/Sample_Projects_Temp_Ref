import React, { Component } from 'react';
import CurrentInstructorData from '../../data/CurrentInstructors'
import './SeniorMemberStyles.css'
import FlipCardComp from '../FlipCard/FlipCardComp';
import ModalBox from './modalbox/ModalBox';

class CurrentInstructors extends Component {


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
                        closeModal={this.closeModal}
                        obj={this.state.modalOb}
                        img={require(`../../images/members/Current Instructors/${this.state.modalOb.number}`)}
                    />
                }

                <div className="container ">

                    <div className="row row-flex">


                        {
                            CurrentInstructorData.map((ob, key) => {
                                return (
                                    <div data-aos="fade-up"

                                        style={{ marginTop: '10px' }} key={key} className="col-md-4 col-sm-6 col-xs-12">
                                        <div className="content "
                                            onClick={() => this.flipCardOnClick(ob)}>

                                            <FlipCardComp
                                                path="../../images/members/Senior members"
                                                details={ob}
                                                img={require(`../../images/members/Current Instructors/${ob.number}`)}
                                            />
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

export default CurrentInstructors;