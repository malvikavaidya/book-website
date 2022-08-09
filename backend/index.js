const express = require("express")
const app = express()
const port = 4000
var cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
const { child, get } = require("firebase/database");

const {db} = require('./firebaseinit.js');
const { ContactsOutlined } = require("@material-ui/icons")

app.get("/", async(req, res) =>{
    console.log("do i work")
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


app.post("/add_review", addReview)

function addReview(req, res){
    var genre = req.body.Genre;
    var author = req.body.Author;
    var book = req.body.BookTitle;
    var rating = req.body.Rating;
    var review = req.body.Review;
    var photolink = req.body.Photolink;
    var amazonlink = req.body.AmazonLink;
    var summary = req.body.Summary;

    let obj= {
        "title": book,
        "author": author,
        "review": review,
        "summary": summary,
        "rating": rating,
        "photolink": photolink,
        "amazonlink": amazonlink,
        "genre":genre
        
    }

    console.log(genre);

    db.ref("/bookreviews/" + genre + "/" + Date.now()).set(obj, function(error){
        if (error) {
            console.log("Failed with error: " + error)
          } else {
            console.log("success")
          }
    })

    res.send(200)
}

app.use((err,req,res,next)=>{
    res.status(404).json({
        error : {
            message : err.message
       }
    });
 })

app.post("/get_fantasy_reviews", fetchFantasy)

function fetchFantasy(req, res){
    var jsonstring = [];
    var leadsRef = db.ref('bookreviews/romance');
    leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      jsonstring.push(childData);
    });
    
    });
    res.send(jsonstring);
    //res.send([{"hello": "it really sucked", "book": "hi"}, {"hello": "hi"}, {"hello": "trying"}]);
    // response.json({"hello": "it really sucked", "book": "hi"}, {"hello": "hi"});
}


app.listen(port, () => {
    console.log('Listening at http://localhost:${port}')
})