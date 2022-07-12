const express = require("express")
const app = express()
const port = 4000
var cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

const {db} = require('./firebaseinit.js');

app.get("/", async(req, res) =>{
    console.log()
})

app.post("/write_review", async(req, res) =>{
    var data = JSON.parse(req.body);
    let obj= {
        "title": data["title"],
        "author": data["author"],
        "summary": data["summary"],
        "rating": data["rating"],
        "review": data["review"],
        "photo link": data["photo link"],
        "amazon link": data['amazon link']
    }
    db.ref("/bookreviews").set(obj, function(error){
        if (error) {
            console.log("Failed with error: " + error);
            return 400;
          } else {
            console.log("success");
            return 200;
          }
    })
})

app.post("/post_name", async(req, res) =>{
    let {name} = req.body
    console.log(name)
    console.log('testing db ' + db)
    let obj= {
        "title": "ugly love",
        "author": "colleen hoover"
    }
    db.ref("/bookreviews").set(obj, function(error){
        if (error) {
            console.log("Failed with error: " + error)
          } else {
            console.log("success")
          }
    })
})

app.listen(port, () => {
    console.log('Listening at http://localhost:${port}')
})