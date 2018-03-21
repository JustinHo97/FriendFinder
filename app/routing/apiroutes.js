var express = require("express");
var path = require("path");
var fs = require("fs");
var friends = require("../data/friends.js");
var router = express.Router();


router.get("/api/friends", function(req, res) {
    res.json(friends);
});

router.post("/api/friends", function(req, res) {
    console.log(req.body)
    //TODO: Use fs to append sent info to the friends.js
    //TODO: Run compare function to find and then display closest match
});

module.exports = router;