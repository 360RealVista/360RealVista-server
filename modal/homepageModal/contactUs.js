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
    type:String,
    required: [true, 'Number is required'],
    validate: {
        validator: function(v) {
          return /^(0|[1-9]\d*)$/.test(v);
        },
        message: props => `${props.value} is not a valid number`
      },
    },

  email:{
    type:String,
    required: [true, 'Email  is required'],
    validate: {
        validator: function(v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: props => `${props.value} is not a valid email`
      },
    },

  subject:{
      type:String,
      required: [true, 'Subject  is required'],
      validate: {
          validator: function(v) {
            return /^[A-Za-z0-9\s]+$/.test(v);
          },
          message: props => `${props.value} is not a valid subject`
        },
  },
  message:{
    type:String,
    required: [true, 'Message is required'],
    validate: {
        validator: function(v) {
          return /^[A-Za-z0-9\s]+$/.test(v);
        },
        message: props => `${props.value} is not a valid message`
      },
},



})


module.exports=mongoose.model("contactUsForm",schema)













