import React, { Component } from 'react';
import SeniorMemberData from '../../data/SeniorMembers'
import './SeniorMemberStyles.css'
import FlipCardComp from '../FlipCard/FlipCardComp';
import ModalBox from './modalbox/ModalBox';

class SeniorMembers extends Component {


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
                        img={require(`../../images/members/Senior members/${this.state.modalOb.number}`)}
                        />
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
                                                path="../../images/members/Senior members"
                                                details={ob}
                                                img={require(`../../images/members/Senior members/${ob.number}`)}
                                                />
                                        </div>
                                    </div>



                                )
                            })
                        }
                    </div>
                </div>
            </div>


            // <div className="xcontainer">
            //     <div className="xrow row-flex">
            //         {
            //             SeniorMemberData.map((data, key) => {
            //                 return (
            //                     <div style={{ marginTop: '10px' }} key={key} className="xcol-md-4 col-sm-6 col-xs-12">
            //                         <div className="card">
            //                             <div className="img-wrap">
            //                                 <img src={require(`../../ images / members / Senior members / ${ data.number }`)} className="card-img-top" alt="..." />
            //                             </div>

            //                             <div className="card-body">
            //                                 <h5 className="card-title text-center">{data.name}</h5>

            //                                 <ol type="a">
            //                                     {data.content.map((list, key1) => {
            //                                         return (
            //                                             <li>{list}</li>
            //                                         )
            //                                     })}
            //                                 </ol>

            //                             </div>
            //                         </div>
            //                     </div>



            //                 )
            //             })
            //         }
            //     </div>
            // </div>


        );
    }
}

export default SeniorMembers;