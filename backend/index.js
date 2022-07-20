const express = require("express")
const app = express()
const port = 4000
var cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

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

function addReview(request, response){
    var genre = request.body.Genre;
    var author = request.body.Author;
    var book = request.body.BookTitle;
    var rating = request.body.Rating;
    var review = request.body.Review;
    var photolink = request.body.Photolink;
    var amazonlink = request.body.AmazonLink;
    var summary = request.body.Summary;

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

    response.send(200)
}


app.listen(port, () => {
    console.log('Listening at http://localhost:${port}')
})