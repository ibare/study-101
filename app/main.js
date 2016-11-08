import Woowahan from 'woowahan';

//TODO: global.$ = global.jQuery = Woowahan.$;

let mainView = Woowahan.View.create('Main', {
  template: '<h1>Woowa Main</h1>'
});

let app = new Woowahan();

app.start({
  url: '/', view: mainView, conatiner: 'body'
});
