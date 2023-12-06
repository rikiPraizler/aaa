const mongoose = require("mongoose");

const spiningTopSchema = mongoose.Schema({
    name: { type: String, required: true },
    color: String,
    price: Number
})

const SpiningTop = mongoose.model("spining", spiningTopSchema);
module.exports = SpiningTop;