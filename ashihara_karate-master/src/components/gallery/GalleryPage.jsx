import React, { Component } from 'react';
import ImageGallery from './ImageGallery';



const importAll = (r) => {
    return r.keys().map(r);
}
const exhibitions = importAll(require.context(`../../images/gallery/Exhibitions`, false, /\.(png|jpe?g|svg)$/));
const Kagamibiraki = importAll(require.context(`../../images/gallery/Kagamibiraki`, false, /\.(png|jpe?g|svg)$/));
const Tournaments = importAll(require.context(`../../images/gallery/Tournaments`, false, /\.(png|jpe?g|svg)$/));
const Training = importAll(require.context(`../../images/gallery/Training`, false, /\.(png|jpe?g|svg)$/));
const Other = importAll(require.context(`../../images/gallery/Other`, false, /\.(png|jpe?g|svg)$/));



class GalleryPage extends Component {
    render() {
        return (
            <div>
                <br /><br />

                <GalleryNav/>
                <ImageGallery topic="Exhibitions" images={exhibitions} />
                <GalleryNav/>
                <ImageGallery topic="Kagamibiraki" images={Kagamibiraki} />
                <GalleryNav/>
                <ImageGallery topic="Tournaments" images={Tournaments} />
                <GalleryNav/>
                <ImageGallery topic="Training" images={Training} />
                <GalleryNav/>
                <ImageGallery topic="Other" images={Other} />
            </div>
        );
    }
}

class GalleryNav extends React.Component {
    render() {
        return (
            <div className="container">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link txt-base" href="/gallery#Exhibitions">Exhibitions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link txt-base" href="/gallery#Kagamibiraki">Kagamibiraki</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link txt-base" href="/gallery#Tournaments">Tournaments</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link txt-base" href="/gallery#Training">Training</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link txt-base" href="/gallery#Other">Other</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default GalleryPage;