import React, { Component } from 'react';
import img from '../../../images/group.JPG'

class SriLankanHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            readMore: false
        }
    }

    readMore = () => {
        this.setState({
            readMore: !this.state.readMore
        })
        if (this.state.readMore) {
            window.location.href = "#history"
        }
    }

    render() {
        return (
            <section id="history">


                <div className="card-group">

                    <div data-aos="fade-up" className="card shadow p-3 mb-5 rounded bg-base" >
                        <h3 className="card-header text-center text-white">History of Sri Lankan ASHIHARA KAIKAN KARATE.</h3>
                        <img className="card-img-top" src={require('../../../images/homepage/History of Ashihara Karate Sri Lanka.jpg')} alt="Card  cap" />
                    </div>

                    <div data-aos="fade-up" className="card shadow p-3 mb-5 bg-white rounded">

                        <div className="card-body">

                            <div className="card-text">
                                <p dir="ltr" style={{ lineHeight: '1.3800000000000001', textAlign: 'justify', marginTop: '0pt', marginBottom: '10pt' }}><span style={{ fontSize: '12pt', fontFamily: '"Times New Roman"', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap' }}>The history of our Karate Organization goes back to late 1950's. The founder of our association late Sensei D. A. Weilgama began training in Karate under three reputed foreign instructors namely Guilamo Olvera, Harry Shaeffer and Suzuki for over seven years. He was awarded the Sho Dan black belt grade and appointed as the Branch Chief for Karate in Ceylon in 1966 and was given permission to establish a branch of Japan Karate Do Kyokushin Kai Kan. By this time he was the only qualified Karate instructor in Sri Lanka appointed by any Japanese Karate Organization.</span></p>

                                {
                                    this.state.readMore && (
                                        <div>

                                            <p dir="ltr" style={{ lineHeight: '1.3800000000000001', textAlign: 'justify', marginTop: '0pt', marginBottom: '10pt' }}><span style={{ fontSize: '12pt', fontFamily: '"Times New Roman"', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap' }}>The popularity of Kyokushin Karate spread all over Sri Lanka and soon training halls (dojo) were established all over Sri Lanka (Ceylon) then. In early 1970's Sensei Weilgama was appointed as the Chief Instructor for Karate for Sri Lanka Navy, Sri Lanka Army and Special Divisions of Police.&nbsp;</span></p>
                                            <p dir="ltr" style={{ lineHeight: '1.3800000000000001', textAlign: 'justify', marginTop: '0pt', marginBottom: '10pt' }}><span style={{ fontSize: '12pt', fontFamily: '"Times New Roman"', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap' }}>Sensei Weilgama and four of his students of Sri Lanka Karate do Kyokushin Kai Kan represented Sri Lanka at the First World Open Karate Tournament held in Tokyo in 1975. He once again took a team of two members to represent the Second World Open Karate Tournament held in Tokyo in 1979.&nbsp;</span></p>
                                            <p dir="ltr" style={{ lineHeight: '1.3800000000000001', textAlign: 'justify', marginTop: '0pt', marginBottom: '10pt' }}><span style={{ fontSize: '12pt', fontFamily: '"Times New Roman"', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap' }}>Due to an untoward conspiracy that took place within the organization, Sensei Weilgama moved out of this organization and decided to give-up Karate totally. However, due to persuasions and sensible reasoning of remaining senior students, he decided to teach once again to his very loyal students the pure Karate he learnt and some very special techniques to this new group of very dedicated students.&nbsp;</span></p>
                                            <p dir="ltr" style={{ lineHeight: '1.3800000000000001', textAlign: 'justify', marginTop: '0pt', marginBottom: '10pt' }}><span style={{ fontSize: '12pt', fontFamily: '"Times New Roman"', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap' }}>Before too long Sensei Weilgama, received an invitation from Kancho, Hideyuki Ashihara, who had already established a new Karate organization called Shin Kokusai Karate Do Ashihara Kai Kan in Ehime- Ken, Japan. In the beginning of 1982, Sensei Weilgama was appointed as the Branch Chief and Chief Instructor for Ashihara Karate in Sri Lanka and a few months later he was made the Director of the South East Asian Organization of Ashihara Karate. This Karate style was to the liking of everybody, as these styles executes the defense and the offense in one movement and was more adept to real fighting, where one would not meet the opponent head-on. The popularity of this Karate style spread like wildfire and now it has many branches spread all round the world.</span></p>
                                            <p dir="ltr" style={{ lineHeight: '1.3800000000000001', textAlign: 'justify', marginTop: '0pt', marginBottom: '10pt' }}><span style={{ fontSize: '12pt', fontFamily: '"Times New Roman"', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap' }}>Sensei Weilgama could not continue for very long as he succumbed to the injuries, he sustained of a motor accident and passed away on 30th September 1984.</span></p>
                                            <p dir="ltr" style={{ lineHeight: '1.3800000000000001', textAlign: 'justify', marginTop: '0pt', marginBottom: '10pt' }}><span style={{ fontSize: '12pt', fontFamily: '"Times New Roman"', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap' }}>Apparently, Sensei Weilgama, in his bi-annual report to the New International Karate Organization - Ashihara Kai Kan submitted in July, he has named the most senior members in his organization. After the demise of Sensei Weilgama, his most senior student with 20 years of experience in Karate, and his coaching experience, Sensei D. C. M. Karunatilleke was appointed as the Sri Lanaka Branch Chief by Kancho, Hideyuki Ashihara of NIKO Ashihara Kai Kan of Japan.</span></p>
                                            <p dir="ltr" style={{ lineHeight: '1.3800000000000001', textAlign: 'justify', marginTop: '0pt', marginBottom: '10pt' }}><span style={{ fontSize: '12pt', fontFamily: '"Times New Roman"', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap' }}>This, Sri Lanka Branch of New International Karate Organization -Ashihara Kai Kan now flourishes with many students in a number of dojos mostly in the Western Province and a few dojos in other provinces. Under the leadership of Sensei D. C. M. Karunatilleke has taken part in many foreign tournaments in the past in Singapore, India and Denmark and has received many accolades. Through the study of Ashihara Karate which could be considered as the most effective karate style amongst the many other styles in the world, we thrive to develop a society of strong, energetic and a law-abiding society in Sri Lanka.&nbsp;</span></p>
                                        </div>
                                    )
                                }
                                <button onClick={this.readMore} className="btn btn-primary">{this.state.readMore ? 'Read Less' : 'Read More'}</button>
                            </div>
                        </div>

                    </div>
                </div>


            </section>
        );
    }
}

export default SriLankanHistory;