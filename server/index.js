const connect = require('./config/db');
const app = require('./server');
const path = require('path');
require('dotenv').config(); // for reading env file

const PORT = process.env.PORT || 3001;


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

//controllers
const userControllers = require("./controllers/user.controller");
const {signup, signin} = require("./controllers/auth.controller");
//routes
app.use('/api',(req,res)=>{
    return res.status(200).json({message:"Hello word"});
})
app.use('/users',userControllers);
app.use('/signup',signup);
app.use('/signin',signin);


app.listen(PORT,async(req,res)=>{
    await connect();
    console.log(`server is listening on ${PORT}`);
})

