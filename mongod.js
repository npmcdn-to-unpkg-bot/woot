var mongodb = require('mongodb').MongoClient;

var Mongod = function(url, col) {
    var mongoUrl = url,
        db,
        collection;

    this.connect = function() {
        mongodb.connect(mongoUrl, function(err, mdb) {
            if(err) new Error('cannot connect to mongodb');
            db = mdb;
            collection = db.collection(col);
            console.log('connected to mongo');
            console.log('collection set to', col);
        });
    }

    this.login = function(req, res) {
        console.log(req.body.email);
        collection.find({email:req.body.email}).toArray(function(err, docs) {
            if(err) res.json({status: 404});
            console.log(docs);
            (docs.length > 0) ? res.json({status: 200}) : res.json({status: 400});
        });
    }

    this.checkEmail = function(req, res) {
        console.log('checking email...', req.body.email);
        var search = new RegExp(req.body.email);
        collection.find({email:search}).toArray(function(err, docs) {
            if(err) res.json({status: 404});
            console.log(docs);
            (docs.length > 0) ? res.json({status: 200}) : res.json({status: 400});
        });
    }

    this.getAccounts = function(req, res) {
        console.log('get accounts: ');
        collection.distinct('Account', function(err, docs) {
            if(err) res.json({error: 'service unavailable'});
            console.log(docs);
            res.json({results: docs});
        });
    }

    this.search = function(req, res) {
        console.log('search: ', req.query.ci);
        collection = db.collection('dashboard');
        var search = new RegExp(req.query.ci);
        collection.find({Hostname:search}).toArray(function(err, docs) {
            if(err) res.json({error: 'service unavailable'});
            console.log(docs);
            res.json({results: docs});
        });
    }

    this.getMonitoringData = function(req, res) {
        console.log('getting monitoring data: ', req.query.ci, req.query.tool);
        collection = db.collection(req.query.tool.toLowerCase());
        collection.find({Hostname:req.query.ci}).toArray(function(err, docs) {
            if(err) res.json({error: 'service unavailable'});
            console.log(docs);
            res.json({results: docs});
        });
    }

    return this;
}

module.exports = Mongod;
