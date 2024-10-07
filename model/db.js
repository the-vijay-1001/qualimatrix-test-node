import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/qualiTest").then(() => {
    console.log("db connected....")
}).catch((err) => {
    console.log(err)
})

export default mongoose.connection;