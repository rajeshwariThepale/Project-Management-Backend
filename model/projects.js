const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: { type: String, required: true, unique: true },
    reason: { type: String, required: true },
    type: { type: String, required: true},
    division: { type: String, required: true},
    category: { type: String, required: true},
    priority: { type: String, required: true},
    department: { type: String, required: true},
    startDate: { type: Date, required: true},
    endDate: { type: Date, required: true},
    location: {type: String, required: true},
    status: {
        type: String,
         enum:["Registered","Running", "Cancelled","Closed"], 
        default: "Registered"
    }
});

const projects = mongoose.model('Project',projectSchema);
module.exports = projects;
