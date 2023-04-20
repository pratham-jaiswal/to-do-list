const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

let tasks = ['Drink Water', 'Go for a run'];
let workTasks = [];

app.get("/", function(req, res){
    let today = new Date();
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let displayDate = day[today.getDay()] +", "+ month[today.getMonth()]+" "+today.getDate();
    res.render("list", {listTitle: displayDate, newListTasks: tasks, route:"/"});
});

app.post("/", function(req, res){
    let task = req.body.newItem.trim();
    if (task) tasks.push(task);
    res.redirect("/");
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListTasks: workTasks, route:"/work"});
});

app.post("/work", function(req, res){
    let task = req.body.newItem.trim();
    if (task) workTasks.push(task);
    res.redirect("/work");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});