Demi.Views.Goal = Backbone.View.extend({

  tagName: 'li',
  className: 'item row',

  template: _.template($('.goal-template').text()),

  initialize: function () {
    $('.goal-items ol').append(this.el);
    this.render();
  },

  events: {
    'click .delete-button': 'destroy'
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes))
  },

  destroy: function () {
    this.model.destroy();
    this.remove()
  }

})