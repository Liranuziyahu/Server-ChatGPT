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
    "temperature": 0.5,
  }
  
  exports.translate = async (req, res) => {
    data.prompt = `I'm looking for a vacation, for ${req.body.people} friends, every one has a budget of ${req.body.budget}$, we are looking for a vacation to  ${req.body.mainland} , give me also details about attraction there`;
    axios.post('https://api.openai.com/v1/completions', data , config)
    .then(function (response) {
      console.log(response);
        res.status(200).send({message:response.data.choices[0].text})
    })
    .catch(function (error) {
        console.log(error);})
  }
