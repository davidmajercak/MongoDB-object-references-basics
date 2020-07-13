//Still need requires when using module.exports
var mongoose = require("mongoose");

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

//explicitly state what we want to export 
module.exports = mongoose.model("Post", postSchema);