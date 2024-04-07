import mongoose from "mongoose";
const TodoSchema = new  mongoose.Schema({
        User:String,
        id:String,
        T3_1:String,
        T3_2:String,
        T3_3:String,

        TL_1:String,
        TL_2:String,
        TL_3:String,
        TL_4:String,
        TL_5:String,

        DF_1:String,
        DF_2:String,

        PS_6:String,
        PS_7:String,
        PS_8:String,
        PS_9:String,
        PS_10:String,
        PS_11:String,
        PS_12:String,
        PS_1:String,
        PS_2:String,
        PS_3:String,
        PS_4:String,
        PS_5:String,
        PS_6P:String,
        created: { type : Date , default:Date.now() }
})


export default TodoSchema;