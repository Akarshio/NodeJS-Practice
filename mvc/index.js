const express = require('express');
const app = express();
const {userMiddleware} = require('./middleware/user');
const {router} = require('./routes/user');
const PORT = 8005;
const connectDB = require('./config');

connectDB();

app.use(express.urlencoded({extended: false}));
app.use(userMiddleware("log.txt"));
app.use('/users', router) 
app.use('/api/users', router)  






      

app.listen(PORT, (err) => {
    if(err) return  console.log(err);
    return console.log(`server on http://localhost:${PORT}`);
})

