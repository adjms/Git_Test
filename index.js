const express = require('express');
const path = require('path');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);


//Starting Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    //console.log(path.join(__dirname, "public/css"));
});