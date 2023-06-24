# To Do List
A simple to-do list built using EJS and Express. Can also be used to create custom todolists.

## Getting Started
To get started with this code, simply clone this repository to your local machine:
```bash
git clone https://github.com/pratham-jaiswal/to-do-list.git
```

## Library Prerequisites
1. Node.js
2. Express
3. EJS
4. Nodemon (optional)
    You can install these dependencies using npm:
    ```bash
    npm init
    npm install express ejs nodemon
    ```

## Running the code
To run the code simply open your terminal/command prompt in that directory and run the following command,
```bash
node app.js
```

**OR** (Recommended)

Update the package.json file by setting the "main" property to "app.js":
```json
{
  ...
  "main": "app.js",
  ...
}
```

To avoid the need to manually stop and restart a Node.js application every time a change is made to the code, nodemon should be used. Open your terminal/command prompt in that directory and run the following command:
```bash
nodemon
```

This saves time and effort, allowing you to focus on writing code and testing it, rather than worrying about restarting the application.
<br/><br/>

## Test the website
After starting the node, open a browser, type "*localhost:3000*" and hit enter.
| ![Image](https://i.imgur.com/NdWGIFF.png) |
|:--:|
| <i>Homepage</i> |
<br/><br/>

| ![Image](https://i.imgur.com/zfGUIaX.png) |
|:--:|
| <i>Database - Default List</i> |
<br/><br/>

A custom list can be created by just typing "*localhost:3000/<:listName>*"

| ![Image](https://i.imgur.com/BX8absC.png) |
|:--:|
| <i>Custom List</i> |
<br/><br/>

| ![Image](https://i.imgur.com/lgKKjmX.png) |
|:--:|
| <i>Database - Custom List (Work)</i> |
<br/><br/>