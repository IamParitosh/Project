const app = require ("./app");

const dotenv = require ("dotenv");
const connectDatabase = require("./config/database");


// Handling Uncaught Error

process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting Down th Server due to uncaught exception`);
    process.exit(1);
});


//config
dotenv.config({path:"backend/config/config.env"});


// Connecting to Database
connectDatabase()

const server = app.listen(process.env.PORT,() => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})


// unhandled Promise Rejection

process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the Server Due to unhandled Promise Rejecttion`);

    server.close(()=> {
        process.exit(1)
    })
});