import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        unique: true,
        required: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true
    }
}, {
    timestamps: {
        createdAt: "created_At",
        updatedAt: "updated_At",
    }
})

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;