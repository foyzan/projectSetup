import mongoose from "mongoose";
import { app } from "./app.js";
import config from "./config/index.js";



async function main() {
   try{
     await mongoose.connect(config.DatabaseURL as string)
     app.listen(config.port, function(){
     console.log('the server is running on port ' + config.port);

})
   }catch(err){
    console.log(err)
   }
}

main()


