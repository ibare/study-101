let express = require('express');
let app = express();
let exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

  res.render('client', {});
});

app.listen(6060, () => console.log('ready 6060'));
