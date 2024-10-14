import mongoose from "mongoose";

const guest =  async(req, res)=>{
    req.session.guest = true;
    req.session.user = '';
    req.session.userID = '';
    
    res.end();
  };

  export default guest