const Project = require('../model/projects');

const addProject= async (req, res) => {
    try{
        const project = new Project(req.body);
        await project.save();
        res.status(201).send({message: 'New Project added successfully'},project);
      } catch (error) {
        res.status(400).send(error);
      }

    };
    
    const getProjects = async (req, res) => {
        try{
            const projects = await Project.find({});
            res.send(projects);
        } catch (error) {
            res.status(500).send(error);
        }
    };
    
    const updateProjectStatus = async (req, res) => {

        const {id} = req.params;
        const {status} = req.body;

        if (!["Registered","Running", "Cancelled","Closed"].includes(status)){
            return res.status(400).send({message: 'Invalid status'});
        }
        try{
        const updateStatus = await Project.findByIdAndUpdate(id);

        if (!updateStatus) {
            return res.status(404).json({ error: 'Project not found' });
          }

          // Update the status of the project in the database
            updateStatus.status = status;
            await updateStatus.save();
    
            // Send the updated project back as response
            res.status(200).send(updateStatus);
      } catch (error) {
        
        res.status(500).send({ error: 'Failed to update project status' });
      }
    };

    const deleteProjectById = async(req,res)=>{
      try{
        const deleteProject = await Project.findByIdAndDelete(req.params.id)
        if (!deleteProject) {
             res.status(404).json({ message: 'Project not found' });
          }
          res.json({ message: 'your Project deleted' });

      }catch (error) {
        res.status(500).send(error);
      }
    }
    module.exports = {
        addProject,
        getProjects,
        updateProjectStatus,
        deleteProjectById
    };