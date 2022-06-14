const express = require('express')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/user.routes')
const postRoutes = require('./routes/post.routes')
require('dotenv').config({path: './config/.env'})
require('./config/db')
const {checkUser, requireAuth} = require('./middleware/auth.middleware')
const cors = require('cors')
const app = express()
const nodemailer = require("nodemailer")
const router = express.Router()

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}

app.use(cors(corsOptions))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())
app.use("/", router);

// jwt
app.get('*', checkUser)
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
})

//routes
app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)

//server
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})


//Mailing Service Nodemailer using Gmail as SMTP
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
})
contactEmail.verify((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Ready to Send");
    }
})
router.post("/contact", (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const mail = {
        from: name,
        to: process.env.GMAIL_USER,
        subject: "Contact Form Submission from Portfolio",
        html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>`,
    }
    contactEmail.sendMail(mail, (err) => {
        if (err) {
            res.json({ status: "ERROR"})
        } else {
            res.json({ status: "Message Sent"})
        }
    })
})