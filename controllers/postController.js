import{Post} from '../models/postModel'

export const create_Post=async(req,res)=>{
    try{
        const {title,post}=req.body;

        const newpost=await Post.create({
            title:title,
            psot:post,
        })
        res.status(201).json({
            sucess:true,
            data:newpost
        })
    }
    catch(error){
        res.status(500).json({
            sucess:false,
            message:error.message
        })
    }
}