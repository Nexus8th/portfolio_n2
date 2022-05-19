const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://" + process.env.DB_USER_PASS + "@mern-fullstack.xswz4.mongodb.net/mern-crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to mongoDB'))
.catch((err) => console.log('Failed to connect to mongoDB', err)) 