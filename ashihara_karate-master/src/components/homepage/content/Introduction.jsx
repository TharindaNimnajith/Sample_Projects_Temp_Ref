import React, { Component } from 'react';
import img from '../../../images/maxresdefault.jpg'
import sabaki from './images/sabaki.gif'
import sabak2 from './images/sabaki2.gif'


class Introduction extends Component {

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
            window.location.href = "#introduction"
        }
    }

    render() {
        return (
            <section id="introduction">
                <br /><br /><br /><br />
                <div className="card-group">

                    <div data-aos="fade-up" className="card shadow p-3 mb-5 rounded bg-base" >
                        <h3 className="card-header text-center text-white">Introduction</h3>
                        <img className="card-img-top" src={require('../../../images/homepage/Introduction.jpg')} alt="card" />
                    </div>

                    <div data-aos="fade-up" className="card shadow p-3 mb-5 bg-white rounded">

                        <div className="card-body">

                            <div className="card-text">

                                <p style={{ marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify' }}><strong><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white' }}>Ashihara kaikan</span></strong><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white' }}>&nbsp;is a modern&nbsp;</span><a href="https://en.wikipedia.org/wiki/Full_contact_karate" title="Full contact karate"><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white', textDecoration: 'none' }}>full contact</span></a><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white' }}>&nbsp;street&nbsp;</span><a href="https://en.wikipedia.org/wiki/Karate" title="Karate"><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white', textDecoration: 'none' }}>karate</span></a><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white' }}>&nbsp;developed from&nbsp;</span><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black' }}><a href="https://en.wikipedia.org/wiki/Kyokushin" title="Kyokushin"><span style={{ color: 'black', background: 'white', textDecoration: 'none' }}>Kyokushin</span></a><span style={{ background: 'white' }}>&nbsp;karate by&nbsp;</span></span><a href="https://en.wikipedia.org/wiki/Hideyuki_Ashihara" title="Hideyuki Ashihara"><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white', textDecoration: 'none' }}>Hideyuki Ashihara</span></a><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white' }}>&nbsp;with influences from various martial arts including&nbsp;</span><a href="https://en.wikipedia.org/wiki/Muay_Thai" title="Muay Thai"><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white', textDecoration: 'none' }}>Muay Thai</span></a><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white' }}>,&nbsp;</span><a href="https://en.wikipedia.org/wiki/Pankration" title="Pankration"><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white', textDecoration: 'none' }}>Pankration</span></a><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white' }}>, and&nbsp;</span><a href="https://en.wikipedia.org/wiki/Jujutsu" title="Jujutsu"><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white', textDecoration: 'none' }}>Jujutsu</span></a><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black', background: 'white' }}>&nbsp;with an emphasis on <em><a href="https://en.wikipedia.org/wiki/Tai_sabaki" title="Tai sabaki"><span style={{ color: 'black', textDecoration: 'none' }}>Sabaki</span></a></em>. The style is revolutionary as it is solely focused on practical application in a real fight including multiple attackers, a street style, with all techniques taught effective in a real fight against an attacker or multiple attackers of any size. Sabaki is using footwork and techniques to turn an opponent's power and momentum against them and to reposition oneself to the opponent's "blind" spot.</span></p>
                                <div style={{ marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}>
                                    <ul style={{ marginBottom: '0in', listStyleType: 'disc' }}>
                                        <li style={{ marginTop: '0in', marginRight: '0in', marginBottom: '8.0pt', marginLeft: '0in', lineHeight: '107%', fontSize: '15px', fontFamily: '"Calibri",sans-serif' }}><strong><span style={{ fontSize: '12.0pt' }}>Sabaki</span></strong></li>
                                    </ul>
                                </div>

                                {
                                    this.state.readMore && (
                                        <div>
                                            <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify', background: 'white' }}><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black' }}>Sabaki is a difficult concept to translate from Japanese. Broadly speaking, Sabaki refers to movement, often involving a concept of control, sometimes implying preparation for a subsequent movement. For example, Sabaki can be used in reference to be training a horse. The rider performs certain movements in an effort to control the animal, in order to make the animal behave as he/she wants it to.</span></p>
                                            <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify', textIndent: '.5in', background: 'white' }}><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black' }}>Kancho Hideyuki Ashihara has adopted the word Sabaki to epitomize the essence of this style of Karate. In Ashihara Karate, Sabaki describes the movement made by a defender stepping out of line of an attack, into a position from which he/she can launch a counterattack. This controlled movement, in preparation for a subsequent advance, is the basis of the strategy of Ashihara Karate: the combination of defense and offense into one ... SABAKI.</span></p>

                                            <br />
                                            <img src={sabaki} width="90%" alt="Sabaki 1" />
                                            <br />
                                            <img src={sabak2} width="90%" alt="sabaki 2" />
                                            <br /><br />
                                            <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify', textIndent: '.5in', background: 'white' }}><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black' }}>The essence of Ashihara Karate is contained within Sabaki, the method of fighting that combines defense and offense into one. In creating Sabaki, Kancho Ashihara considered the various functions of the human body, and how to maximize the body performance in order to control an opponent without being punched or kicked. For example, there are directions of movement that the human body finds easy as well as awkward. If your opponent’s approach head on, it needs a great deal of power to force them back, especially if they are a lot stronger. If instead, you step to his side and pull him onward, he will carry on under his own steam. At that point, if you apply a little force from the outside, you can change the direction of his momentum and upset his balance. By using your opponent’s force against them, you can see how someone who is not as strong can fell a much larger opponent. If this principle can be understood and mastered, then karate becomes something which anyone can learn.</span></p>
                                            <p style={{ marginTop: '6.0pt', marginRight: '0in', marginBottom: '6.0pt', marginLeft: '0in', lineHeight: '150%', fontSize: '15px', fontFamily: '"Calibri",sans-serif', textAlign: 'justify', textIndent: '.5in', background: 'white' }}><span style={{ fontSize: '16px', lineHeight: '150%', fontFamily: '"Times New Roman",serif', color: 'black' }}>Two important concepts of Sabaki are fight control and positioning.</span></p>
                                            <ul style={{ listStyleType: 'disc', marginLeft: '0in' }}>
                                                <li><span style={{ lineHeight: '150%', fontFamily: '"Times New Roman",serif', fontSize: '12.0pt', color: 'black' }}>Positioning - refers to the ability to take up a position at the opponent’s side or back (blind spot) from which you can easily attack without being attacked yourself.</span></li>
                                                <li><span style={{ lineHeight: '150%', fontFamily: '"Times New Roman",serif', fontSize: '12.0pt', color: 'black' }}>Fight control - is a term that represent that which Ashihara Karate stands for, it involve a revolutionary, scientific, logical and safe type of self-defense training; specifically, it refers to the ability to take up a safe and strong position from which to contain your opponent and launch a counter-attack.</span></li>
                                            </ul>
                                        </div>
                                    )
                                }

                            </div>
                            <button onClick={this.readMore} className="btn btn-primary">{this.state.readMore ? 'Read Less' : 'Read More'}</button>
                        </div>
                    </div>
                </div>



            </section>
        );
    }
}

export default Introduction;