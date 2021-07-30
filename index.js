const express = require('express')
const track = require("novelcovid")
const exphbs = require('express-handlebars')
const { response } = require('express')

track.countries().then(console.log)
const app = express()
const port = process.env.PORT||8080

app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultValue: 'home',
    layoutsDir: __dirname + '/views/layouts/'
}));

// app.get('/', (req,res)=>{
//    res.send("Heyy")
// })

app.get('/', (req, res) => {
    track.countries().then((response) => {
        res.render('home', { info: response })

    })
})

app.listen(port, (req, res) => {
    console.log("App is listening on port 8080")
})