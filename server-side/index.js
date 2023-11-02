const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors())


try {
    app.get("/", (req, res)=>{
        res.send("Server Running")
    })
    
    app.listen(port, ()=>{
        console.log(`sarver is running port ${port}`);
    })
} catch (error) {
    console.log(error);
}



