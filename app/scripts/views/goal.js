Demi.Views.Goal = Backbone.View.extend({

  template: _.template($('.goal-template').text()),

  initialize: function () {
    $('.goal-items ol').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.html(this.template({goal: this.model}))
  }

})