const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const secret = require('./secret');

const host = '127.0.01';
const port = 5000;

const app = express();

app.use(express.static('client/build'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongodb
    .connect("mongodb://localhost:27017/foodies-app")
    .then(db => {
        console.log("connected");

        app.get('/', (req, res, next) => {
            res.sendFile('index.html');
        });

        app.get('/recipes', (req, res, next) => {
            db
                .collection('recipes')
                .find({}).toArray()
                .then(doc => {
                    if (!doc) {
                        res.json({error: "wrong input"});
                    } else if (doc) {
                        res.json({recipes: doc});
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        })

        app.get('/recipes/recipe/:recipe_id', (req, res, next) => {
            console.log(req.params.recipe_id)
            db
                .collection('recipes')
                .findOne({
                    "_id": req.params.recipe_id
                })
                .then(doc => {
                    console.log(doc);
                    if (!doc) {
                        res.json({error: "wrong input"});
                    } else if (doc) {
                        res.json({recipes: doc});
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        })

        app.get('/recipes/recipe/:recipe_id/view', (req, res, next) => {
            console.log(req.params.recipe_id)
            db
                .collection('recipes')
                .findOne({
                    "_id": req.params.recipe_id
                })
                .then(doc => {
                    res.send("duh");
                })
                .catch(err => {
                    console.error(err);
                })
        })

        app.post('/recipes/recipe/:recipe_id', (req, res, next) => {
            console.log(req.params.recipe_id)
            db 
                .collection('recipes')
                .findOne({
                    "_id": req.params.recipe_id
                })
                .then(doc => {
                    res.send("duh");
                })
                .catch(err => {
                    console.error(err);
                })
        })

        app.get('/recipes/recipe/:recipe_id/related', (req, res, next) => {
            console.log(req.params.recipe_id)
            db
                .collection('recipes')
                .findOne({
                    "_id": req.params.recipe_id
                })
                .then(doc => {
                    res.send("duh");
                })
                .catch(err => {
                    console.error(err);
                })
        })

        app.post('/login', (req, res, next) => {
            if (req.body.name && req.body.password) {
                db
                    .collection('users')
                    .findOne({"name": req.body.name})
                    .then(doc => {
                        if (!doc) {
                            res.json({error: "wrong input"});
                        } else if (doc.name && doc.password) {
                            if (doc.password == req.body.password) {
                                res.json({result: true, name: doc.name});
                            } else {
                                res.json({error: "wrong password"});
                            }
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    })
            }

        });

        app.listen(port, () => {
            console.log("listening");
        })
    })
    .catch(err => {
        console.error(err);
    })

    // db.collection('users').findOne({     _id:
    // ObjectID("5962679e734d1d25634396d5") }, (err,res)=>{     if(err){ return
    // console.log(err);     }     console.log(res.name)     db.close(); })