import SubTemplate from './sub.hbs';

export var Sub = Woowahan.View.create('Sub', {
  template: SubTemplate,

  events: {
    'click button': 'onGetFamily'
  },

  onGetFamily() {
    this.dispatch(Woowahan.Action.create('FETCH family'), function(data) {
      this.setModel({
        family: data
      });

      this.updateView();
    });
  },

  initialize() {
    this.dispatch(Woowahan.Action.create('FETCH PROFILE'), function(data) {
      this.setModel({
        username: data.name
      });
    });

    this.super();
  },

  viewWillMount(data) {
    return data;
  }
});
