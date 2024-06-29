const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        uquie: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Post',
}]
});
// Middleware xóa bài viết khi người dùng bị xóa
// userSchema.pre('findOneAndDelete', async function (next) {
//     const user = await this.model.findOne(this.getQuery());
//     if (user) {
//         await Post.deleteMany({ author: user._id });
//     }
//     next();
// });

module.exports = mongoose.model('User', userSchema)