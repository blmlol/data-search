// Require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    first: {
        type: String,
        trim: true,
        required: true
    },
    second: {
        type: String,
        trim: true,
        required: true
    }
    



});

const Data = mongoose.model("Data", DataSchema);
module.exports = Data;