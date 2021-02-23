const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');


app.set('view engine' , 'ejs');


// use css an js on ejs file
app.use(express.static("public"));
app.use(expressLayouts);

app.get('/' , (req ,res ) => {

    if (req.user) {
        res.redirect('/singUp')
    }else {
        res.redirect('/home')
    }
   
})

// routes
app.use(require('./routes/user'))
app.use(require('./routes/twitt'))




let Port = process.env.Port || 5000

app.listen(Port , () => console.log(`server twitter work now ${Port} `))