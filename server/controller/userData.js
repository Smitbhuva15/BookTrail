
const { usermodel } = require("../modules/usermodules");
const bcrypt = require('bcryptjs'); 

const userData = async (req, res) => {
    try {
        const { email, name, password } = req.body;  

    
        const userExist = await usermodel.findOne({ email });
        // console.log(userExist);
        
        if (userExist) {
            return res.status(400).json({ message: "Email id is already exist" });
        }

      
        const hashedPassword = await bcrypt.hash(password, 10);  

        
        const userCreated = await usermodel.create({
            email,
            name,
            password:hashedPassword 
        });

       
        res.status(200).json({ 
            message: "User created successfully",
            // token: await userCreated.generateToken(),
            userId :userCreated._id.toString()
         });

    } catch (error) {
        console.error(error);  
        res.status(500).json({ message: "Internal Error " });
    }
};


const loginData=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const isExist=await usermodel.findOne({email});
        if(isExist){
            const hashPassword= isExist.password;
            const isMatch=await bcrypt.compare(password,hashPassword);
            if(isMatch){
                res.status(200).json({
                    message:"Login sucessfull!!!",
                    name:isExist.name,
                    token:await isExist.generateToken()
                });
            }
            else{
                res.status(400).json({message:"Email id or password incorrect"});
            }

        }
        else{
            res.status(400).json({message:"email id is not exist"});
        }
        
    } catch (error) {
       res.status(500).json({message:"Internal server Error"})
        
    }
   
    

}

exports.userData = userData;
exports.loginData =loginData;
