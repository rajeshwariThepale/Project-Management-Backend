const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require("./config/db");
const routes = require("./routes/api");
// const cors = require("cors");

const app = express();

//db connection
connectDB();


// connect with react-server
// const corsOptions ={
//     origin: "http://localhost:3000",
//     optionsSuccessStatus: 200 
// };
// app.use(cors(corsOptions));

// middleware
app.use(bodyParser.json());
app.use('/api', routes);
    
//port number
const PORT = 5007;
app.listen(PORT,()=> console.log(`server is running at ${PORT}`));