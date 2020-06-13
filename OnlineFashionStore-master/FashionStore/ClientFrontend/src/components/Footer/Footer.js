import  React,{Component} from 'react';
import {MDBCol, MDBContainer, MDBFooter, MDBRow} from "mdbreact";
import poweredBy from '../../asstes/img/ipg2.png'

export class Footer extends Component{

    render(){
        return(
                    <MDBFooter color='blue' className='font-small pt-4 mt-4'>
                        <MDBContainer fluid className='text-center text-md-left'>
                            <MDBRow>
                                <MDBCol md='6'>
                                    {/*<h5 className='title'>Powered By</h5>*/}
                                    {/*<img src={poweredBy} style={{width: '450px'}}/>*/}
                                </MDBCol>
                                {/*<MDBCol md='6'>*/}
                                    {/*<h5 className='title'>Links</h5>*/}
                                    {/*<ul>*/}
                                        {/*<li className='list-unstyled'>*/}
                                            {/*<a href='#!'>Link 1</a>*/}
                                        {/*</li>*/}
                                        {/*<li className='list-unstyled'>*/}
                                            {/*<a href='#!'>Link 2</a>*/}
                                        {/*</li>*/}
                                        {/*<li className='list-unstyled'>*/}
                                            {/*<a href='#!'>Link 3</a>*/}
                                        {/*</li>*/}
                                        {/*<li className='list-unstyled'>*/}
                                            {/*<a href='#!'>Link 4</a>*/}
                                        {/*</li>*/}
                                    {/*</ul>*/}
                                {/*</MDBCol>*/}
                            </MDBRow>
                        </MDBContainer>
                        <div className='footer-copyright text-center py-3'>
                            <MDBContainer fluid>
                                &copy; {new Date().getFullYear()} Copyright:{' '}
                                JAVATECH Solutions
                            </MDBContainer>
                        </div>
                    </MDBFooter>

        );
    }
}
