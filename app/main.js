import Woowahan from 'woowahan';
import * as Views from './views';

global.$ = global.jQuery = Woowahan.$;

let app = new Woowahan();

app.start([
  { url: '/', view: Views.Main, container: 'body' },
  { url: '/sub', view: Views.Sub, container: 'body' }
]);
