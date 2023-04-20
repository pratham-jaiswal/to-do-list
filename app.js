const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

let items = ['Nahane Jaa Nahanee', 'Paaaani piyoooooooo']

app.get("/", function(req, res){
    let today = new Date();
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let displayDate = day[today.getDay()] +", "+ month[today.getMonth()]+" "+today.getDate();
    res.render("list", {date: displayDate, newListItems: items});
});

app.post("/", function(req, res){
    let item = req.body.newItem.trim();
    if (item) items.push(item);
    items.push();
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});