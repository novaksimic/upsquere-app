const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true   
    },
    checked: {
        type: Boolean,
        required: true
    },
    taskListId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'TaskList'
    }
    
})

module.exports = mongoose.model('Task', taskSchema);
