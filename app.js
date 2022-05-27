
import express from 'express'
const app = express()
const port = 5000
import web from './routes/web.js'
import path from 'path'
import bodyParser from 'body-parser'
// import session from 'express-session'
app.use(bodyParser.urlencoded({ extended: false }))
// import {helper.js} from 'helper/helper.js'
// app.use(session({
//     secret:'codeForces',
// }))

 



// static files
// app.use(express.static(path.join(__dirname,'/public')));

// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static('public'))
app.use('code-review-animate.svg',express.static('public/code-review-animate.svg'));
app.use('/style.css',express.static('public/style.css'));


// set template engine
app.set('view engine','ejs')
// Load routes

app.use('/',web)

app.listen(port,()=> {
    console.log("server is listening");
})



