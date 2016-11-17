let express = require('express');
let morgan = require('morgan');
let app = express();
let exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: '스터디 101' });
});

app.get('/api/profile', (req, res) => {
  res.send({
    name: '홍길동'
  });
});

app.get('/api/user/family', (req, res) => {
  res.send([
    { name: '조은' },{ name: '좋은' },{ name: '조~은' }
  ]);
});

app.listen(6060);
