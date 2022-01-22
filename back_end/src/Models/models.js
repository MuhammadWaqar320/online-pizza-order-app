
import  mongoose, { Schema } from "mongoose";
// here i am creating admin model
const Admin_Schema=mongoose.Schema
(
    {
        username:{type:String,required:true},
        Email: {type:String,required},
        password:{type:String,required},
        phone_no:{type:Number,required},
        register_date:{type:Date,default:Date.now},
        Email:{type:String,required,unique:true},
    }
)
export const Admin_Model=mongoose.model('Admin',Admin_Schema)
// here i am creating customer model
const Customer_Schema=mongoose.Schema
(
    {
        name:{type:String,required},
        Email:{type:String,required,unique:true},
        phone_no:{type:Number,required,trim:true},
        password:{type:String,required,max:15,min:6,trim:true},
        register_date:{type:String,default:Date.now},
        address:{type:String,default:"",trim:true,required},
        country:{type:String,default:"",trim:true,required},
        city:{type:String,default:'',trim:true,required}
    }
)
export const Customer_Model=mongoose.model('Customer',Customer_Schema)
// here i am creating Product model
const Product_Schema=mongoose.Schema
(
    { 
        pro_name:{type:String,required},
        pro_imag:{data:Buffer,contentType:String},
        pro_price:{Number,required},
        pro_detail:{String,required},
        pro_brand:{String,required},
        pro_company:{String,required},
        pro_weight:{String,required},
        pro_category:{String,required}
    }
   
)
export const Product_Model=mongoose.model('Product',Product_Schema)
// here i am creating Order model
const Order_Schema=mongoose.Schema
(
   {
       order_date:{type:Date,default:Date.now},
       order_price:{type:Number,required},
       customer_id:{type:Schema.Types.ObjectId,ref:'Customer'},
       product_id:{type:Schema.Types.ObjectId,ref:'Product'},

   }
)
export const Order_Model=mongoose.model('Pizza_Oder',Order_Schema)
// here i am contact us Order model
const ContactUs_Schema=mongoose.Schema
(
  {
      Name:{String,required},
      Email:{String,required,unique:true},
      message:{String,required},
      phone_no:{Number,required}

  }
)
export const ContactUs_Model=mongoose.model('Contact_Us',ContactUs_Schema)