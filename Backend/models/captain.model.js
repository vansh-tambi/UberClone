const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const captainSchema = new mongoose.Schema({
    fullname:{
        firstName:{
            type:String,
            required:true,
            minLength:[3, 'First Name must be at least of 3 characters'],
        },
        lastName:{
            type:String,
            minLength:[3, 'First Name must be at least of 3 characters']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active', 'inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minLength:[3, 'color must be at least 3 characters']
        },
        plate:{
            type:String,
            required:true,
            minLength:[3, 'Plate number must be at least 3 characters long']
        },
        capacity:{
            type:Number,
            required:true,
            min:[1, 'capacity must be at least 1']
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car', 'moto', 'auto']
        }
    },
    location:{
        ltd:{
            type:Number,
        },
        lng:{
            type:Number
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema)
module.exports = captainModel;

