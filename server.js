const PORT = process.env.PORT || 8080;
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors({origin:'*'}));
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get('/' , (req,res) => res.json({message: "Welcome to my application."}))
require('./routes/translate.js')(app)

app.listen(PORT, () => console.log(`Listen on PORT ${PORT} , http://localhost:${PORT}/`))
 