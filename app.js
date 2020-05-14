var express = require("express")
var app = express();
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("landing");
});
app.get("/campgrounds",function(req,res){
    var campgrounds=[
        {name:"salmon creek",image:"https://pixabay.com/get/52e8d4444255ae14f1dc84609620367d1c3ed9e04e5074417c2c7ed7914fc1_340.jpg"},
        {name:"Himaliya",image:"https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e5074417c2c7ed7914fc1_340.jpg"},
        {name:"asam",image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547940762a78d29549_340.jpg"}
    ];
    res.render("campgrounds",{campgrounds:campgrounds});
});
app.listen(3001,'localhost',function(){
    console.log("server is on");
});