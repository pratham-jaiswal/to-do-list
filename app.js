const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB");

const itemsSchema = {
    name: String,
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
    name: "Drink Water",
});

const item2 = new Item({
    name: "Go for a run",
});

const defaultItems = [item1, item2];

// Item.insertMany(defaultItems)

const listSchema = {
    name: String,
    items: [itemsSchema],
};

const List = mongoose.model("List", listSchema);

app.get("/", async function (req, res) {
    let allItems;
    try {
        allItems = await Item.find();
    } catch (err) {
        console.log(err);
    }
    return res.render("list", {
        listTitle: "today",
        items: allItems,
    });
});

app.post("/", async function (req, res) {
    let item = new Item({
        name: req.body.newItem.trim(),
    });
    let listName = req.body.list;
    if(listName === "today"){
        item.save();
        return res.redirect("/");
    }
    let foundList = await List.findOne({name: listName}).exec();
    foundList.items.push(item);
    foundList.save();
    return res.redirect("/"+listName);
});

app.post("/delete", async function (req, res) {
    let id = req.body.checkbox;
    let listName = req.body.listName.toLowerCase();
    if(listName === "today"){
        try {
            const item = await Item.findByIdAndDelete(id);
        } catch (err) {
            console.log(err);
        }
        return res.redirect("/");
    }
    let foundList = await List.findOne({name: listName}).exec();
    foundList.items.pull({_id: id});
    foundList.save();
    return res.redirect("/"+listName);
});

app.get("/:listName", async function (req, res) {
    let { listName } = req.params;
    if(listName.toLowerCase() == "delete"){
        return res.redirect("/");
    }

    let foundList = await List.findOne({name: listName.toLowerCase()}).exec();

    if(!foundList){
        const list = new List({
            name: listName,
            items: [],
        });  
        list.save();
        foundList = list;
    }

    return res.render("list", {
        listTitle: listName,
        items: foundList.items,
    });
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
