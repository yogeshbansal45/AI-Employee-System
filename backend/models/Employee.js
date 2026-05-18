const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    department: {
        type: String,
        required: true
    },

    skills: {
        type: [String]
    },

    performanceScore: {
        type: Number,
        required: true
    },

    experience: {
        type: Number
    }

});

module.exports = mongoose.model("Employee", employeeSchema);