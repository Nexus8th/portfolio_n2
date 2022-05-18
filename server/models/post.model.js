const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
        posterId: {
            type: String,
            required: true
        },
        message: {
            type: String,
            trim: true,
            maxlength: 500
        },
        picture: {
            type: String
        },
        vidéo: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('post', PostSchema)