var express = require("express")
var app = express();
var bodyParser =require("body-parser");
var mongoose=require("mongoose");
mongoose
.connect("mongodb://localhost/yel_camp", {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
	console.log("fail");
});
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});
var Campground = mongoose.model("Campground",campgroundSchema);
Campground.create(
        {
            name:"salmon creek",
            image:"https://pixabay.com/get/52e8d4444255ae14f1dc84609620367d1c3ed9e04e5074417c2c7ed7914fc1_340.jpg"
        },function(err,campground){
            if(err){
                console.log("error");
            }else{
                console.log("New yelpcamp ");
                console.log(Campground);
            }
        });
var campgrounds=[
    {name:"salmon creek",image:"https://pixabay.com/get/52e8d4444255ae14f1dc84609620367d1c3ed9e04e5074417c2c7ed7914fc1_340.jpg"},
    {name:"Himaliya",image:"https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e5074417c2c7ed7914fc1_340.jpg"},
    {name:"asam",image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547940762a78d29549_340.jpg"},
    {name:"salmon creek",image:"https://pixabay.com/get/52e8d4444255ae14f1dc84609620367d1c3ed9e04e5074417c2c7ed7914fc1_340.jpg"},
    {name:"Himaliya",image:"https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e5074417c2c7ed7914fc1_340.jpg"},
    {name:"asam",image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547940762a78d29549_340.jpg"},
    {name:"salmon creek",image:"https://pixabay.com/get/52e8d4444255ae14f1dc84609620367d1c3ed9e04e5074417c2c7ed7914fc1_340.jpg"},
    {name:"Himaliya",image:"https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e5074417c2c7ed7914fc1_340.jpg"},
    {name:"asam",image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547940762a78d29549_340.jpg"}

];
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("landing");
});
app.get("/campgrounds",function(req,res){

    res.render("campgrounds",{campgrounds:campgrounds});
});
app.post("/campgrounds",function(req,res){
    var name=req.body.name
    var image=req.body.image
    var newCampground={name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});
app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs");
});
app.listen(3001,'localhost',function(){
    console.log("server is on");
});