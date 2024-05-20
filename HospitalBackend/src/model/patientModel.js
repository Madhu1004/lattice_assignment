import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"],
        minlength: [10, "Address should be at least 10 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: function(value) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            },
            message: "Invalid email address"
        }
    },
    number: {
        type: Number,
        required: [true, "Phone number is required"],
        validate: {
            validator: function(value) {
                return /^\d{10,}$/.test(value);
            },
            message: "Invalid phone number"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"],
        maxlength: [15, "Password must be at most 15 characters"],
        validate: {
            validator: function(value) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/.test(value);
            },
            message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        }
    },
    imgUrl: {
        type: String,
        required: [true, "Patient photo is required"]
    },
});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
