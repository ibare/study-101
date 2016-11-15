import SubTemplate from './sub.hbs';

export var Sub = Woowahan.View.create('Sub', {
  template: SubTemplate,

  events: {
    'click button': 'onUpdate'
  },

  onUpdate() {
    this.setModel({
      time: Date.now()
    });
  },

  initialize() {
    this.setModel({
      time: '어제'
    });

    this.super();
  },

  viewWillMount(data) {
    return data;
  }
});
