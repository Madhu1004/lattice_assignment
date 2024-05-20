import mongoose from "mongoose";

const url = "mongodb://localhost:27017/Hospital";
const connectDB = () => {
    mongoose.connect(url);
}
export default(connectDB);