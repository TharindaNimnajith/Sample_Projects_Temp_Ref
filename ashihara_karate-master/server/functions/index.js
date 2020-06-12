//index.js

const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');
const cors = require('cors');

app.use(cors({ origin: true }));

const {
    getAllNews,
    postOneNews,
    deleteNews,
    editNews,
    getSingleNews
} = require('./APIs/news')

const {
    loginUser,
    signUpUser,
    uploadProfilePhoto
} = require('./APIs/users')


app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/user/image', auth, uploadProfilePhoto);

app.get('/news', getAllNews);
app.post('/news', auth, postOneNews);
app.delete('/news/:newsId', auth, deleteNews);
app.put('/news/:newsId', auth, editNews);
app.get('/news/:newsId', getSingleNews);



exports.api = functions.https.onRequest(app);