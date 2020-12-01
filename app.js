const express = require('express')
const app = express()
const axios = require('axios');
 
const url = "";  // Replace with url
const key = ""; // Replace with key
const config = { headers:{chaveAcesso : key} };

// Requisição OPTIONS - Sem envio de headers
axios({
    method: 'OPTIONS',
    url: url
    })
    .then(function (response) {
        console.log(`\nURL: ${url}`)
        console.log("METHOD: OPTIONS")
        console.log(`Status: ${response.status} - ${response.statusText}`)
        console.log(`Allow: ${response.headers.allow}`)
    })
    .catch(function(error){
        console.log(`\nURL: ${url}`)
        console.log("METHOD: OPTIONS")
        console.log(`Status: ${error.response.status} - ${error.response.statusText}`)
    });

// Requisição GET    
axios.get(url, config)
    .then(function (response) {       
        console.log(`\nURL: ${url}`)
        console.log("METHOD: GET")
        console.log(`Status: ${response.status} - ${response.statusText}`)
        console.log(`Content: ${JSON.stringify(response.data)}`)
    })
    .catch(function (error) { 
        console.log(`\nURL: ${url}`)
        console.log("METHOD: GET")
        console.log(`Status: ${error.response.status} - ${error.response.statusText}`)
        console.log(`Content: ${JSON.stringify(error.response.data)}`)
    });

app.listen(3000, ()=> {console.log('server is up on port 3000')})