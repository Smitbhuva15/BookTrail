require("dotenv").config();
const jwt = require('jsonwebtoken');
const { usermodel } = require('../modules/usermodules');


exports. AuthMiddelware= async (req,res,next)=>{
  const token = req.header("Authorization");

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "Token is not found" });
  }

  const jwtToken = token.split(" ")[1]; // Extract the token after "Bearer"

  try {
    // Verify the token
    const isVerify = jwt.verify(jwtToken, process.env.SCRETE_KEY_JWT);
    const _id = isVerify.userId; // Extract userId from the token payload

    
    const user_data = await usermodel.findOne({ _id }, { password: 0 });

    
      req.user = user_data; 
      //  res.status(500).json({ message:  user_data });
      next(); 
    

  } catch (error) {
    return res.status(500).json({ message: "Internal Error1" });
  }
}


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzdlY2I2NTliOWU0YWMyMDg2NGYwMTAiLCJlbWFpbCI6InVzZXJAMjNleGFtcDQ1M2UuY29tIiwiaWF0IjoxNzM2NDA5NTc2fQ.CC-_ffKySyrbcg8qBw_OQMKfAhsu4vgm-YGiGLEthXY