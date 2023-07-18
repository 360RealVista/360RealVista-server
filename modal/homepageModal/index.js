

const mongoose=require("mongoose")
// Request Form schema 
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

company_name:{
    type:String,
    required: [true, 'Company name is required'],
    validate: {
        validator: function(v) {
          return /^[A-Za-z0-9\s]+$/.test(v);
        },
        message: props => `${props.value} is not a valid name`
      },
    },

company_size:{
    type:String,
    // required: [true, 'Company size is required'],
    enum:{
      values:["1-10 employees","11-50 employees","51-200 employees","201-500 employees","501-1,000 employees","1,001-2,500 employees","2,501+ employees"],
      message:'{VALUE} is not supported'
    }
    },

country:{
    type:String,
    required: [true, 'Country name is required'],
    enum:{
      values:["Bahrain","Kuwait","Qatar","Saudi Arabia","Oman","United Arab Emirates"],
      message:'{VALUE} is not supported'
    }
  },

governorate:{
    type:String,
    // required: [true, 'Governorate name is required'],
    enum:{
      values:['Muscat', 'Dhofar', 'Musandam',' Al Buraimi', 'Al Dakhiliyah', 'Al Batinah North', 'Al Batinah South', 'Al Sharqiyah North', 'Al Sharqiyah South', 'Al Dhahirah', 'Al Wusta'],
      message:'{VALUE} is not supported'
    }
  },

job_title:{
    type:String,
    required: [true, 'Job title is required'],
    validate: {
        validator: function(v) {
          return /^[A-Za-z0-9\s]+$/.test(v);
        },
        message: props => `${props.value} is not a valid name`
      },
    },

number:{
    type:Number,
    required: [true, 'Number is required'],
    validate: {
        validator: function(v) {
          return /^(0|[1-9]\d*)$/.test(v);
        },
        message: props => `${props.value} is not a valid name`
      },
    },

other_service_brief:{
      type:String,
      // required: [true, 'Other service brief title is required'],
      validate: {
          validator: function(v) {
            return /^[A-Za-z0-9\s]+$/.test(v);
          },
          message: props => `${props.value} is not a valid name`
        },
  },

service:{
    type:String,
    required: [true, 'Service is required'],
    enum:{
      values:['Government', 'Residential building', 'Commercial building',
      'Industrial Plants', 'Construction Sites', 'Public Places', 'Car Showrooms', 'Hotels',
      'Restaurants', 'Coffeeshops', 'Insurance Companies', 'Furniture Showroom',
      'Education', 'Events', 'Others'],
      message:'{VALUE} is not supported'
    }
  },
  
  estimated_size:{
    type:[String],
    required:[true,"Atleast give on Estimate Size"]
  },
  email:{
    type:String,
    // required: [true, 'email  is required'],
    validate: {
        validator: function(v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: props => `${props.value} is not a valid name`
      },
    },

    subject:{
      type:String,
      // required: [true, 'Other service brief title is required'],
      validate: {
          validator: function(v) {
            return /^[A-Za-z0-9\s]+$/.test(v);
          },
          message: props => `${props.value} is not a valid name`
        },
  },
  message:{
    type:String,
    // required: [true, 'Other service brief title is required'],
    validate: {
        validator: function(v) {
          return /^[A-Za-z0-9\s]+$/.test(v);
        },
        message: props => `${props.value} is not a valid name`
      },
},



})


module.exports=mongoose.model("requestForm",schema)













