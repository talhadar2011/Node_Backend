import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    passwor: {
        type: String,
        required: true
    },

},
    {
        timestamps
    }
);

module.exports = mongoose.model("User", userSchema);