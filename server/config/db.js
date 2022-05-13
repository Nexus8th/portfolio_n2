const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://adminOCR:z9Jjgo7NdSXXoPV1@mern-fullstack.xswz4.mongodb.net/mern-crud')
.then(() => console.log('Connected to mongoDB'))
.catch((err) => console.log('Failed to connect to mongoDB', err))