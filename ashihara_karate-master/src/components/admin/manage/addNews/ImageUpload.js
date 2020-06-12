import { storage } from '../../../../firebase/FirebaseInit'

const uploadImages = async (topic, body, images) => {

    return new Promise((resolve, reject) => {
        let Promises = [];

        Array.from(images).map(im => {
            Promises.push(SingleFileUpload(im));
        })

        Promise.all(Promises).then(results => {
            resolve(results);
        })
    })
}


const SingleFileUpload = (im) => {

    return new Promise((resolve, reject) => {
        let name = Date.now().toString() + im.name
        const uploadTask = storage.ref(`images/${name}`).put(im);
        uploadTask.on('state_changed',
            (snapshot) => {

            },
            (error) => {
                console.log(error)
            },
            () => {
                storage.ref('images').child(name).getDownloadURL().then(url => {
                    resolve(url);
                })
            })
    })

}

export default uploadImages;