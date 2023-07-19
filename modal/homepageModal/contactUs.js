const mongoose=require("mongoose")
const schema = new mongoose.Schema({

name:{
    type:String,
    required: [true, 'User name is required'],
    validate: {
        validator: function(v) {
          return /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(v);
        },
        message: props => `${props.value} is not a valid name`
      },
    },

phone:{
    type:Number,
    required: [true, 'number is required'],
    validate: {
        validator: function(v) {
          return /^(0|[1-9]\d*)$/.test(v);
        },
        message: props => `${props.value} is not a valid name`
      },
    },

  email:{
    type:String,
    required: [true, 'email  is required'],
    validate: {
        validator: function(v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: props => `${props.value} is not a valid name`
      },
    },

  subject:{
      type:String,
      required: [true, 'Other service brief title is required'],
      validate: {
          validator: function(v) {
            return /^[A-Za-z0-9\s]+$/.test(v);
          },
          message: props => `${props.value} is not a valid name`
        },
  },
  message:{
    type:String,
    required: [true, 'Other service brief title is required'],
    validate: {
        validator: function(v) {
          return /^[A-Za-z0-9\s]+$/.test(v);
        },
        message: props => `${props.value} is not a valid name`
      },
},



})


module.exports=mongoose.model("contactUsForm",schema)













