import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: { 
        type: String,
        required: true,
    },
    cloudinaryImageId: { 
        type: String, 
        required: true
    },
    technologies: {
        type: [String], 
        required: true,
    },
    liveLink: { 
        type: String,
    },
    githubLink: { 
        type: String,
    },
}, {
    timestamps: true,
});

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
