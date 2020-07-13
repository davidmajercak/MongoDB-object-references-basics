var mongoose = require("mongoose");
//Need ./ to reference current directory
var Post = require("./models/post");
var User = require("./models/user");

//fix MongoDB depreciation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blog_demo_2");


Post.create({
    title: "How to Cook a Burger Part 8",
    content: "Part 8 Burger Stuff"
}, function(err, post){
    if(err){
        console.log(err);
    } else {
        User.findOne(
            {
            email: "bob@gmail.com"
            },
            function(err, foundUser){
                if(err){
                    console.log(err);
                } else {
                    foundUser.posts.push(post);
                    foundUser.save(function(err, data){
                        if(err){
                            console.log(err);
                        } else {
                            console.log(data);
                        }
                    });
                }
            })
        };
    }
);


//Find User
//Find all Posts for that user
//populate the field posts and place in posts array
//exec will start the query

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err,user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });