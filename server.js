const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/noticias'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/noticias/index.html'));
});

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});