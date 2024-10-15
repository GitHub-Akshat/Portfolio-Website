import Project from "../model/projects.js"
import cloudinary from "../config/cloudinary.js";

const AddProject = async(req,res)=>{
    try {

        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No image file uploaded' });
        }

        const result = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream({ folder: 'projects' }, (error, result) => {
                if (error) return reject(error);
                resolve(result);
            });

            uploadStream.end(req.file.buffer);
        });

        const project = new Project({
            title: req.body.title,
            description: req.body.description,
            imageUrl: result.secure_url,
            cloudinaryImageId: result.public_id,
            technologies: req.body.technologies.split(','), 
            liveLink: req.body.deployLink,
            githubLink: req.body.githubLink,
        });

        await project.save();

        return res.status(201).json({ success: true, project });
    } 
    catch (error) {
        console.error('Error adding project:', error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
}

const GetProjects = async(req, res)=>{
    try {
        const projects = await Project.find({});
        return res.status(200).json({ success: true, projects });
      } 
      catch (error) {
        console.error('Error fetching projects:', error);
        return res.status(500).json({ success: false, message: 'Server error' });
      }
};

const DeleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        await cloudinary.uploader.destroy(project.cloudinaryImageId); 
        await Project.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Project deleted successfully" });

    } 
    catch (error) 
    {
        console.error('Error deleting project:', error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};

export { AddProject, GetProjects, DeleteProject } ;