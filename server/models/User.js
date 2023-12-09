import mongoose from "mongoose";

const UserSchema= new mongoose.Schema(
    {
        name: {
            type: String,
            min: 2,
            max: 100,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            max: 50,
            required: true,
        },
        password: {
            type: String,
            min: 5,
            required: true,
        },
        city: String,
        state: String,
        country: String,
        occupation: String,
        phoneNumber: String,
        transactions: Array,

        role: {
            type: String,
            enum: ["user" , "admin" , "superadmin"],
            default: "admin",
        },
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", UserSchema);

export default User;