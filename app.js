const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.set("viewengine", "ejs");

app.get("/", function(req, res) {
    


});







app.listen(3000, function(){console.log("server up")})