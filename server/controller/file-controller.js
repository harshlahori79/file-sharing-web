import File from "../models/file.js";

export const uploadHandle = async(req , res) =>
{
    console.log(req);

    const fileObj = {
        path: req.file.path ,
        name: req.file.originalname
    }

    try{
            const file = await File.create(fileObj);
            console.log(file);
            res.status(200).json({path :`http://localhost:8000/file/${file._id}` });


    }catch(error)
    {
        console.log("error in controller : ",error.message);
        res.status(500).json({error:error.message});
    }

    
}

export const downloadHandle = async(req , res) =>
{
    try{
        console.log("hiriye");
        console.log(req.params);
        const file = await File.findById(req.params.fileID);

        file.downloadContent++;

        await file.save();

        res.download(file.path , file.name );

    }catch(error)
    {
        console.log(error.message);
        return res.status(500).json({error : error.message});

    }
}