const express = require('express');
const app = express();

//require date module that we have created
const date = require(__dirname + "/date.js");
const https = require("https");
const getDate = require('./date');
var items = ["Fix the phone", "Buy contact solution"];
app.set('view engine', 'ejs');
let workItems = [];

// Put the CSS in public folder so it can be search by our server
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
    // we did save the variable date above that will run the getDate function
    let day = date.getDate(); // let day = date.getDay();
    // if (currentDay===6 ||currentDay===0  ){
    //     day = "Weekend";      
    // }
    // else{
    //     day = "Weekday";   
    // }
    // variable to render has to be exactly similar to the list.ejs variable
    //use view engine to render page index
    res.render("list", {
        listTitle: day, newListItems: items
    });
});

app.post("/",function(req,res){
    let item = req.body.newItem;
    // do an if statement to redirect the route to the right home/work route
    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work")
    }
    else{
    // get the item inside the body of the html - have to add the body parser/express  
    items.push(item);
    res.redirect("/")
}
})

app.listen(3000, function () {
    console.log("Server started on port 3000");
})

app.get("/work", function(req,res){
    res.render("list",{listTitle: "Work list", newListItems: workItems})
})
app.post("/work",function(req,res){
    // get the item inside the body of the html - have to add the body parser/express
    var item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")

})

app.get("/about",function(req,res){
    res.render("about");
})


