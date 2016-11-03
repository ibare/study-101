let express = require('express');
let app = express();
let exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('*', (req, res) => {
  res.render('root', { Url: req.url });
});

app.listen(8080, () => console.log('ready 8080'));
