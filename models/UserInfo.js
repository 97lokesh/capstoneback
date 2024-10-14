import  mongoose from 'mongoose'
// import Schema from  'mongoose.Schema'

const userInfoSchema = new Schema({
    fname : {type: String, required:true},
    lname : {type: String},
    email : {type: String},
    phone: {type: String},
    comment: {type: String},
    users: [{type:Schema.Types.ObjectID, ref:'users'}]
});

const UserInfo = mongoose.model('usersInfo', userInfoSchema, 'usersInfo');

export default UserInfo;