import app from "./index.js";
import connectDB from "./utils/connectDB.js";

app.listen(4001 , () =>{
    connectDB();
    console.log("Database Connected Successfully");
    console.log("app is listening at 4001");
})