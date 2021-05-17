const express = require("express")
const app = express()
const logger = require("morgan")
const path = require("path")

app.use(logger("dev"))
app.use(express.json())

app.set('views', path.join(__dirname, "views"))
app.set('view engine', "ejs")

app.use(express.static(path.join(__dirname, "public")))

app.get("/", function(req, res){
    res.render("index", {name:"Nastya Kvak", info:["is afraid of dolls", "speaks three languages", "is only and selfish child"]})
})
app.get('/photo-fun', function(req, res){
    res.render("photos")
})


app.get("/:pet/:age", function(req, res){
    res.render("pets", {pet:req.params.pet,
    age:req.params.age})
})



app.listen(3000, function(){
    console.log(`Server is running on PORT: ${3000}`);
})
