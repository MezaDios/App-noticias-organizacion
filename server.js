const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const routes = require('./routes/routes');

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/noticias/index.html'));
});

app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/dist/noticias'));

app.use(routes);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});