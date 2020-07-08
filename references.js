var mongoose = require("mongoose");


//fix MongoDB depreciation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blog_demo_2");

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

var User = mongoose.model("User", userSchema);
var Post = mongoose.model("Post", postSchema);

// Post.create({
//     title: "How to Cook a Burger Part 7",
//     content: "dddddddddddddddddd"
// }, function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         User.findOne(
//             {
//             email: "bob@gmail.com"
//             },
//             function(err, foundUser){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     foundUser.posts.push(post);
//                     foundUser.save(function(err, data){
//                         if(err){
//                             console.log(err);
//                         } else {
//                             console.log(data);
//                         }
//                     });
//                 }
//             })
//         };
//     }
// );


//Find User
//Find all Posts for that user
//populate the field posts and place in posts array
//exec will start the query
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err,user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});