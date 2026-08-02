const express = require('express');
const app = express();
const PORT = 3002;
const  router  = require('./routes/user')
const connectDB = require('./config');
const {logTracker} = require('./middleware/app');


connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(logTracker('log.txt'));


app.use('/user', router  )
app.use('/api//user', router)


app.listen(PORT, (err) => {
        if(err) return  console.log(err);
        console.log(`server is on https://localhost:${PORT}`)
})