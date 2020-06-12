const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const path = require('path');
// const crypto = require('crypto');
// const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');
//const methodOverride = require('method-override');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
//app.use(methodOverride('_method'));
//app.set('view engine', 'ejs');

const uri = process.env.ATLAS_URI;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB database connection established successfully'))
    .catch(err => console.log(err));

// let gfs;
//
// const connection = mongoose.connection;
// connection.once('open', () => {
//     gfs = Grid(connection.db, mongoose.mongo);
//     gfs.collection('uploads');
// });

// const storage = new GridFsStorage({
//     url: uri,
//     file: (req, file) => {
//         return new Promise((resolve, reject) => {
//             crypto.randomBytes(16, (err, buf) => {
//                 if (err) {
//                     return reject(err);
//                 }
//                 const filename = buf.toString('hex') + path.extname(file.originalname);
//                 const fileInfo = {
//                     filename: filename,
//                     bucketName: 'uploads'
//                 };
//                 resolve(fileInfo);
//             });
//         });
//     }
// });
// const upload = multer({ storage });
//
// app.post('/images/add', upload.single('file'), (req, res) => {
//     res.json({file: req.file});
// });
//
// app.get('/images', (req, res) => {
//     gfs.files.find().toArray((err, files) => {
//         if (!files || files.length === 0){
//             return res.status(404).json({message: 'no files exist'});
//         } else {
//             return res.json(files);
//         }
//     });
// });
//
// app.get('/images/:filename', (req, res) => {
//     gfs.files.findOne({filename: req.params.filename}, (err, file) => {
//         if (!file || file.length === 0){
//             return res.status(404).json({message:'no file exists'});
//          } //else {
//             //return res.json(file);
//         //     if(file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
//         //         const readStream = gfs.createReadStream(file.filename);
//         //         return readStream.pipe(res);
//         //     } else {
//         //         return res.json('not an image')
//         //     }
//         // }
//         if(file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
//             const readStream = gfs.createReadStream(file.filename);
//             readStream.pipe(res);
//         } else {
//             res.status(404).json({err: 'not an image'})
//         }
//
//     })
// });
//..
const productsRouter = require('./routes/store-manager/products');
const imagesRouter = require('./routes/store-manager/images');
const cartItemsRouter = require('./routes/user/cartItems');
const wishlistItemsRouter = require('./routes/wishlist');
const finalPaymentRouter = require('./routes/finalPayment');
const creditCardPaymentRouter = require('./routes/user/creditCardPayment');
const cashOnDeliveryRouter = require('./routes/user/cashOnDelivery');
const userDetailsRouter = require('./routes/admin/userDetails');
const categoriesRouter = require('./routes/admin/categories');
const productDetailsRouter = require('./routes/user/productDetails');

app.use('/creditCardPayment', creditCardPaymentRouter);
app.use('/cashOnDelivery', cashOnDeliveryRouter);
app.use('/products', productsRouter);
app.use('/images', imagesRouter);
app.use('/cartItems', cartItemsRouter);
app.use('/wishlistItems', wishlistItemsRouter);
app.use('/finalPayment', finalPaymentRouter);
app.use('/userDetails', userDetailsRouter);
app.use('/categories', categoriesRouter);
app.use('/productDetails', productDetailsRouter);

app.listen(port, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Server is running on port: ' + port);
});