import MyImageGallery from 'react-image-gallery';
import * as React from "react";
import  '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss'




class ImageGallery extends React.Component {

    render() {

        const images = [
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            }
        ]

        return (
            <div align="center">
            <div  style={{width:'70%'}}>
            <MyImageGallery items={images} />
            </div>
            </div>
        );
    }

}
export default ImageGallery;