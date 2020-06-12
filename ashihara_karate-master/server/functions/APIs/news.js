const { db } = require('../util/admin');

exports.getAllNews = (request, response) => {

    db
        .collection('news')
        .orderBy('created', 'desc')
        .get()
        .then((data) => {
            let news = [];
            data.forEach((doc) => {
                news.push({
                    id: doc.id,
                    topic: doc.data().topic,
                    body: doc.data().body,
                    created: doc.data().created,
                    images: doc.data().images
                });
            });
            return response.json(news);
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};

exports.postOneNews = (request, response) => {
    if (request.body.body.trim() === '') {
        return response.status(400).json({ body: 'Must not be empty' });
    }

    if (request.body.topic.trim() === '') {
        return response.status(400).json({ title: 'Must not be topic' });
    }

    console.log(request.body)
    const newNewsItem = {
        topic: request.body.topic,
        body: request.body.body,
        images: request.body.images,
        created: new Date().toISOString()
    }

    db
        .collection('news')
        .add(newNewsItem)
        .then((doc) => {
            const responsenewNewsItem = newNewsItem;
            responsenewNewsItem.id = doc.id;
            return response.json(responsenewNewsItem);
        })
        .catch((err) => {
            response.status(500).json({ error: 'Something went wrong' });
            console.error(err);
        });
};

exports.deleteNews = (request, response) => {
    const document = db.doc(`/news/${request.params.newsId}`);
    document
        .get()
        .then((doc) => {
            if (!doc.exists) {
                return response.status(404).json({ error: 'News not found' })
            }
            return document.delete();
        })
        .then(() => {
            response.json({ message: 'Delete successfull' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};

exports.editNews = (request, response) => {
    if (request.body.todoId || request.body.createdAt) {
        response.status(403).json({ message: 'Not allowed to edit' });
    }
    let document = db.collection('news').doc(`${request.params.newsId}`);
    document.update(request.body)
        .then(() => {
            response.json({ message: 'Updated successfully' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({
                error: err.code
            });
        });
};

exports.getSingleNews = (request, response) => {


    let id = request.params.newsId;
    db
        .collection('news')
        .orderBy('created', 'desc')
        .get()
        .then((data) => {
            let news = [];
            data.forEach((doc) => {

                if (id === doc.id) {
                    news.push({
                        id: doc.id,
                        topic: doc.data().topic,
                        body: doc.data().body,
                        created: doc.data().created,
                        images: doc.data().images
                    });
                }

            });
            if (news.length === 1) {
                return response.json(news[0]);
            } else {
                return response.status(500).json({ error: 'Record not found' });
            }

        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};