const express = require('express');
const https = require('https');
const bodyparser = require('body-parser');
const request = require('request');
const fetch = require('fetch');
const axios = require('axios')

const app = express();

app.get("/",function(req,res){

    https.get("https://randomuser.me/api/?gender=female",function(response){
        console.log(response);
        console.log(response.statusCode);

        response.on("data",function(data){
	    const random = JSON.parse(data);
	    const pic = random.results.picture[0];
            response.write(data);
    
    // t = res.data.results;
    // axios.get("https://randomuser.me/api/").then((res)=>console.log(res.data.results[0].picture.large));
    // axios({
    //     method: 'get',
    //     url: 'https://randomuser.me/api/',
    //     responseType: 'stream'
    //   })
    //     .then(function (response) {
    //       response.write(data);
        });
    });
    });


app.listen(3000,function(req,res){
    console.log("listening.....")
})




// https.get("https://randomuser.me/api/?gender=female",function(response){
    //     console.log(response);
    //     console.log(response.statusCode);

    //     response.on("data",function(data){
	//     const random = JSON.parse(data);
	//     const pic = random.results.picture[0];
    //         console.log(pic);