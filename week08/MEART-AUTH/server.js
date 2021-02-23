require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true  },
  () => {
    console.log("mongoDb is connect");
  }
);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/user", require("./routes/user"));
app.use("/api/movies", require("./routes/movies"));
app.listen(PORT, () => console.log(`server running in ${PORT}`));



app.get('/test' , (req,res) =>{

    console.log(req.headers.token)
    res.json({msg : "test is work now"})
})

// app.post('/test' , (req,res) =>{
//     console.log(req.body)
//     res.json({msg :`Post is work with body ${req.body.name}`})
// })

// app.put('/test' , (req,res) =>{
//     const user = {
//         name : req.body.name ,
//         age : req.body.age
//     }
//     console.log(user)
//     res.json({msg :`Post is work with body ${req.body.name}`})
// })
