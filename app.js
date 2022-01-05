const path = require('path');
const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('port',process.env.PORT || 3000)

app.listen(app.get('port'), ()=> {console.log('on http://localhost:'+app.get('port'));
})

app.get('/', (req,res)=> res.sendFile(path.resolve(__dirname, 'views', 'home.html')));