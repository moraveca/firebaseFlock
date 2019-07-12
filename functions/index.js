const Firestore = require('@google-cloud/firestore');
const PROJECTID = 'flock-51279';
const COLLECTION_NAME = 'cloud-functions-firestore';
const firestore = new Firestore({
    projectId: PROJECTID,
    timestampsInSnapshots: true,
});

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Add middleware to authenticate requests
// app.use(myMiddleware);

// build multiple CRUD interfaces:
app.get('/userphoto/:userid', (req, res) => {

    let photoURL = "";

    return firestore.collection("users")
        .doc(req.params.userid)
        .get()
        .then(doc => {
            if (!(doc && doc.exists)) {
                return res.status(404).send({ error: 'Unable to find the document' });
            }
            console.log("Document data:", doc.data());
            photoURL = doc.data().pictureURL

            return res.send({
                photoURL: photoURL,
                message: "User Photo URL Retrieved!"
            })
        }).catch(err => {
            console.error(err);
            return res.status(404).send({ error: 'Unable to retrieve the document' });
        });
});

app.post('/userphoto/:userid', (req, res) => {

    const pictureURL = (req.body.pictureURL) || {};

    return firestore.collection("users")
        .doc(req.params.userid)
        .update({ "pictureURL": pictureURL })
        .then(doc => {
            return res.status(200).send(doc);
        }).catch(err => {
            console.error(err);
            return res.status(404).send({ error: 'unable to store', err });
        });
})

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);
