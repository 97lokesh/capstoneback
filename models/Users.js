import  mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required:[true,"username is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    phone:{
        type:Array,
        required:[true,"phone is required"]
    },
    isGuest: {type:Boolean, required:true}
});
const Users = mongoose.model( 'users' ,userSchema, 'users');


export default Users;
