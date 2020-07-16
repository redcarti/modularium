/*
    If you wanna host modularium bot on https://glitch.com, just use this example
    --- 
    Если вы хотите захостить бота на https://glitch.com, используйте этот пример

    Credits: https://anidiots.guide/other-guides/hosting-on-glitch#keeping-the-project-alive
*/

module.exports = () => {
    const http = require('http');
    const express = require('express');
    const app = express();
    app.get("/", (request, response) => {
      console.log(Date.now() + " Ping Received");
      response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
      http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
}