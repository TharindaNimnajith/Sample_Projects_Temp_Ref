import React, {Component} from 'react';
import './App.css';
import './Components/Nav/Navigator.css'

import Header from './Components/Containers/Header';
import MenuCardBar from './Components/MenuCard/MenuCardBar';
import ImageWithTextBar from './Components/Containers/ImageWithTextBar';
import ImgaeGallery from './Components/ImageGallery/ImageGallery';
import GridLayout from './Components/Grid/GridLayout';
import ParalaxContainer from './Components/ParalaxContainer/ParalaxContainer';
import scrollToComponent from 'react-scroll-to-component';
import BackToTopButton from './Components/BackToTopButton/BackToTopButton';
import Footer from './Components/Footer/FooterPage';

class App extends Component {


    // componentDidMount() {
    //     scrollToComponent(this.Blue, {offset: 0, align: 'middle', duration: 500, ease: 'inCirc'});
    // }


    render() {
        return (

            <div className="App">
                <BackToTopButton/>


                <div style={{width:'100%'}}>
                    <ul className="topnavBar">

                        <li><a className="siteName" href="#news" onClick={() => scrollToComponent(this.Violet, {
                            offset: 0,
                            align: 'top',
                            duration: 1500
                        })}> Travellers' HUB</a></li>
                        <li><a href="#home">Home</a></li>

                        <li><a href="#news" onClick={() => scrollToComponent(this.Indigo, {
                            offset: 0,
                            align: 'top',
                            duration: 1500
                        })}>Travel Plans</a></li>


                        <li><a href="#contact" onClick={() => scrollToComponent(this.Blue, {
                            offset: 0,
                            align: 'top',
                            duration: 1500
                        })}>Places to Visit</a></li>


                        <li><a href="#about" onClick={() => scrollToComponent(this.Red, {
                            offset: 0,
                            align: 'top',
                            duration: 1500
                        })}>Contact Us</a></li>

                    </ul>
                </div>

                <br/><br/><br/><br/>

                {/*Slide Show */}
                <section className='violet' ref={(section) => {
                    this.Violet = section;
                }}>
                    <Header/>
                </section>

                {/*Menu Card*/}
                <section className='indigo' ref={(section) => {
                    this.Indigo = section;
                }}>
                    <MenuCardBar/>
                </section>
                <ImageWithTextBar/>


                <ImgaeGallery/>

                <section className='blue' ref={(section) => {
                    this.Blue = section;
                }}>
                    <GridLayout/>
                </section>

                <ParalaxContainer/>

                <section className='red' ref={(section) => {
                    this.Red = section;
                }}>
                    <Footer/>
                </section>
            </div>
        );
    }

}

export default App;
