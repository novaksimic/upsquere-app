const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskListSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true   
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
    
})

module.exports = mongoose.model('TaskList', taskListSchema);
