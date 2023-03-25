const dotenv = require('dotenv').config({path:'./.env'});
const axios = require('axios');

const config = { headers: {
    'Content-Type': 'application/json', 
    'Authorization': process.env.USER_KEY
}}
const data = {
    "model": "text-davinci-003",
    "prompt": ``,
    "max_tokens":500,
    "temperature": 0.5
  }
  exports.translate = async (req, res) => {
    data.prompt = `${req.body.text}`;
    console.log(data);
    axios.post('https://api.openai.com/v1/completions', data , config)
    .then(function (response) {
        res.status(200).send({message:response.data.choices[0].text})
    })
    .catch(function (error) {
        console.log(error);})
  }
