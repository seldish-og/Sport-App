const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()

app.use(cors({
    origin: '*'
}));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))


app.get("/", (req, res) => {
    res.send("FUCK");
})

app.post("/auth/login", (req, res) => {
    console.log(req.body);
    console.log("WORK")
    res.send("FUCK YOU");
})

app.listen("3000", (e) => {
    console.log("Server is running...")
    console.error(e)
})