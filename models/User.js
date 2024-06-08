const { Password } = require("@mui/icons-material");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        min:0,
        max:25,
        unique: true,

    },
    email:{
        type:String,
        required: true,
        max:50,
        unique: true,
    },
    password:{
        type:String,
        required: true,
        default:"",

    },
    coverPicture:{
        type:String,
        default:"",
    },
    followings:{
        type:booleanm,
        default:"",
    },
    isAdmin:{
        type:boolean,
        default:"",
    },
    desc:{
        type:String,
        max:70,
    },
    city:{
        type:String,
        max:50,
    },

},
{ timestamps:true }
)