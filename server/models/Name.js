// Require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NameSchema = new Schema({
    first: {
        type: String,
        trim: true,
        required: true
    },
    last: {
        type: String,
        trim: true,
        required: true
    }




});

const Name = mongoose.model("Name", NameSchema);
module.exports = Name;