
const connect = require('./config/db');
const app = require('./server');

require('dotenv').config(); // for reading env file

const PORT = process.env.PORT || 3001;

//controllers
const {signup, signin} = require("./controllers/auth.controller");
const userControllers = require("./controllers/user.controller");
const artileController = require('./controllers/article.controller')

//routes
app.use('/api',(req,res)=>{
    return res.status(200).json({message:"Hello from server"});
})

app.use('/signup',signup);
app.use('/signin',signin);
app.use('/users',userControllers);
app.use('/articles', artileController);

//listen the server
app.listen(PORT,async(req,res)=>{
    await connect();
    console.log(`server is listening on ${PORT}`);
})

